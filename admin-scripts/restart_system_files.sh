#!/bin/bash
sudo chmod +rw /etc/jupyter/*
sudo chmod +rw /etc/jupyter/rsa/*
sudo chmod +rw *
sudo chmod +rw /root/Scripts/*
sudo chmod +x /root/Scripts/*.sh
sudo apt update && sudo apt full-upgrade -y
sudo apt remove -y python3-terminado python-terminado-doc
sudo apt autoremove -y
cp /root/Scripts/cookie_backup /etc/jupyter/jupyterhub_cookie_secret --force
