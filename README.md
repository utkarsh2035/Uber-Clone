# /user/register Endpoint Documentation

## Description
The `/user/register` endpoint registers a new user. It validates the input data, hashes the password, creates the user, and returns a JWT authentication token upon successful registration.

## HTTP Method & Endpoint
- **Method:** POST
- **Endpoint:** `/user/register`

## Request Body
The request must be sent in JSON format with the following structure:

- **fullName** (object, required)
  - **firstName:** string (required, minimum 3 characters)
  - **lastName:** string (optional, minimum 3 characters if provided)
- **email:** string (required, must be a valid email)
- **password:** string (required, minimum 6 characters)

### Example Request Payload
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Response
- **Success (201 Created):**
  - Response Body:
    ```json
    {
      "token": "<JWT Token>"
    }
    ```
- **Validation Error (400 Bad Request):**
  - Response Body:
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "fieldName",
          "location": "body"
        }
      ]
    }
    ```

## Notes
- The password is hashed using bcrypt before being stored.
- An authentication token is generated using JWT with a secret provided in the environment variable `JWT_SECRET`.
