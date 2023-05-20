#!/bin/bash
CONFIRM="n"
echo -n "Confirm generate a random password for MySQL Server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	sudo apt install -y pwgen
	echo 'Shutting down any mysql processes...'
	service mysql stop
	killall -vw mysqld
	mysqld_safe --skip-grant-tables >res 2>&1 &
	echo 'Reset MySQL services behaviour...'
	sleep 3
	DB_ROOT_PASS_LEN=`shuf -i 20-30 -n 1`
	DB_ROOT_PASS=`pwgen -scn $DB_ROOT_PASS_LEN 1`
	mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED BY '$DB_ROOT_PASS';FLUSH PRIVILEGES;"
	echo 'Cleaning up...'
	killall -v mysqld
	service mysql restart
	rm res
	echo -e "MySQL password has been modified to the default\nMySQL default root password: $DB_ROOT_PASS\nWriting to file: mysql_password.txt"
	echo $DB_ROOT_PASS > /root/admin-scripts/mysql_password.txt
else
	echo "Aborted!"
fi

echo
