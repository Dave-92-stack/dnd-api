API="http://localhost:4741"
URL_PATH="/books"

curl "${API}${URL_PATH}/${ID}" \
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

echo
