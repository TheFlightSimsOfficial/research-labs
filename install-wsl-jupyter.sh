#!/bin/bash
CONFIRM="n"
echo -e -n "Install Jupyter Lab administrator-scripts for root user on WSL? (Y/n): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo -e -n "\nNote that you can only use the scripts normally using root user.\n"
	sudo mkdir /root/
	sudo cp -R admin-scripts /root/
	sudo cp -R user-interface /root/admin-scripts
	sudo chmod +rwx /root/admin-scripts/*.sh
	echo -e -n "\nInstalled admin-scripts for root user."
else
	echo "Aborted!"
fi

echo
