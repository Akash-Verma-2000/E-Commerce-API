// IMPORTING EXPRESS 
import express from "express";

// IMPORTING PRODUCT CONTROLLER
import ProductController from "./product.controller.js";

// CREATING INSTANCE OF PRODUCT CONTROLLER
const productController = new ProductController();

// CREATING A ROUTER FROM EXPRESS
export const productRouter = express.Router();

//REQUEST TO CREATE A PRODUCT
productRouter.post("/create", productController.createProduct);
//REQUEST TO RETRIEVE ALL PRODUCTS
productRouter.get("/", productController.getAllProducts);
//REQUEST TO DELETE A PRODUCT BY ID
productRouter.delete("/:id", productController.deleteProductById);
//REQUEST TO UPDATE PRODUCT QUANTITY BY ID
productRouter.put("/:id/update_quantity", productController.updateProductById);
