#!/bin/bash
echo -n "Enter your new MySQL password: "
read PASSWORD_INPUT
if [ -z "$var" ]; then
	DB_ROOT_PASS=$PASSWORD_INPUT
else
	echo -e "No password provided.\nBecause of the security problems, the script will change password to the default"
	DB_ROOT_PASS='administrator'
fi
echo 'Shutting down any mysql processes...'
sudo service mysql stop
sudo killall -vw mysqld
sudo mysqld_safe --skip-grant-tables >res 2>&1 &
echo 'Reset MySQL services behaviour...'
sleep 3
sudo mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED BY '$DB_ROOT_PASS';FLUSH PRIVILEGES;"
echo 'Cleaning up...'
sudo killall -v mysqld
sudo service mysql restart
sudo rm res
echo -e "MySQL password has been modified to the default\nMySQL default root password: $DB_ROOT_PASS\nWriting to file: mysql_password.txt"
sudo echo $DB_ROOT_PASS > /etc/jupyter/mysql_password.txt
