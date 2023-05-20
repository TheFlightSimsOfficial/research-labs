#!/bin/bash
CONFIRM="n"
echo -n "Please confirm MySQL password reset. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	sudo apt install -y pwgen netcat
	echo 'Shutting down any mysql processes...'
	service mysql stop
	killall -vw mysqld
	mysqld_safe --skip-grant-tables >res 2>&1 &
	echo 'Resetting password... hold on'
	sleep 5
	mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED BY 'administrator';FLUSH PRIVILEGES;"
	echo 'Cleaning up...'
	rm res
	killall -v mysqld
	service mysql restart
	echo -e "MySQL password has been reset to the default\nMySQL default root password: administrator"
	echo 'administrator' > /root/admin-scripts/mysql_password.txt
else
	echo "Aborted!"
fi

echo
