// IMPORTING PRODUCT REPOSITORY
import ProductRepository from "./product.repository.js";
// CREATING INSTANCE OF PRODUCT REPOSITORY
const productRepository = new ProductRepository();

//THIS CLASS IS CONTAING ALL THE ROUTES RELATED FUNCTIONS
export default class ProductController {

    //THIS FUNCTION TO CREATES A NEW PRODUCT
    async createProduct(req, res) {
        try {
            //CALLING PRODUCT REPOSITORY FUNCTION
            const newPoduct = await productRepository.createProduct(req.body);
            //CHECKING IF THE PRODUCT IS ALREADY PRESENT
            if (newPoduct == "Product Already Exists") {
                return res.status(409).send({ data: { message: "Product Already Exists" } });
            } else {
                //RETURNING THE NEW PRODUCT BACK TO THE CLIENT
                const obj = {
                    data: {
                        product:
                        {
                            name: newPoduct.name,
                            quantity: newPoduct.quantity
                        }
                    }
                }
                return res.status(201).send(obj);
            }
        } catch (err) {
            //HANDLING ERRORS IF FAILS TO CREATE PRODUCT
            return res.status(500).send({ data: { message: "Failed To Create Product" } });
        }
    }

    //THIS FUNCTION RETURNS ALL THE PRODUCTS AVAILABLE ON HE SERVER
    async getAllProducts(req, res) {
        try {
            //CALLING THE PRODUCT REPOSITORY FUNCTION TO FETCH ALL THE PRODUCTS
            const products = await productRepository.getAllProducts();
            //SENDING THE ALL PRODUCTS TO THE CLIENT
            return res.status(200).send({ data: { products } });
        } catch (err) {
            //HANDLING ERRORS IF FAILS TO FETCH PRODUCTS
            return res.status(500).send({ data: { message: "Failed To Fetch Products" } });
        }
    }

    //THIS FUNCTION TAKES THE PRODUCT ID AS THE URL PARAMETER AND DELETED THE PRODUCT
    async deleteProductById(req, res) {
        try {
            //GETTING THE PRODUCT ID FROM THE URL PARAMETERS
            const productId = req.params.id;
            //CALLING THE PRODUCT REPOSITORY FUNCTION DELETE THE PRODUCT
            const deletedProduct = await productRepository.deleteProductById(productId);
            //IF PRODUCT NOT FOUND FOR THE GIVEN ID
            if (!deletedProduct) {
                return res.status(404).send({ data: { message: "Product Not Found" } });
            } else {
                //RETURNING THIS MESSAGE BACK TO THE CLIENT
                return res.status(200).send({ data: { message: "product deleted" } });
            }
        } catch (err) {
            //HANDLING ERRORS IF FAILS TO DELETE PRODUCT
            return res.status(500).send({ data: { message: "Failed To Delete Product" } });
        }
    }

    //THIS FUNCTION TAKES THE PRODUCT ID AS URL PARAMETER AND QUANTITY AS QUERY PARAMTERS TO UPDATE ANY PRODUCT'S QUANTITY
    async updateProductById(req, res) {
        try {
            //GETTING THE PRODUCT ID FROM THE URL PARAMETERS
            const productId = req.params.id;
            //GETTING THE QUANTITY FROM THE QUERY PARAMETERS 
            const number = req.query.number;
            //CALLING THE PRODUCT REPOSITORY FUNCTION TO UPDATE THE QUANTITY OF THE PRODUCT
            const updatedProduct = await productRepository.updateProductById(productId, number);
            //IF PRODUCT NOT FOUND
            if (updatedProduct == "Product Not Found") {
                return res.status(404).send({ data: { message: "Product Not Found" } });
            } else {
                //RETURNING THE UPDATED PRODUCT AND THE MESSAGE TO THE CLIENT
                const obj = {
                    data:
                    {
                        product:
                        {
                            id: updatedProduct._id,
                            name: updatedProduct.name,
                            quantity: updatedProduct.quantity
                        },
                        message: "updated successfully"
                    }
                }
                return res.status(201).send(obj)
            }
        } catch (err) {
            //HANDLING ERRORS IF FAILS TO UPDATE PRODUCT
            return res.status(500).send({ data: { message: "Failed To Update Product" } });
        }
    }
}


