#!/bin/bash

set -euo pipefail

API='http://localhost:4567/api'

main() {
  curl --header "Content-Type: application/json" \
    ${API}
  echo
}

main ARGV.shift

