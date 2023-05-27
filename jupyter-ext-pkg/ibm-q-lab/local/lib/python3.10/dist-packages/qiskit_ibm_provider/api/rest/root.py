# This code is part of Qiskit.
#
# (C) Copyright IBM 2021.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""Root REST adapter."""

import logging
from typing import Dict, List, Any, Union
import json

from qiskit_ibm_provider.utils.utils import filter_data

from .base import RestAdapterBase
from .utils.data_mapper import map_job_response
from .job import Job

logger = logging.getLogger(__name__)


class Api(RestAdapterBase):
    """Rest adapter for general endpoints."""

    URL_MAP = {
        "login": "/users/loginWithToken",
        "user_info": "/users/me",
        "hubs": "/Network",
        "version": "/version",
        "bookings": "/Network/bookings/v2",
        "jobs": "/jobs/v2",
    }

    def job(self, job_id: str) -> Job:
        """Return an adapter for the job.

        Args:
            job_id: ID of the job.

        Returns:
            The backend adapter.
        """
        return Job(self.session, job_id)

    # Client functions.

    def hubs(self) -> List[Dict[str, Any]]:
        """Return the list of hub/group/project sets available to the user.

        Returns:
            JSON response.
        """
        url = self.get_url("hubs")
        return self.session.get(url).json()

    def version(self) -> Dict[str, Union[str, bool]]:
        """Return the version information.

        Returns:
            A dictionary with information about the API version,
            with the following keys:

                * ``new_api`` (bool): Whether the new API is being used

            And the following optional keys:

                * ``api-*`` (str): The versions of each individual API component
        """
        url = self.get_url("version")
        response = self.session.get(url)

        try:
            version_info = response.json()
            version_info["new_api"] = True
        except json.JSONDecodeError:
            return {"new_api": False, "api": response.text}

        return version_info

    def login(self, api_token: str) -> Dict[str, Any]:
        """Login with token.

        Args:
            api_token: API token.

        Returns:
            JSON response.
        """
        url = self.get_url("login")
        return self.session.post(url, json={"apiToken": api_token}).json()

    def user_info(self) -> Dict[str, Any]:
        """Return user information.

        Returns:
            JSON response of user information.
        """
        url = self.get_url("user_info")
        response = self.session.get(url).json()

        return response

    def jobs(
        self,
        limit: int = 10,
        skip: int = 0,
        descending: bool = True,
        extra_filter: Dict[str, Any] = None,
    ) -> List[Dict[str, Any]]:
        """Return a list of job information.

        Args:
            limit: Maximum number of items to return.
            skip: Offset for the items to return.
            descending: Whether the jobs should be in descending order.
            extra_filter: Additional filtering passed to the query.

        Returns:
            JSON response.
        """
        url = self.get_url("jobs")
        order = "DESC" if descending else "ASC"

        query = {
            "order": "creationDate " + order,
            "limit": limit,
            "skip": skip,
        }
        if extra_filter:
            query.update(extra_filter)

        if logger.getEffectiveLevel() is logging.DEBUG:
            logger.debug(
                "Endpoint: %s. Method: GET. Request Data: {'filter': %s}",
                url,
                filter_data(query),
            )
        data = self.session.get(url, params=query).json()
        items = data.get("items")
        for job_data in items:
            map_job_response(job_data)
        return items