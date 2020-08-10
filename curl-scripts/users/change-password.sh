# sh curl-scripts/index.sh
API="http://localhost:4741"
URL_PATH="/change-password"
curl "${API}${URL_PATH}/" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "passwords": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'
echo
