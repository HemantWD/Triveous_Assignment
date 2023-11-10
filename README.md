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

  **<h2>Get api to reterive the list of categories.</h2>**
  
  **Request Method**: `GET`

  **URL Reuired** : `http://localhost:8080/api/category/list`

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
  
  **Code**:`500`

  **Content Example**

  ````json
  {
    "error" : "Not able to fetch the categories"
  }
  ````

  **<h2>GET api to reterive a list of products based on categoryID</h2>**
  
   **Request Method**: `GET`

  **URL Reuired** : `http://localhost:8080/api/product/category/:categoryId`

  **Schema**
  ````json
  [
    "title": {
      "type": "String",
      "required": "true",
    },
    "price": {
      "type": "String",
      "required": "true",
    },
    "description": {
      "type": "String",
      "required": "true",
    },
    "availability": {
      "type": "Boolean",
      "default": "true",
    },
    "category": {
      "type": "mongoose.Schema.Types.ObjectId",
      "ref": "category",
    },
  ]
  ````

  ### Success Response

  **Code** : `200 OK`
  
  **Content Example**
  
  ````json
  [
    {
        "_id": "654d8ba139e58f8f856c5c8a",
        "title": "Smartphone",
        "price": "15000",
        "description": "Flag-ship Phone",
        "availability": true,
        "category": "654d8b9e39e58f8f856c5c84",
        "__v": 0
    }
  ]
  ````
  **Error Response**
  
  **Code**:`500`

  **Content Example**

  ````json
  {
    "error" : "Unable to reterive Products"
  }
  ````
 **<h2>GET api to reterive a list of products based on Product ID</h2>**
  
   **Request Method**: `GET`

  **URL Reuired** : `http://localhost:8080/api/product/"productId`

  **Schema**
  ````json
  [
    "title": {
      "type": "String",
      "required": "true",
    },
    "price": {
      "type": "String",
      "required": "true",
    },
    "description": {
      "type": "String",
      "required": "true",
    },
    "availability": {
      "type": "Boolean",
      "default": "true",
    },
    "category": {
      "type": "mongoose.Schema.Types.ObjectId",
      "ref": "category",
    },
  ]
  ````

  ### Success Response

  **Code** : `200 OK`
  
  **Content Example**
  
  ````json
  [
    {
        "_id": "654d8ba139e58f8f856c5c8a",
        "title": "Smartphone",
        "price": "15000",
        "description": "Flag-ship Phone",
        "availability": true,
        "category": "654d8b9e39e58f8f856c5c84",
        "__v": 0
    }
  ]
  ````
  **Error Response**
  
  **Code**:`500`

  **Content Example**

  ````json
  {
    "error" : "Product with Id not found"
  }
  ````
 **<h2>GET api to allow users to view their cart</h2>**
  
   **Request Method**: `GET`

   **Authentication required** : `Yes`

  **URL Reuired** : `http://localhost:8080/api/cart/:userId`

  **Schema**
  ````json
  [
    {
     "product": {
      "type": "mongoose.Types.ObjectId",
      "ref": "products",
  },
    "quantity": {
      "type": "Number",
      "required": "true",
  },
    }
    {
      "user": {
        "type": "mongoose.Types.ObjectId",
        "ref": "users",
    },
      "items": "[cartItem]",
    }
  ]
  ````

  ### Success Response

  **Code** : `200 OK`
  
  **Content Example**
  
  ````json
  [
    {
       "items" : []
    }
  ]
  ````
  **Error Response**
  
  **Code**:`500`

  **Content Example**

  ````json
  {
    "error" : "Unable to view the cart"
  }
  ````


  


















