#!/bin/bash
sudo chmod +rw /etc/jupyter/*
sudo chmod +rw *
sudo chmod +rw ~/admin-scripts/*
sudo chmod +x ~/admin-scripts/*.sh
sudo apt autoremove -y
