// IMPORTING EXPRESS 
import express from "express";

//IMPORTING BODY PARSER 
import bodyParser from "body-parser";

//IMPORTING CORS
import cors from "cors";

//IMPORTING SWAGGER UI EXPRESS
import swagger from 'swagger-ui-express';

import apiDocs from "./swagger.json" assert {type: 'json'};

// IMPORTING MONGOOSE CONFIGURATION
import { connectToMongoose } from "./configurations/mongoose.config.js";

//IMPORTING PRODUCT ROUTER
import { productRouter } from "./features/product/product.route.js";

// CREATING AN EXPRESS SERVER INSTANCE
const server = express();

//CORS POLICY COFIGURATIONS
server.use(cors());

// USING BODY PARSER TO PARSE JSON REQUESTS
server.use(bodyParser.json());

//FOR API DOCUMENTATIONS 
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

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