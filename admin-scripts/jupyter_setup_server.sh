#!/bin/bash
CONFIRM="n"
echo -n "Enable Research Labs on this server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo Enabling the Jupyter Lab on this server
	sleep 10
	echo Creating Jupyter secures and enviroments, not Jupyter and its cores...
	
	sudo apt update && sudo apt full-upgrade -y
	sudo apt install -y openssl pwgen netcat

	# Install NodeJS, Npm and Native Authenticator 
	echo -e "Installing NodeJS..."
	sudo ~/admin-scripts/reset_cache_to_install_node.sh
	sudo apt update && sudo apt full-upgrade -y
	sudo apt install -y nodejs yarn
	
	# Install compliers (GCC, G++, MAKE and ninja-build), remoting (OpenSSH), Password Generator, Network diagnostics and OpenAl library.
	# Also install NVIDIA Drivers and CUDA compliers for users whom WSL2 installed.
	# Usefull when you use further application, build from source (e.g. install from source from GitHub).
	echo -e "Installing compliers..."
	sudo apt install -y gcc g++ gdb make cmake automake ninja-build rsync zip
	sudo apt install -y libopenal1 libcurl4-gnutls-dev librtmp-dev sox ffmpeg libcairo2 libcairo2-dev libgirepository1.0-dev
	
	# Plus, install Python3
	sudo apt install -y python3 python3-pip git nano neofetch net-tools mysql-server 
	
	# Copy configuration to environment folder
	echo -e "Copy configurations to folder..."
	sudo mkdir /etc/jupyter/
	sudo cp ~/admin-scripts/admins.txt /etc/jupyter/admins.txt
	sudo cp ~/admin-scripts/allow_users.txt /etc/jupyter/allow_users.txt
	sudo cp ~/admin-scripts/mysql_password.txt /etc/jupyter/mysql_password.txt
	sudo cp ~/admin-scripts/config.py /etc/jupyter/config.py
	
	# Create cookie secret file and proxy authenticator
	echo -e "Creating authenticator"
	sudo touch /etc/jupyter/proxy_auth_token
	sudo chown :sudo /etc/jupyter/proxy_auth_token
	sudo chmod g+rw /etc/jupyter/proxy_auth_token
	sudo openssl rand -hex 32 > /etc/jupyter/proxy_auth_token
	sudo touch /etc/jupyter/jupyterhub_cookie_secret
	sudo chown :sudo /etc/jupyter/jupyterhub_cookie_secret
	sudo chmod g+rw /etc/jupyter/jupyterhub_cookie_secret
	sudo openssl rand -hex 32 > /etc/jupyter/jupyterhub_cookie_secret
	sudo chmod 600 /etc/jupyter/jupyterhub_cookie_secret
	sudo chmod 600 /etc/jupyter/proxy_auth_token
	
	# Install Configurable HTTP proxy
	sudo npm install -g configurable-http-proxy
	
	# Install PIP pre-build packages
	sudo pip install git+https://github.com/qiskit-community/Quantum-Challenge-Grader.git
	sudo pip install manimlib pymysql
	
	# Enable IBM-Q
	echo -e "Copying IBM-Q and its dependencies..."
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab/local /usr
	sudo pip install openqasm3 docplex h5py fastdtw scikit-learn fastdtw nasdaq-data-link yfinance lmfit uncertainties terminado 'dill==0.3.5' 'jupyterlab==3.6.1' 'urllib3==1.26.16' 'PyJWT>=2.4.0'
	echo -e "Vailidating pip installations..."
    sudo pip check

	# Sudo install other PIP packages from database
	pip install -r ~/admin-scripts/pip_packages.txt
	echo -e "Vailidating pip installations..."
    sudo pip check
	sudo jupyter lab build
	
	# Installing kernel
	sudo apt install -y r-cran-irdisplay r-cran-irkernel r-cran-repr
	sudo pip install jupyter-cpp-kernel
	sudo cp -r ~/admin-scripts/jupyter-external-packages/qiskit-kernel/local /usr
	
	# Disable legacy features (Notebook, Extension Manager) because of security issues
	echo -e "Disabling the classic mode"
	sudo jupyter labextension disable @jupyterlab/extensionmanager-extension
	sudo jupyter labextension disable @jupyterlab/help-extension:launch-classic

	# Auto removal
	sudo apt autoremove -y

	# Create a service for jupyter
	echo -e "Create a service for Jupyter"
	sudo cp ~/admin-scripts/rl.service /etc/init.d/researchlabs
	sudo chmod +rwxrxrx /etc/init.d/researchlabs
	sleep 10
	echo Installing dependencies...
	
	# Re-update packages
	sudo apt update && sudo apt install --fix-missing -y && sudo apt full-upgrade -y
	sudo jupyter labextension update --all
	sleep 10

	# Prepar MySQL databases
	echo Preparing MySQL databases...
	sudo service mysql stop
	sudo killall -vw mysqld
	sudo mysqld_safe --skip-grant-tables >res 2>&1 &
	echo 'Resetting password... hold on'
	sleep 5
	sudo mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'administrator';create database jupyterdb;FLUSH PRIVILEGES;"
	echo 'Cleaning up...'
	sudo rm res
	sudo killall -v mysqld
	sudo service mysql restart
	echo -e "MySQL password has been reset to the default\nMySQL default root password: administrator\n\n"
	
	# Write MySQL password to file, necessary for security. Can be changed in folder /etc/jupyter/config.py
	sudo echo 'administrator' > /etc/jupyter/mysql_password.txt
	
	# Copy login folder
	echo -e "Installing Login Web Templates..."
	sudo rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/static
	sudo rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/templates
	sudo mkdir /usr/local/share/jupyterhub/static
	sudo mkdir /usr/local/share/jupyterhub/templates
	sudo cp -TRv ~/admin-scripts/user-interface/hub-login/static /usr/local/share/jupyterhub/static
	sudo cp -TRv ~/admin-scripts/user-interface/hub-login/templates /usr/local/share/jupyterhub/templates
	
	# Copy tutorial notebooks into /etc/jupyter
	echo -e "Coping tutorial notebooks into global folder..."
	sudo mkdir /etc/jupyter/tutorials-notebooks
	sudo cp -TRv ~/admin-scripts/tutorials-notebooks /etc/jupyter/tutorials-notebooks
	sudo chmod 740 /etc/jupyter/tutorials-notebooks
	
	# Security in folder /etc/jupyter. See issue #11
	sudo chmod 700 /etc/jupyter
	
	echo -e "Cleaning up caches..."
	sudo pip cache purge
	
	echo -e "\nInstalled Jupyter Lab for multiple users!\nPlease sign out to update all necessary variables!"
else
	echo "Aborted!"
fi

echo