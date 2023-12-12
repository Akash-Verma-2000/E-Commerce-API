//IMPORTING MONGOOSE
import mongoose from "mongoose";
//IMPORTING PRODUCT SCHEMA
import { productSchema } from "./product.schema.js";
//CREATING MODEL TO INTRACT WITH THE DATA BASE
const ProductModel = mongoose.model('Product', productSchema);

//THIS CLASS IS CONTAING ALL THE DATA BASE RELATED FUNCTIONS 
export default class ProductRepository {

    //THIS FUNCTION CREATES A NEW PRODUCT IN TE DATA BASE
    async createProduct(productObj) {
        try {
            //CHECKING IF THE PRODUCT IS ALREADY PRESENT IN THE DATA BASE
            const exists = await ProductModel.exists({ name: productObj.name });
            //IF PRODUCT IS ALREADY PRESENT 
            if (exists) {
                return "Product Already Exists";
            } else {
                //IF THE PRODUCT IS NOT PRESENT THEN ADD THE PRODUCT TO THE DATA BASE
                const newProduct = new ProductModel(productObj);
                return await newProduct.save();
            }
        } catch (err) {
            //HANDLIING UNEXPECTED ERRORS DURING THE EXECUTION OF TRY BLOCK
            throw err;
        }
    }

    //THIS FUNCTION RETURN ALL THE PRODUCTS AVAILABLE IN THE DATA BASE
    async getAllProducts() {
        try {
            //RETURNIG ALL THE PRODUCT IS PRESENT 
            return await ProductModel.find().select('-__v');
        } catch (err) {
            //HANDLIING UNEXPECTED ERRORS DURING THE EXECUTION OF TRY BLOCK
            throw err;
        }
    }

    //THIS FUNCTION DELETES THE PRODUCT FROM THE DATA BASE WITH THE SPECIFIC ID
    async deleteProductById(productId) {
        try {
            //DELETING THE PRODUCT WITH THE SPECIFIC ID IF THE PRODUCT IS PRESENT
            return await ProductModel.findByIdAndDelete(productId);
        } catch (err) {
            //HANDLIING UNEXPECTED ERRORS DURING THE EXECUTION OF TRY BLOCK
            throw err;
        }
    }

    //THIS FUNCTION UPDATES THE PRODUCT WITH THE SPECIFIC USER ID
    async updateProductById(productId, number) {
        try {
            //GETTING THE PRODUCT WITH THE SPECIFIC USER ID
            const product = await ProductModel.findById(productId);
            //IF PRODUCT NOT FOUND
            if (!product) {
                return "Product Not Found";
            } else {
                //UPDATING THE QUANTITY OF THE PRODUCT
                const updatedProduct = { quantity: product.quantity + Number(number) }
                //CHECKING IF THE QUANTITY IS LESS THAN 0
                if (updatedProduct.quantity < 0) {
                    updatedProduct.quantity = 0;
                }
                //RETURNING THE UPDATED PRODUCT TO THE CLIENT AND SAVING IT ON THE DATA BASE
                return await ProductModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
            }
        } catch (err) {
            //HANDLIING UNEXPECTED ERRORS DURING THE EXECUTION OF TRY BLOCK
            throw err;
        }
    }
}