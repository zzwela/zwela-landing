#!/usr/bin/env bash
# Renew certs and reload nginx. Example crontab:
#   0 2,14 * * * cd /home/ec2-user/iki/zwela-landing && ./scripts/renew-tls.sh >>/var/log/zwela-landing-cert-renew.log 2>&1

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT"

if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  compose() { docker compose "$@"; }
elif command -v sudo >/dev/null 2>&1 && sudo docker info >/dev/null 2>&1; then
  compose() { sudo docker compose "$@"; }
else
  echo "Docker is not available." >&2
  exit 1
fi

compose --profile tls-tooling run --rm certbot renew --webroot -w /var/www/certbot
compose exec nginx nginx -s reload
