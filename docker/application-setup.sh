#!/bin/bash
npm install

docker-compose up -d

docker exec -it basic-health-units-plataform bash