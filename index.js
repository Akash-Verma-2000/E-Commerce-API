// IMPORTING EXPRESS 
import express from "express";

//IMPORTING BODY PARSER 
import bodyParser from "body-parser";

// IMPORTING MONGOOSE CONFIGURATION
import { connectToMongoose } from "./configurations/mongoose.config.js";

//IMPORTING PRODUCT ROUTER
import { productRouter } from "./features/product/product.route.js";

// CREATING AN EXPRESS SERVER INSTANCE
const server = express();

// USING BODY PARSER TO PARSE JSON REQUESTS
server.use(bodyParser.json());

// USING PRODUCT ROUTER FOR ROUTING 
server.use("/products", productRouter);

// HANDLE 404 - API NOT FOUND
server.use((req, res) => {
    res.status(404).send({ data: { message: "API Not Found" } });
});

// LISTEN ON PORT 5200
server.listen(5200, () => {
    // CONNECT TO MONGOOSE/MONGODB
    connectToMongoose();
    console.log("The server is listening on port 5200");
});