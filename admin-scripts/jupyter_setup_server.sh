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
	sudo pip install manimlib manimce 

	# Copy legacy Qiskit and IBM-Q packages
	sudo cp -TRv ~/admin-scripts/jupyter-external-packages/ibm-q-lab/python310-dist-packages /usr/local/lib/python3.10/dist-packages
	sudo cp -TRv ~/admin-scripts/jupyter-external-packages/ibm-q-lab/jupyter-lab-ext /usr/local/share/jupyter/labextensions

	# Sudo install PIP packages from database
	pip install 'altair==4.2.0'
	pip install 'aquirdturtle-collapsible-headings==3.1.0'
	pip install 'async-lru==2.0.2'
	pip install 'autopep8==2.0.2'
	pip install 'backports.functools-lru-cache==1.6.4'
	pip install 'blosc2==2.0.0'
	pip install 'bokeh==3.0.2'
	pip install 'bottleneck==1.3.5'
	pip install 'brotlipy==0.7.0'
	pip install 'cached-property==1.5.2'
	pip install 'cliapp==1.0.9'
	pip install 'cmdtest==0.1.1'
	pip install 'command-not-found==0.3'
	pip install 'cvxpy==1.1.23'
	pip install 'cytoolz==0.12.0'
	pip install 'dbus-python==1.2.18'
	pip install 'distributed==2022.11.0'
	pip install 'distro==1.7.0'
	pip install 'distro-info==1.1build1'
	pip install 'flit-core==3.8.0'
	pip install 'fqdn==1.5.1'
	pip install 'gmpy2==2.1.2'
	pip install 'graphviz==0.20.1'
	pip install 'heapdict==1.0.1'
	pip install 'imagecodecs==2023.1.23'
	pip install 'importlib-metadata==6.6.0'
	pip install 'importlib-resources==5.12.0'
	pip install 'ipympl==0.9.2'
	pip install 'ipysheet==0.7.0'
	pip install 'isoduration==20.11.0'
	pip install 'jeepney==0.7.1'
	pip install 'jlab-enhanced-cell-toolbar==3.5.1'
	pip install 'jsonpointer==2.3'
	pip install 'jupyter-archive==3.3.4'
	pip install 'jupyter-matlab-proxy==0.5.3'
	pip install 'jupyter-resource-usage==0.7.0'
	pip install 'jupyter-server==2.5.0'
	pip install 'jupyterhub-nativeauthenticator==1.1.0'
	pip install 'jupyterlab==3.6.1'
	pip install 'jupyterlab-autoversion==0.3.6'
	pip install 'jupyterlab-cell-flash==0.3.5'
	pip install 'jupyterlab-code-formatter==2.0.0'
	pip install 'jupyterlab-dash==0.1.0a3'
	pip install 'jupyterlab-drawio==0.9.0'
	pip install 'jupyterlab-execute-time==2.3.1'
	pip install 'jupyterlab-fasta==3.2.0'
	pip install 'jupyterlab-favorites==3.1.1'
	pip install 'jupyterlab-genv==0.2.0'
	pip install 'jupyterlab-geojson==3.3.1'
	pip install 'jupyterlab-image-editor==0.1.0'
	pip install 'jupyterlab-katex==3.3.0'
	pip install 'jupyterlab-kernelspy==3.1.0'
	pip install 'jupyterlab-limit-output==1.0.1'
	pip install 'jupyterlab-link-share==0.3.0'
	pip install 'jupyterlab-lsp==4.1.0'
	pip install 'jupyterlab-markup==2.0.0'
	pip install 'jupyterlab-mathjax3==4.3.0'
	pip install 'jupyterlab-open-url-parameter==0.1.0'
	pip install 'jupyterlab-pullrequests==3.0.2'
	pip install 'jupyterlab-pyflyby==5.0.0'
	pip install 'jupyterlab-pytutor==0.1.1'
	pip install 'jupyterlab-recents==3.2.0'
	pip install 'jupyterlab-skip-traceback==5.0.0'
	pip install 'jupyterlab-spreadsheet-editor==0.6.1'
	pip install 'jupyterlab-tour==3.1.4'
	pip install 'jupyterlab-vega2==3.2.0'
	pip install 'jupyterlab-vega3==3.2.0'
	pip install 'kaleidoscope==0.0.13'
	pip install 'launchpadlib==1.10.16'
	pip install 'lazy-loader==0.2'
	pip install 'lckr-jupyterlab-variableinspector==3.0.9'
	pip install 'lz4==4.3.2'
	pip install 'manimcs==0.4.7'
	pip install 'manim-course-utils==1.0.0'
	pip install 'mamba==0.11.0'
	pip install 'mapomatic==0.5.0'
	pip install 'markdown==3.3.6'
	pip install 'matlab==0.1'
	pip install 'mthree==1.1.0'
	pip install 'munkres==1.1.4'
	pip install 'nbgitpuller==1.1.1'
	pip install 'netifaces==0.11.0'
	pip install 'nxpd==0.2.0'
	pip install 'onnxruntime==1.14.1'
	pip install 'openpyxl==3.0.10'
	pip install 'papermill==2.4.0'
	pip install 'pip-chill==1.0.3'
	pip install 'pkgutil-resolve-name==1.3.10'
	pip install 'prototype-zne==1.0.0'
	pip install 'py-spy==0.3.3'
	pip install 'pycurl==7.45.1'
	pip install 'pydot==1.4.2'
	pip install 'pygobject==3.42.1'
	pip install 'pylatexenc==2.10'
	pip install 'pymysql==1.0.3'
	pip install 'pysocks==1.7.1'
	pip install 'qiskit-aqua-interfaces==0.2.1'
	pip install 'qiskit-braket-provider==0.0.3'
	pip install 'qiskit-dynamics==0.4.0'
	pip install 'qiskit-experiments==0.4.0'
	pip install 'qiskit-finance==0.3.4'
	pip install 'qiskit-ibm-provider==0.5.3'
	pip install 'qiskit-ibm-runtime==0.9.4'
	pip install 'qiskit-machine-learning==0.6.0'
	pip install 'qiskit-nature-pyscf==0.1.1'
	pip install 'qiskit-qasm3-import==0.2.0'
	pip install 'scikit-image==0.19.3'
	pip install 'scriptedforms==0.10.1'
	pip install 'secretstorage==3.3.1'
	pip install 'ssh-import-id==5.11'
	pip install 'statsmodels==0.13.5'
	pip install 'stickyland==0.2.1'
	pip install 'system-info==2.0.0'
	pip install 'systemd-python==234'
	pip install 'rich==13.3.5'
	pip install 'tables==3.7.0'
	pip install 'ttystatus==0.38'
	pip install 'typing-extensions==4.6.1'
	pip install 'ubuntu-advantage-tools==8001'
	pip install 'ufw==0.36.1'
	pip install 'unattended-upgrades==0.1'
	pip install 'unicodedata2==15.0.0'
	pip install 'uri-template==1.2.0'
	pip install 'voila==0.4.0'
	pip install 'wadllib==1.3.6'
	pip install 'webcolors==1.12'
	pip install 'xlrd==2.0.1'
	
	# Disable legacy features (Notebook, Extension Manager) because of security issues
	echo -e "Disabling the classic mode"
	sudo jupyter labextension disable @jupyterlab/extensionmanager-extension
	sudo jupyter labextension disable @jupyterlab/help-extension:launch-classic

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
