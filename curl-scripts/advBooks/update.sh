curl "http://localhost:4741/dndbooks/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "Adventure Books": {
      "title": "'"${TITLE}"'",
      "edition": "'"${EDITION}"'",
      "keyFeatures": "'"${KEYFEATURES}"'"
    }
  }'
