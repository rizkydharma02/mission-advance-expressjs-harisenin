# Mission 2 Intermediete BE Expressjs - Harisenin

## Implementation service backend on Express JS for chill

- Routes
- Controller
- Models
- Middleware
- MySQL Database

## Tech Stack

- expressjs
- nodeJS
- nodemon
- dotenv
- cors
- mysql2

## Http Method

- GET All
- GET by id
- PATCH by id
- PUT by id
- POST Bulk
- POST
- DELETE by Id
- DELETE All

## Endpoint Access

- /movies
- /series
- /genre
- /mylist
- /payments
- /orders
- /packets
- /users

### notes: use endpoint /bulk to post a lot data json

- example : /movies/bulk

## Users endpoints examples

To register a user, the request content must be valid JSON. Property names in JSON must be enclosed in double quotes. Example:

POST /users/register
Headers:

- Content-Type: application/json

Body (raw JSON):

```
{
	"fullname": "rizky dharma",
	"email": "rizkydharma02@gmail.com",
	"username": "rizkydharma02",
	"password": "kakaganteng"
}
```

If you use form-data in tools like Postman, you can also post key/value pairs (no JSON required).
