import os, math, sys, pwd, subprocess, pymysql

##################################################################################################
# These functions are used to provide advanced settings for JupyterHub
###############################

### Read MySQL password
def mysql_get_password():
    if os.access("/etc/jupyter/mysql_password.txt", os.R_OK) == True:
        file_path = open("/etc/jupyter/mysql_password.txt", "r").read()
        if file_path.find('\n') != -1:
            return file_path[:-1]
        else:
            return file_path
    else:
        return 'administrator'
###

### MySQL password - login as root
def mysql_connect_string():
    sql_connect_string = 'mysql+pymysql'
    username = 'root'
    pwd = mysql_get_password()
    sql_server = 'localhost'
    dbname = 'jupyterdb'
    return sql_connect_string + '://' + username + ':' + pwd + '@' + sql_server + '/' + dbname
###

### Allow users in database, root is not allowed
def allowed_users():
    admin_users = set()
    for f in open('/etc/jupyter/allow_users.txt', 'r'):
        if f.find('#') != -1 or f == 'root':
            continue
        if f.find('\n') != -1:
            f = f[:-1]
        admin_users.add(f)
    return admin_users
###

### Add administrators, root is not allowed
def admin_user():
    admin_users = set()
    for f in open('/etc/jupyter/admins.txt', 'r'):
        if f.find('#') != -1 or f == 'root':
            continue
        if f.find('\n') != -1:
            f = f[:-1]
        admin_users.add(f)
    return admin_users
###

### Spawn mode
def pre_spawn_hook(spawner):
    username = spawner.user.name
    try:
        pwd.getpwnam(username)
    except KeyError:
        subprocess.check_call(['useradd', '-ms', '/bin/bash', username])
        subprocess.check_call(['cp', '-TRv', '/etc/jupyter/tutorials-notebooks', '/home/' + username])
        subprocess.check_call(['chmod', '777', '/home/' + username + '/qiskit-tutorials'])
        subprocess.check_call(['chmod', '777', '/home/' + username + '/xeus-cpp-tutorials'])
        subprocess.check_call(['chmod', '777', '/home' + username + '/matlab-tutorials'])
        subprocess.check_call(['chmod', '777', '/home' + username + '/r-tutorials'])
###

###############################
##################################################################################################
c = get_config()

c.Authenticator.admin_users = admin_user()
c.Authenticator.allowed_users = allowed_users()
c.Authenticator.enable_auth_state = False
c.Authenticator.auto_login_oauth2_authorize = False
c.Authenticator.manage_groups = True

c.Application.log_level = 'DEBUG'

c.ConfigurableHTTPProxy.auth_token = '/etc/jupyter/proxy_auth_token'

c.PAMAuthenticator.admin_groups = {'administrators'}

c.JupyterHub.authenticator_class = 'nativeauthenticator.NativeAuthenticator'
c.JupyterHub.api_page_default_limit = 5
c.JupyterHub.cookie_secret_file = '/etc/jupyter/jupyterhub_cookie_secret'
c.JupyterHub.db_url = mysql_connect_string()
c.JupyterHub.debug_db = True
c.JupyterHub.reset_db = False
c.JupyterHub.init_spawners_timeout = 30
c.JupyterHub.terminals_enabled = False

c.NotebookApp.terminals_enabled = False

c.Spawner.cpu_limit = 1
c.Spawner.mem_limit = '512M'
c.Spawner.pre_spawn_hook = pre_spawn_hook
c.Spawner.default_url = '/lab'