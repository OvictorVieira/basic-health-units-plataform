#!/bin/bash
docker-compose -f docker/docker-compose.yml build --no-cache

bash ./application-setup.sh
