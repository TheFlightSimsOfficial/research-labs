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
	mkdir /etc/jupyter/
	sudo apt install -y openssl
	cp config.py /etc/jupyter/config.py
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
	chmod +rw /etc/jupyter/*
	cp jupyter.service /etc/init.d/jupyter
	chmod +rwxrxrx /etc/init.d/jupyter
	sudo add-apt-repository ppa:ppa-verse/xeus-cling
	sudo apt update && sudo apt full-upgrade -y
	git clone https://github.com/jupyterhub/nativeauthenticator.git /etc/jupyter/
	sudo apt install -y gcc g++ gdb make cmake automake ninja-build rsync zip openssh-server openssh-client pwgen netcat libopenal1
	sudo apt install -y nvidia-utils-525-server nvidia-headless-525-server nvidia-driver-525-server sox ffmpeg libcairo2 libcairo2-dev
	sudo apt install -y python3 python3-pip git nano neofetch net-tools mysql-server 
	sudo apt install -y jupyter-core jupyter-core jupyter-server libxeus-cling0 libxeus1 libxeus6 libxwidgets1 xcpp xeus-cling-dev xeus-dev xwidgets-dev sagemath-jupyter r-cran-irdisplay r-cran-repr
	npm update npm
	npm install -g configurable-http-proxy
	pip install jupyterhub notebook jupyterlab voila 
	pip install manimlib pymysql jlab-enhanced-cell-toolbar jlab-enhanced-launcher jupyterlab_image_editor jupyter-archive jupyterlab-cell-flash jupyterlab-favorites jupyterlab-kernelspy jupyterlab-link-share jupyterlab-logout jupyterlab-open-url-parameter jupyterlab-pytutor jupyterlab-recents jupyterlab-tour jupyterlab-spreadsheet-editor stickyland jupyterlab_genv jupyterlab-code-formatter aquirdturtle_collapsible_headings jupyterlab-drawio jupyterlab-lsp jupyterlab_markup jupyterlab_execute_time jupyterlab_limit_output jupyterlab-skip-traceback jupyterlab-dash
	pip install jupyterlab-fasta
	pip install jupyterlab-geojson
	pip install jupyterlab-katex
	pip install jupyterlab-mathjax3
	pip install jupyterlab-vega2
	pip install jupyterlab-vega3 
	pip instal ipysheet ipywidgets ipympl pyflyby jupyterlab-git jupyterlab_autoversion jupyterlab-pullrequests jupyterlab_pyflyby
	jupyter labextension install jupyterlab-autoplay
	pip install jupyterlab_autorun_cells
	jupyter labextension install jupyterlab_commands
	pip install lckr-jupyterlab-variableinspector scriptedforms
	jupyter labextension install jupyterlab_celltests
	jupyter serverextension enable --py nbcelltests
	jupyter labextension disable @jupyterlab/extensionmanager-extension
	jupyter labextension disable @jupyterlab/help-extension:launch-classic
	sudo apt remove -y python3-terminado python-terminado-doc
	sudo pip uninstall -y terminado
	sudo service mysql restart
	echo "Install completed"
else
	echo "Aborted!"
fi

echo