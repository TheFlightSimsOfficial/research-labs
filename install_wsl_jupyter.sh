#!/bin/bash
CONFIRM="n"
echo -e -n "Install Jupyter Lab admin-scripts for root user on WSL? (Y/n): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo -e -n "\nNote that you can only use the scripts normally using root user.\n"
	# Creating folders in ~/admin-scripts
	sudo mkdir ~/admin-scripts
	sudo mkdir ~/admin-scripts/user-interface
	sudo mkdir ~/admin-scripts/tutorials-notebooks

	# Copy files and folers to the right place
	sudo cp -TRv admin-scripts  ~/admin-scripts
	sudo cp -TRv user-interface ~/admin-scripts/user-interface
	sudo cp -TRv tutorials-notebooks ~/admin-scripts/tutorials-notebooks
	sudo chmod +rwx ~/admin-scripts/*.sh

	# Display finished text
	echo -e -n "\nInstalled admin-scripts for active user."
else
	echo "Aborted!"
fi

echo