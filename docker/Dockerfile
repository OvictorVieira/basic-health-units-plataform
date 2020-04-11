FROM node:lts-slim

RUN addgroup -gid 1001 docker && adduser docker -gid 1001 --uid 1001 --disabled-password --gecos ""
RUN sh -c "echo 'docker ALL=NOPASSWD: ALL' >> /etc/sudoers"

RUN mkdir -p /var/www/html/basic-health-units-plataform
RUN chown -Rf docker:docker /var/www/html/basic-health-units-plataform
RUN apt-get update
RUN apt-get install vim -y
USER docker

RUN echo 'export PS1="\[\\033[38m\]\u\[\\033[32m\] \w\[\\033[31m\]\`git branch 2>/dev/null | grep \"^\*\" | sed -r \"s/\*\ (.*)/ \(\\1\)/\"\`\[\\033[37m\]$\[\\033[00m\] "' >> /home/docker/.bashrc

WORKDIR /var/www/html/basic-health-units-plataform

EXPOSE 4000