#!/bin/bash

echo "Stopping n8n Docker container..."
docker stop n8n

echo "Removing n8n Docker container..."
docker rm n8n

echo "Removing n8n Docker volume..."
docker volume rm n8n_data

echo "n8n Docker instance and volume removed successfully!"