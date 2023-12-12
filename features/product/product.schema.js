// IMPORTING MONGOOSE
import mongoose from "mongoose";

// CREATING A SCHEMA FOR PRODUCT
export const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }

});