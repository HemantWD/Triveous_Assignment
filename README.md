<div id="headers" align="center">
<h2> Triveous_Assignment</h2>
</div>


## Project Description
<b> Project Name : Ecommerce API with Nodejs </b>
<p>It is an backend project which shows different Ecommerce operations, such as product and category listing, product details, cart management, and order processing. Also include the user authentication with JWT.</p>

## Languages and Tools Used:
  - NodeJs
  - MongoDB
  - ExpressJS
  - jsonwebtoken
  - bcrypt
  - nodemon

# API Documentation

- This Documentation deals with the specification of endpoints used for this project.
  
  ## GET
  The GET method is a HTTP method that is applied while requesting information from a particular source.

  **Get api to reterive the list of categories.**
  
  **Request Method**: `GET`

  **URL Reuired** : `http://localhost:8080/api/product/category`

  **Schema**
  ````json
  {
  "name":""
  }
  ````

  ### Success Response

  **Code** : `200 OK`
  **Content Example**
  ````json
  [
    {
      "_id":"654d8b9e39e58f8f856c5c84",
      "name":"Electronics",
      "__v":0
    }
  ]
  ````
  **Error Response**
  **Code**:`
  
  


















