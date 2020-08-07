# sh curl-scripts/index.sh

curl 'http://localhost:4741/users' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "hashedPassword": "'"${PW}"'"
    }
  }'
