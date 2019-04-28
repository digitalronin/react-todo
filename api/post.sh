#!/bin/bash

set -euo pipefail

API='http://localhost:4567/api'

main() {
  local readonly title=$1

  local data='{"title":"'
  data+=${title}
  data+='"}'

  echo $data

  curl --header "Content-Type: application/json" \
    --request POST \
    --data ${data} \
    ${API}
}

main $1

