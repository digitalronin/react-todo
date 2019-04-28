#!/bin/bash

set -euo pipefail

API='http://localhost:4567/api'

main() {
  local readonly data=$1

  curl --header "Content-Type: application/json" \
    --request PUT \
    --data ${data} \
    ${API}/reorder
}

main $1

