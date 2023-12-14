# E-Commerce API

These APIs are developed for an E-commerce admin panel allowing CRUD operations (Create, Read, Update, Delete) on products.

I have also created the documentaion for all the APIs you can refer them to test the APIs


## Technologies

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-darkred?style=for-the-badge&logoColor=white)


### Steps to Setup

1. Clone the repository
2. Install dependencies
3. Run the server from the index.js file 
3. The server will start listening on port 5200.

## Dependencies

- **Express**: Web application framework for Node.js to create APIs.
- **cors**: Handles CORS policis.
- **Body-parser**: Middleware to parse incoming request bodies.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **swagger-ui-express**: Swagger UI Express for the API documentation

## Project Structure


- **`configurations/`**

    - **`mongoose.config.js`** Configuration file to connect to the MongoDB database.

- **`features/`**

    - **`product/`**

        - **`product.controller.js`**  Handling product-related operations using the repository.

        - **`product.repository.js`** Repository containing functions interacting with the database for product operations.

        - **`product.route.js`** Routes configurations related to product operations.

        - **`product.schema.js`** Mongoose schema defining the structure of the product model.

- **`.gitignore`** Contains the routes of the file that should be ignored while uploading to GitHub.

- **`index.js`** Main file to start the Express server.

- **`package-lock.json`** Containds the records of all the dependencies versions. 

- **`package-lock.json`** Containds the meta data of the application. 

- **`README.md`** Contains complete information of the application.

- **`swagger.json`** Documentations of the APIs.



## API Endpoints

### Products

- `POST /products/create`: Create a new product.
- `GET /products/`: Get all products.
- `DELETE /products/:id`: Delete a product by ID.
- `PUT /products/:id/update_quantity`: Update product quantity by ID.
- `GET /api-docs`: Get documentations.

## Screenshots

### Get Products API
![Get Products API](/screenshots/Get-All-Products.jpg "Get Products")

### Create Products API
![Create Products API](/screenshots/Create-product.jpg "Create Products API")

### Delete Products API
![Delete Products API](/screenshots/Delete-product.jpg "Delete Products API")

### Update Products API
![Update Products API](/screenshots/update-product.jpg "Update Products API")


## Author

 **Akash Verma**

 ## Contact me 

 [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-verma-09aug2000/)  [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/Akash_Verma2000/)  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akash.verma217112@gmail.com) 
 [![Naukari](https://img.shields.io/badge/Naukri.com-0A66C2?style=for-the-badge&logo=Naukri.com&logoColor=white)](https://www.naukri.com/mnjuser/profile)


## License

This project is licensed under the ISC License.
