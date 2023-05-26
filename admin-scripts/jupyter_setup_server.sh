#!/bin/bash
CONFIRM="n"
echo -n "Enable JupyterLab on this server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo Enabling the Jupyter Lab on this server
	sleep 10
	echo Creating Jupyter secures and enviroments, not Jupyter and its cores...
	
	# Add Xeus C++ kernel to apt.
	echo -e "Add Xeus C++ kernel to repository..."
	sudo add-apt-repository ppa:ppa-verse/xeus-cling --yes
	sudo apt full-upgrade -y
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
	sudo apt install -y gcc g++ gdb make cmake automake ninja-build rsync zip openssh-server openssh-client pwgen netcat libopenal1 wsl libcurl4-gnutls-dev librtmp-dev nvidia-utils-525-server nvidia-headless-525-server nvidia-driver-525-server sox ffmpeg libcairo2 libcairo2-dev
	
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
	
	# Install PIP build packages
	sudo pip install git+https://github.com/qiskit-community/Quantum-Challenge-Grader.git
	sudo pip install manimlib pymysql

	# Sudo install PIP packages from database
	sudo pip install altair
	sudo pip install aquirdturtle-collapsible-headings
	sudo pip install async-lru
	sudo pip install autopep8
	sudo pip install backports.functools-lru-cache
	sudo pip install blosc2
	sudo pip install bokeh
	sudo pip install bottleneck
	sudo pip install brotlipy
	sudo pip install cached-property
	sudo pip install cliapp
	sudo pip install cmdtest
	sudo pip install command-not-found
	sudo pip install cvxpy
	sudo pip install cytoolz
	sudo pip install dbus-python
	sudo pip install distributed
	sudo pip install distro
	sudo pip install distro-info
	sudo pip install flit-core
	sudo pip install fqdn
	sudo pip install gmpy2
	sudo pip install graphviz
	sudo pip install heapdict
	sudo pip install imagecodecs
	sudo pip install importlib-metadata
	sudo pip install importlib-resources
	sudo pip install ipympl
	sudo pip install ipysheet
	sudo pip install isoduration
	sudo pip install jeepney
	sudo pip install jlab-enhanced-cell-toolbar
	sudo pip install jsonpointer
	sudo pip install jupyter-archive
	sudo pip install jupyter-matlab-proxy
	sudo pip install jupyter-resource-usage
	sudo pip install jupyter-server
	sudo pip install jupyterhub-nativeauthenticator
	sudo pip install jupyterlab
	sudo pip install jupyterlab-autoversion
	sudo pip install jupyterlab-cell-flash
	sudo pip install jupyterlab-code-formatter
	sudo pip install jupyterlab-dash
	sudo pip install jupyterlab-drawio
	sudo pip install jupyterlab-execute-time
	sudo pip install jupyterlab-fasta
	sudo pip install jupyterlab-favorites
	sudo pip install jupyterlab-genv
	sudo pip install jupyterlab-geojson
	sudo pip install jupyterlab-image-editor
	sudo pip install jupyterlab-katex
	sudo pip install jupyterlab-kernelspy
	sudo pip install jupyterlab-limit-output
	sudo pip install jupyterlab-link-share
	sudo pip install jupyterlab-lsp
	sudo pip install jupyterlab-markup
	sudo pip install jupyterlab-mathjax3
	sudo pip install jupyterlab-open-url-parameter
	sudo pip install jupyterlab-pullrequests
	sudo pip install jupyterlab-pyflyby
	sudo pip install jupyterlab-pytutor
	sudo pip install jupyterlab-recents
	sudo pip install jupyterlab-skip-traceback
	sudo pip install jupyterlab-spreadsheet-editor
	sudo pip install jupyterlab-tour
	sudo pip install jupyterlab-vega2
	sudo pip install jupyterlab-vega3
	sudo pip install kaleidoscope
	sudo pip install launchpadlib
	sudo pip install lazy-loader
	sudo pip install lckr-jupyterlab-variableinspector
	sudo pip install lz4
	sudo pip install manimcs
	sudo pip install manim-course-utils
	sudo pip install mamba
	sudo pip install mapomatic
	sudo pip install markdown
	sudo pip install matlab
	sudo pip install mthree
	sudo pip install munkres
	sudo pip install nbgitpuller
	sudo pip install netifaces
	sudo pip install nxpd
	sudo pip install onnxruntime
	sudo pip install openpyxl
	sudo pip install papermill
	sudo pip install pip-chill
	sudo pip install pkgutil-resolve-name
	sudo pip install prototype-zne
	sudo pip install py-spy
	sudo pip install pycurl
	sudo pip install pydot
	sudo pip install pygobject
	sudo pip install pylatexenc
	sudo pip install pymysql
	sudo pip install pysocks
	sudo pip install scikit-image
	sudo pip install scriptedforms
	sudo pip install secretstorage
	sudo pip install ssh-import-id
	sudo pip install statsmodels
	sudo pip install stickyland
	sudo pip install system-info
	sudo pip install systemd-python
	sudo pip install rich
	sudo pip install tables
	sudo pip install ttystatus
	sudo pip install typing-extensions
	sudo pip install ubuntu-advantage-tools
	sudo pip install ufw
	sudo pip install unattended-upgrades
	sudo pip install unicodedata2
	sudo pip install uri-template
	sudo pip install voila
	sudo pip install wadllib
	sudo pip install webcolors
	sudo pip install xlrd

	# Installing kernel
	sudo apt install -y libxeus-cling0 libxeus1 libxeus6 libxwidgets1 r-cran-irdisplay r-cran-irkernel r-cran-repr ruby-ipynbdiff xcpp xeus-cling-dev xeus-dev xwidgets-dev
	sudo pip install jupyter-matlab-proxy jlab-enhanced-launcher
	
	# Disable legacy features (Notebook, Extension Manager) because of security issues
	echo -e "Disabling the classic mode"
	sudo jupyter labextension disable @jupyterlab/extensionmanager-extension
	sudo jupyter labextension disable @jupyterlab/help-extension:launch-classic
	sudo jupyter labextension disable @quantum/lab-ui

	# Disable remoting linux terminal
	sudo apt remove -y python3-terminado python-terminado-doc
	sudo pip uninstall -y terminado
	sudo apt autoremove -y

	# Create a service for jupyter
	echo -e "Create a service for Jupyter"
	sudo cp ~/admin-scripts/rl.service /etc/init.d/jupyter
	sudo chmod +rwxrxrx /etc/init.d/jupyter
	sleep 10
	echo Installing dependencies...
	
	# Re-update packages
	sudo apt update && sudo apt install --fix-missing -y && sudo apt full-upgrade -y
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
	
	echo -e "Install Lab theme"
	sudo rmdir --ignore-fail-on-non-empty /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	sudo rmdir --ignore-fail-on-non-empty /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension
	sudo mkdir /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	sudo mkdir /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension
	sudo cp -TRv /root/admin-scripts/user-interface/lab/dark /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-dark-extension
	sudo cp -TRv /root/admin-scripts/user-interface/lab/light /usr/local/share/jupyter/lab/themes/@jupyterlab/theme-light-extension	
	
	# Copy tutorial notebooks into /etc/jupyter
	echo -e "Coping tutorial notebooks into global folder..."
	sudo mkdir /etc/jupyter/tutorials-notebooks
	sudo cp -TRv ~/admin-scripts/tutorials-notebooks /etc/jupyter/tutorials-notebooks
	sudo chmod +rwxrxrx /etc/jupyter/tutorials-notebooks

	echo -e "\nInstalled Jupyter Lab for multiple users!"
else
	echo "Aborted!"
fi

echo
