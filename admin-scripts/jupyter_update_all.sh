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
	apt install libgirepository1.0-dev
	pip install -r ~/admin-scripts/pip_packages.txt
	pip install jupyter-c-kernel 'jupyter-cpp-kernel==1.0.0a2'
	install_c_kernel
	install_cpp_kernel
	cp -r ~/admin-scripts/jupyter-external-packages/c-kernel/share /usr
	cp -r ~/admin-scripts/jupyter-external-packages/qiskit-kernel/local /usr
	npm update npm
	npm install
	echo "Upgrade completed"
else
	echo "Aborted!"
fi

echo