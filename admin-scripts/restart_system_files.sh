#!/bin/bash
sudo chmod +rw /etc/jupyter/*
sudo chmod +rw *
sudo chmod +rw /root/admin-scripts/*
sudo chmod +x /root/admin-scripts/*.sh
sudo apt autoremove -y
