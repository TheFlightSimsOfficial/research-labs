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
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab/bin /usr
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab/etc /usr
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab/local /usr
	sudo cp -r ~/admin-scripts/jupyter-external-packages/ibm-q-lab/share /usr
	sudo pip install openqasm3 docplex  h5py  fastdtw scikit-learn fastdtw nasdaq-data-link yfinance lmfit uncertainties terminado 'dill==0.3.5' 'jupyter-server>=2.0.1' 'jupyterlab==3.6.1' 'urllib3==1.26.16' 'PyJWT>=2.4.0' 'voila==0.5.0a4'
	sudo pip uninstall -y jupyterlab-genv
	echo -e "Vailidating pip installations..."
    sudo pip check
else
	echo "Aborted!"
fi

echo