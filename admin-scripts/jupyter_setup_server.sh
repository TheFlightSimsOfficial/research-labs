#!/bin/bash
CONFIRM="n"
echo -n "Enable JupyterLab on this server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	clear
	echo Enabling the Jupyter Lab on this server
	sleep 10
	echo Creating Jupyter secures and enviroments, not Jupyter and its cores...
	
	# Add Xeus C++ kernel to apt.
	clear
	echo -e "Add Xeus C++ kernel to repository..."
	sudo add-apt-repository ppa:ppa-verse/xeus-cling --yes
	sudo apt full-upgrade -y
    sudo apt install -y openssl pwgen netcat
	
	# Copy configuration to environment folder
	clear
	echo -e "Copy configurations to folder..."
	mkdir /etc/jupyter/
    cp /root/admin-scripts/config.py /etc/jupyter/config.py
	
	# Create cookie secret file and proxy authenticator
	clear
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
	
	# Install NodeJS, Npm and Native Authenticator
	clear 
	echo -e "Installing NodeJS..."
	curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
	sudo apt update && sudo apt full-upgrade -y
	sudo apt install -y nodejs yarn
	sudo pip install jupyterhub-nativeauthenticator
	
	# Install compliers (GCC, G++, MAKE and ninja-build), remoting (OpenSSH), Password Generator, Network diagnostics and OpenAl library.
	# Usefull when you use further application, build from source (e.g. install from source from GitHub).
	clear
	echo -e "Installing compliers..."
	sudo apt install -y gcc g++ gdb make cmake automake ninja-build rsync zip openssh-server openssh-client pwgen netcat libopenal1
	
	# It's only useful when you use WSL2, where GPU compute is enabled. 
	# Plus, library in there is necessary for printing and image drawings 
	sudo apt install -y nvidia-utils-525-server nvidia-headless-525-server nvidia-driver-525-server sox ffmpeg libcairo2 libcairo2-dev
	sudo apt install -y python3 python3-pip git nano neofetch net-tools mysql-server 
	
	# Install JupyterLab cores (Hub, Notebook, Lab, Voial, Scipy, Urllib4, sympy and mysql connectors)
	clear
	echo -e "Installing Jupyter PIP packages"
	sudo pip install jupyterhub notebook jupyterlab voila scipy pexpect nest-asyncio sympy urllib3  manimlib pymysql
	
	# Install Jupyter Core and Jupyter Server
	sudo apt install -y jupyter-core jupyter-server 

	# Install C++ Xeus kernels
	clear
	echo -e "Installing C++ Kernels..."
	sudo apt install -y libxeus-cling0 libxeus1 libxeus6 libxwidgets1 xcpp xeus-cling-dev xeus-dev xwidgets-dev r-cran-irdisplay r-cran-repr

	# Install Configurable HTTP Proxy
	clear 
	echo -e "Configuring HTTP Proxy..."
	npm install -g configurable-http-proxy

	# Install Jupyter Toolboxes
	clear
	echo -e "Installing tools for JupyterLab"
	sudo pip install jlab-enhanced-cell-toolbar jlab-enhanced-launcher jupyterlab_image_editor jupyter-archive jupyterlab-cell-flash ipysheet ipywidgets ipympl pyflyby jupyterlab-git jupyterlab_autoversion jupyterlab-pullrequests jupyterlab_pyflyby
	sudo pip install jupyterlab-favorites jupyterlab-kernelspy jupyterlab-link-share jupyterlab-logout jupyterlab-open-url-parameter jupyterlab-pytutor jupyterlab-recents jupyterlab-tour 
	sudo pip install jupyterlab-spreadsheet-editor stickyland jupyterlab_genv jupyterlab-code-formatter aquirdturtle_collapsible_headings jupyterlab-drawio jupyterlab-lsp jupyterlab_markup jupyterlab_execute_time jupyterlab_limit_output jupyterlab-skip-traceback jupyterlab-dash
	
	# Install Jupyter Lab display kernels, differ from language kernels
	sudo pip install jupyterlab-fasta
	sudo pip install jupyterlab-geojson
	sudo pip install jupyterlab-katex
	sudo pip install jupyterlab-mathjax3
	sudo pip install jupyterlab-vega2
	sudo pip install jupyterlab-vega3 
	sudo pip install onnxruntime
	sudo pip install lckr-jupyterlab-variableinspector scriptedforms

	# Install Qiskit (Python3) for quantum computing research
	clear
	echo -e "Install Qiskit for python3"
	sudo pip install qiskit qiskit-aer qiskit-ibm-provider qiskit-ibm-runtime qiskit[visualization] matlab pylatexenc qiskit_braket_provider qiskit[nature] qiskit[finance] qiskit[optimization] qiskit[machine-learning]
	
	# Disable legacy features (Notebook, Extension Manager) because of security issues
	clear
	echo -e "Disabling the classic mode"
	sudo jupyter labextension disable @jupyterlab/extensionmanager-extension
	sudo jupyter labextension disable @jupyterlab/help-extension:launch-classic

	# Disable remoting linux terminal
	sudo apt remove -y python3-terminado python-terminado-doc
	sudo pip uninstall -y terminado
	sudo apt autoremove -y

	# Create a service for jupyter
	clear
	echo -e "Create a service for Jupyter"
	cp jupyter.service /etc/init.d/jupyter
    chmod +rwxrxrx /etc/init.d/jupyter
	sleep 10
	clear
	echo Installing dependencies...
	
	# Re-update packages
	clear
	sudo apt update && sudo apt install --fix-missing -y && sudo apt full-upgrade -y
	sleep 10

	# Prepar MySQL databases
	clear
	echo Preparing MySQL databases...
	service mysql stop
	killall -vw mysqld
	mysqld_safe --skip-grant-tables >res 2>&1 &
	echo 'Resetting password... hold on'
	sleep 5
	mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'administrator';create database jupyterdb;FLUSH PRIVILEGES;"
	echo 'Cleaning up...'
	rm res
	killall -v mysqld
	service mysql restart
	echo -e "MySQL password has been reset to the default\nMySQL default root password: administrator"
	
	# Write MySQL password to file, necessary for security. Can be changed in folder /etc/jupyter/config.py
	echo 'administrator' > /root/admin-script/smysql_password.txt
	
	# Copy login folder
	clear
	echo -e "Installing Login Web Templates..."
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/static
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/templates
	sudo mkdir /usr/local/share/jupyterhub/static
	sudo mkdir /usr/local/share/jupyterhub/templates
	sudo cp -TRv /root/admin-scripts/user-interface/hub-login/static /usr/local/share/jupyterhub/static
	sudo cp -TRv /root/admin-scripts/user-interface/hub-login/templates /usr/local/share/jupyterhub/templates
	
	# Copy Lab theme folder /usr/local/share/jupyter/lab/themes
	clear
	echo -e "Install Lab theme" 
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension
	sudo mkdir /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	sudo mkdir /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension
	sudo cp -TRv /root/admin-scripts/user-interface/lab/dark /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	sudo cp -TRv /root/admin-scripts/user-interface/lab/light /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension	
	
	clear 
	echo -e "Installed Jupyter Lab for multiple users!"
else
	echo "Aborted!"
fi

echo