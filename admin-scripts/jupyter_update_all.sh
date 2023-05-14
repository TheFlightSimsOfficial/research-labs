#!/bin/bash
CONFIRM="n"
echo -e -n "The server will be updated\nThat means the Jupyter Services need to be determined. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	sudo apt update && sudo apt full-upgrade -y
	sudo pip list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1 | xargs -n1 sudo pip install
	sudo pip install jupyterhub notebook jupyterlab
	npm update npm
	npm install
	sudo apt remove -y python3-terminado python-terminado-doc
	sudo pip uninstall -y terminado
	echo "Upgrade completed"
else
	echo "Aborted!"
fi

echo
