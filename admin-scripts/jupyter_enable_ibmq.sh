#!/bin/bash
CONFIRM="n"
echo -e "Note that this feature is currently under development\n"
echo -n "Enable IBM-Q on this server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo -e "Copying IBM-Q, Qiskit and its dependencies..."
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab /usr
	echo -e "Vailidating pip installations..."
    sudo pip check
else
	echo "Aborted!"
fi

echo