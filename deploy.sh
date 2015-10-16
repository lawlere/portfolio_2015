#!/bin/bash
set -e
# Script for deploying a build to AWS

# Push the build using the s3_website.yml settings
bundle exec s3_website push

# Clear the Cloudflare cache
curl --fail https://www.cloudflare.com/api_json.html \
    -d 'a=fpurge_ts' \
    -d "tkn=$CLOUDFLARE_API_KEY" \
    -d "email=$CLOUDFLARE_EMAIL" \
    -d "z=emmalawler.com" \
    -d 'v=1'
