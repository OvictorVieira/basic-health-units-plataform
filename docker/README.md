# Basic Health Units Plataform

This project has a folder called "docker",
there is a file called `docker-compose.yml` which is
responsible for building the complete development environment for the project.

#### Install Docker and Docker-Compose

To use the environment that was designed using the `Docker` containers
you need to have `docker` and `docker-compose` installed on your machine,
thus, avoiding any conflicts and difficulties in raising the environment and the project.

- [Install Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)
- [Install Docker-Compose](https://docs.docker.com/compose/install/#install-compose)

#### Using Docker

When cloning the project, simply access the `basic-health-units-plataform` project folder and run the setup script below:

```
    $ cd basic-health-units-plataform/
    
    $ bash ./docker-setup.sh
```

And to work on a daily basis, use the command below:

```
   $ bash ./application-setup.sh
```

Then, the npm server will run.