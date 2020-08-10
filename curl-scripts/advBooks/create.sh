API="http://localhost:4741"
URL_PATH="/create"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "Adventure Books": {
      "title": "'"${TITLE}"'",
      "edition": "'"${EDITION}"'",
      "keyFeatures": "'"${KEYFEATURES}"'"
    }
  }'
