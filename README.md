# Mission 2 Intermediete BE Expressjs - Harisenin

## Implementation service backend on Express JS for chill

- Routes
- Controller
- Models
- Middleware
- MySQL Database
- Authentication & Authorization
- Upload single files
- send token in email when register

## Tech Stack

- expressjs
- nodeJS
- nodemon
- dotenv
- cors
- mysql2
- nodemailer
- uuid
- jsonwebtoken
- bycryptjs
- multer

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

### Notes:

- to access endpoint you must enter bearer token from jwt. you register first then login to get token and save to bearer token in postman or insomnia.

- example : /movies/bulk # use endpoint /bulk to post a lot data json

## Movies Query Params

- search

```
example
localhost:4000/movies?search=Avatar
```

- sort

```
example
localhost:4000/movies?sortBy=movie_rating&sortOrder=asc

```

- filter

```
example
localhost:4000/movies?movie_title=Batman

```

## multer upload file

POST /upload

```
example
localhost:4000/upload
query params with file and upload file from postman or insomnia
```

## Users auth register/login

To register a user, the request content must be valid JSON. Property names in JSON must be enclosed in double quotes. Example:

Headers:

- Content-Type: application/json

POST /auth/register

```
example
{
"fullname": "rizky dharma",
"email": "rizkydharma02@gmail.com",
"username": "rizkydharma02",
"password": "skdaakdsa"
}

```

POST /auth/login

```
example
{
"email": "rizkydharma02@gmail.com",
"password": "sdadasds"
}

```

GET /auth/verify-email
query params auth/verify-email?token=uuidtoken

```
example
localhost:4000/auth/verify-email?token=sdadas-dsadad-dsasa
```

- uuidtoken get from email register
