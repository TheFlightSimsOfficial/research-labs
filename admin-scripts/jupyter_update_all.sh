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
	sudo apt install libgirepository1.0-dev
	sudo pip install -r ~/admin-scripts/pip_packages.txt
	sudo pip install jupyter-c-kernel
	sudo install_c_kernel
	sudo cp -r ~/admin-scripts/jupyter-external-packages/c-kernel/share /usr
	sudo cp -r ~/admin-scripts/jupyter-external-packages/qiskit-kernel/local /usr
	sudo npm update npm
	sudo npm install
	echo "Upgrade completed"
else
	echo "Aborted!"
fi

echo