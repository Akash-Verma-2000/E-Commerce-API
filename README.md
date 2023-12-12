# E-Commerce API

These APIs are developed for an E-commerce admin panel allowing CRUD operations (Create, Read, Update, Delete) on products.

I have also created the documentaion for all the APIs you can refer them to test the APIs

### Steps to Setup

1. Clone the repository
2. Install dependencies
3. Run the server from the index.js file 
3. The server will start listening on port 5200.

## Dependencies

- **Express**: Web application framework for Node.js to create APIs.
- **Body-parser**: Middleware to parse incoming request bodies.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **swagger-ui-express**: Swagger UI Express for the API documentation

## Project Structure

- **index.js**: Main file to start the Express server.

- **configurations/mongoose.config.js**: Configuration file to connect to the MongoDB database.

- **features/product/product.route.js**: Routes related to product operations.
- **features/product/product.controller.js**: Controller handling product-related operations using the repository.
- **features/product/product.repository.js**: Repository containing functions interacting with the database for product operations.
- **features/product/product.schema.js**: Mongoose schema defining the structure of the product model.

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

- **Akash Verma**
### Contact ME
- [LinkedIn](https://www.linkedin.com/in/akash-verma-09aug2000/)
- [Email Address](mailto:akash.verma217112@gmail.com)
- [Leetcode](https://leetcode.com/Akash_Verma2000/)
  

## License

This project is licensed under the ISC License.
