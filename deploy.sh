#!/bin/bash
set -e
# Script for deploying a build to AWS

# Push the build using the s3_website.yml settings
bundle exec s3_website push

# TODO - future when there is cloudflare
# Clear the Cloudflare cache
curl https://www.cloudflare.com/api_json.html \
    -d 'a=fpurge_ts' \
    -d "tkn=$CLOUDFLARE_API_KEY" \
    -d "email=$CLOUDFLARE_EMAIL" \
    -d "z=$cloudflare_zone" \
    -d 'v=1'
