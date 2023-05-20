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
service mysql stop
killall -vw mysqld
mysqld_safe --skip-grant-tables >res 2>&1 &
echo 'Reset MySQL services behaviour...'
sleep 3
mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED BY '$DB_ROOT_PASS';FLUSH PRIVILEGES;"
echo 'Cleaning up...'
killall -v mysqld
service mysql restart
rm res
echo -e "MySQL password has been modified to the default\nMySQL default root password: $DB_ROOT_PASS\nWriting to file: mysql_password.txt"
echo $DB_ROOT_PASS > /root/admin-scripts/mysql_password.txt
