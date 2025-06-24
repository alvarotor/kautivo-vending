#!/bin/bash

# n8n Docker Restore Script
# This script sets up a fresh n8n Docker instance and restores workflows and credentials

set -e

echo "🚀 Starting n8n Docker restore process..."

# Configuration
N8N_PORT="${N8N_PORT:-5678}"
N8N_DATA_DIR="${N8N_DATA_DIR:-./n8n_data}"
DOCKER_CONTAINER_NAME="${N8N_CONTAINER_NAME:-n8n}"
N8N_ENCRYPTION_KEY="IhpRzMbDNNMQ9fCsxBve1nuJvSWmtAo1"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker first."
    exit 1
fi

# Stop and remove existing n8n container if it exists
if docker ps -a --format 'table {{.Names}}' | grep -q "^${DOCKER_CONTAINER_NAME}$"; then
    print_warning "Stopping and removing existing n8n container..."
    docker stop ${DOCKER_CONTAINER_NAME} || true
    docker rm ${DOCKER_CONTAINER_NAME} || true
fi

# Create data directory
mkdir -p ${N8N_DATA_DIR}
print_status "Created data directory: ${N8N_DATA_DIR}"

# Start n8n Docker container
print_status "Starting n8n Docker container..."
docker run -d \
    --name ${DOCKER_CONTAINER_NAME} \
    -p ${N8N_PORT}:5678 \
    -v ${N8N_DATA_DIR}:/home/node/.n8n \
    -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false \
    -e N8N_RUNNERS_ENABLED=false \
    -e N8N_ENCRYPTION_KEY="$N8N_ENCRYPTION_KEY" \
    docker.n8n.io/n8nio/n8n

# Wait for n8n to start
print_status "Waiting for n8n to start..."
sleep 10

# Check if n8n is running
if ! curl -s http://localhost:${N8N_PORT}/healthz > /dev/null 2>&1; then
    print_warning "n8n might not be fully ready yet. Waiting a bit more..."
    sleep 15
fi

# Import workflows if they exist
if [ -d "../n8n/repo/workflows" ] && [ "$(ls -A ../n8n/repo/workflows)" ]; then
    print_status "Importing workflows..."
    # Copy workflows to container
    docker cp ../n8n/repo/workflows/. ${DOCKER_CONTAINER_NAME}:/home/node/.n8n/import_temp/
    for workflow_file in ../n8n/repo/workflows/*.json; do
        if [ -f "$workflow_file" ]; then
            filename=$(basename "$workflow_file")
            echo "  - Importing $filename"
            docker exec ${DOCKER_CONTAINER_NAME} npx n8n import:workflow --input="/home/node/.n8n/import_temp/$filename" || true
        fi
    done
else
    print_warning "No workflows found in ../n8n/repo/workflows/"
fi

# Import credentials if they exist
if [ -d "../n8n/repo/credentials" ] && [ "$(ls -A ../n8n/repo/credentials)" ]; then
    print_status "Importing credentials..."
    
    # Create a combined credentials file (n8n expects an array)
    echo "[" > /tmp/combined_credentials.json
    first_file=true
    for cred_file in ../n8n/repo/credentials/*.json; do
        if [ -f "$cred_file" ]; then
            if [ "$first_file" = false ]; then
                echo "," >> /tmp/combined_credentials.json
            fi
            cat "$cred_file" >> /tmp/combined_credentials.json
            first_file=false
        fi
    done
    echo "]" >> /tmp/combined_credentials.json
    
    # Copy combined credentials to container and import
    docker cp /tmp/combined_credentials.json ${DOCKER_CONTAINER_NAME}:/home/node/.n8n/combined_credentials.json
    echo "  - Importing all credentials as a batch"
    docker exec ${DOCKER_CONTAINER_NAME} npx n8n import:credentials --input="/home/node/.n8n/combined_credentials.json" || true
    
    # Clean up
    rm -f /tmp/combined_credentials.json
    docker exec ${DOCKER_CONTAINER_NAME} rm -f /home/node/.n8n/combined_credentials.json || true
else
    print_warning "No credentials found in ../n8n/repo/credentials/"
fi

# Clean up temporary files
docker exec ${DOCKER_CONTAINER_NAME} rm -rf /home/node/.n8n/import_temp* || true

print_status "n8n restore completed!"
echo ""
echo "🎉 Your n8n instance is running at: http://localhost:${N8N_PORT}"
echo ""
echo "Next steps:"
echo "1. Open http://localhost:${N8N_PORT} in your browser"
echo "2. Set up your admin user if this is a fresh install"
echo "3. Check that your workflows and credentials have been imported"
echo ""
echo "To stop n8n: docker stop ${DOCKER_CONTAINER_NAME}"
echo "To restart n8n: docker start ${DOCKER_CONTAINER_NAME}"
echo "To view logs: docker logs ${DOCKER_CONTAINER_NAME}"