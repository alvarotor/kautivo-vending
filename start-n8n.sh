#!/bin/bash

# Use fixed encryption key to prevent credential decryption issues
N8N_ENCRYPTION_KEY="IhpRzMbDNNMQ9fCsxBve1nuJvSWmtAo1"

echo "Creating n8n Docker volume..."
docker volume create n8n_data

echo "Starting n8n Docker container with fixed encryption key..."
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_ENCRYPTION_KEY="$N8N_ENCRYPTION_KEY" \
  docker.n8n.io/n8nio/n8n

echo "n8n is now running at http://localhost:5678"