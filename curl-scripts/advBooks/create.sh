curl 'http://localhost:4741/dndbooks' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "Adventure Books": {
      "title": "'"${TITLE}"'",
      "edition": "'"${EDITION}"'",
      "keyFeatures": "'"${KEYFEATURES}"'",
    }
  }'
