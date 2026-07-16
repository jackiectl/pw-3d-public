#!/usr/bin/env bash
# Serve the static site locally.
# Usage: ./serve.sh [port]   (default 8123)
set -euo pipefail
PORT="${1:-8123}"
DIR="$(cd "$(dirname "$0")/site" && pwd)"
echo "Serving $DIR at http://127.0.0.1:$PORT"
echo "  2D home : http://127.0.0.1:$PORT/en/"
echo "  3D room : http://127.0.0.1:$PORT/3d/?lang=en#about"
cd "$DIR"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
