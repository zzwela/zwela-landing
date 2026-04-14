#!/usr/bin/env bash
# Issue Let's Encrypt cert (webroot) and switch nginx/active.conf to TLS.
# Domain: first line of `.tls-domain` in this project, or env TLS_DOMAIN.
#   LETSENCRYPT_EMAIL=you@company.com ./scripts/init-letsencrypt.sh

set -euo pipefail

readonly DEFAULT_ACME_EMAIL='hello@ikiwellness.com'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT"

if [[ -f .tls-domain ]]; then
  DOMAIN="$(tr -d '\r\n' < .tls-domain)"
else
  DOMAIN="${TLS_DOMAIN:-}"
fi

if [[ -z "$DOMAIN" ]]; then
  echo "ERROR: Set TLS_DOMAIN or create .tls-domain with the hostname (e.g. zwela-landing.ikiwellness.com)." >&2
  exit 1
fi

EMAIL="${LETSENCRYPT_EMAIL:-$DEFAULT_ACME_EMAIL}"

if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  compose() { docker compose "$@"; }
elif command -v sudo >/dev/null 2>&1 && sudo docker info >/dev/null 2>&1; then
  compose() { sudo docker compose "$@"; }
else
  echo "Docker is not available (try sudo or add user to the docker group)." >&2
  exit 1
fi

echo "==> Requesting certificate for $DOMAIN (webroot via nginx)"
compose --profile tls-tooling run --rm certbot certonly \
  --non-interactive \
  --webroot \
  --webroot-path=/var/www/certbot \
  -d "$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email

sed -e "s/__TLS_DOMAIN__/${DOMAIN}/g" "$ROOT/nginx/https.conf.template" >"$ROOT/nginx/active.conf"

echo "==> Switching nginx to TLS and reloading"
compose up -d --force-recreate nginx

echo "==> Done. https://$DOMAIN/"
echo "    Cron: ./scripts/renew-tls.sh (see header)."
