#!/bin/bash
set -e
# Script for deploying a build to AWS

# Push the build using the s3_website.yml settings
bundle exec s3_website push

exit 0

# TODO - future when there is cloudflare
# Clear the Cloudflare cache
curl https://www.cloudflare.com/api_json.html \
    -d 'a=fpurge_ts' \
    -d "tkn=$cloudflare_token" \
    -d "email=$cloudflare_email" \
    -d "z=$cloudflare_zone" \
    -d 'v=1'
