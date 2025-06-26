#!/bin/bash

echo "Stopping n8n Docker container..."
docker stop n8n

echo "Removing n8n Docker container..."
docker rm n8n

if [ "$1" = "volume" ]; then
    echo "Removing n8n Docker volume..."
    docker volume rm n8n_data
    echo "n8n Docker instance and volume removed successfully!"
else
    echo "n8n Docker instance stopped and removed successfully!"
    echo "Volume preserved. Use './stop-n8n.sh volume' to also remove the volume."
fi