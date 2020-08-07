# sh curl-scripts/index.sh

curl "http://localhost:4741/users/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "hashedPassword": "'"${PW}"'"
    }
  }'
