# Building a Rest API with Node.js Express Framework 
# Introduction 
- Building a RESTful API.
- Performing CRUD operations.
- Writing API endpoints.

# Steps
Use Node.js and Express to build an API that performs CRUD operations on users.
1. Run in terminal "npm init" to initialize Node package manager(NPM). It creates a default json file called package.json
2. Create a new file index.js and write in the terminal "npm install --save express" to install Express 
3. Listen the code on local host 3000 
4. Create Users.js package, add in array 4 objects with 3 pices of main data (id, name and email) and export it as users 
5. Create a new folder called "routers" with a new subfolder called "api" where we can store our API and there add a new file called "users.js"
6. In terminal install uuid with a command "npm install --save uuid"
7. Write endpoints 

| Method | URL | Description |
| --- | --- | --- |
| GET | /api/users |Returns an array of users.|
| GET | /api/users/:id |Returns the user object with the specified id.|
| POST | /api/users |Creates a user using the information sent inside the request body.|
| PUL | /api/users/:id |Updates the user with the specified id using data from the request body. Returns the modified user|
| DELETE | /api/users/:id |Removes the user with the specified id and returns the deleted user.|
#### Database Access Functions

You can find them inside `routers/api/users.js`. All of these functions return Promises.

- `router.get('/')` Resolves to the list of users (or empty array).
- `router.get('/:id')` Takes an `id` and resolves to the user with that id (or status 404 bad request, if the id does not exist).
- `router.post` Takes a new user `{ name, email }` and resolves to the the newly created user `{ id, name, email }`.
- `router.put` Takes an `id` and an existing user `{ name, email }` and resolves the updated user `{ id, name, email}` and a message "User updated".
- `router.delete` Takes an `id`  and resolves to the deleted user `{ id, name, email }` and a message "User deleted" (or status 404 bad request, if the id does not exist).
#### Endpoint Specifications
When the client makes a `POST` request to `/api/users`:

- If the request body is missing the `name` or `email` property:

  - respond with HTTP status code `400` (Bad Request).
 
When the client makes a `GET` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  
When the client makes a `DELETE` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
When the client makes a `PUT` request to `/api/users/:id`:
- If the user is found and the new information is valid:

  - update the user document in the database using the new information sent in the `request body`.
  - return the following JSON response: `{ msg: 'User updated' }`.

#### Test your work manually using Postman or HTTPie.
