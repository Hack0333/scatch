import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    discount: {
        type: String,
        default: "0%"
    },
    bgColor: {
        type: String,
        default: "#FFFFFF"
    },
    panelColor: {
        type: String,
        default: "#FFFFFF"
    },
    textColor: {
        type: String,
        default: "#000000" 
    },
    image: {
        type: String,
        trim: true
    }
}, {
    timestamps: true 
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
