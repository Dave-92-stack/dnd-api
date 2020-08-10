API="http://localhost:4741"
URL_PATH="/update"
curl "${API}${URL_PATH}/" \
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
