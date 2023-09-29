# Research Labs

```markdown
This repository is a part of this project: Research Labs

See the main repo here: https://github.com/TheFlightSims/research-labs 
```

Provide and free-to-use web-based IDE for campus, team, and enterprise, with unlimited ability.

## Getting started

### With Docker container

Research Labs on Docker Container helps administrators deploy Research Labs faster, more secure and no additional costs.

For immediate use, try pulling, running, and export `8000` to your local port

```shell
docker run -p 80:8000 theflightsims/researchlabs:latest
```

To save for later, try pulling this image only

```shell
docker pull theflightsims/researchlabs
```

### Without Docker container (Recommended)

Research labs primarily use all-server, all-infrastructure (IaaS) for widespread deployment, more secure, and easier to maintain, operate, and handle disasters.

For better understanding on how Research Labs can handle user data, code handling, and administration, see [CONTRIBUTING GUIDE](https://github.com/TheFlightSims/research-labs/blob/main/CONTRIBUTING.md).

> Note
>
> We recommned you to installing local scripts using `root` user only.
>
> DO NOT install it only non-admin users. You won't be able to install PyPI packages, MySQL database for storing user data, as well as administration modules.

#### Cloning & Installing scripts

Research Labs uses scriptings for fast deployment, removes most of unnecessary files and folders that are not related directly to the Research Labs server operation (e.g. `.wiki`, `wsl-config`, and markdown files).

Cloning from GitHub first

```shell
git clone https://github.com/TheFlightSims/research-labs.git
```

Installing and Removing local git repo

```shell
cd research-labs
chmod +x ./install_admin_scripts.sh && ./install_admin_scripts.sh
Y # Or press Y manually
cd .. && rm -rf research-labs
```

#### Installing Research Labs from scratch

Navigating to `admin-scripts` folder and installing Research Labs from here

```shell
cd ~/admin-scripts
sudo ./jupyter_setup_server.sh
Y # Or press Y manually
```

While that, please don't touch on its process. The installation will be completed quickly.

> Note: We recommend you to connect to the 50Mbps or faster Internet connection, so your installation won't be corrupted by Internet speed.

## Contributing

To contribute this project, you can see different ways in [CONTRIBUTING GUIDE](https://github.com/TheFlightSims/research-labs/blob/main/CONTRIBUTING.md).

## License

This repo uses [GNU GPL-3.0](https://github.com/TheFlightSims/research-labs/blob/main/LICENSE) for easier to distribute, modify and install on any device, with no fee, or additional law barrier.

## Feedback

To feedback this repository, go to [Issues](https://github.com/TheFlightSims/research-labs/blob/main/issues) or [join our Discord server]()
