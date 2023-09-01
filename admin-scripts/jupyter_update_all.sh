#!/bin/bash
CONFIRM="n"
echo -e -n "The server will be updated\nThat means the Jupyter Services need to be determined. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	apt update && apt full-upgrade -y
	pip install -r ~/admin-scripts/pip_packages.txt
	pip install ~/admin-scripts/external-packages/*.whl
	npm update -g
	npm install
	echo "Upgrade completed"
else
	echo "Aborted!"
fi

echo