import pkg from "mongoose";

const { Schema, model } = pkg;

const ProductSchema = new Schema(
    {
        productId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: false,
            default: "",
        },
        image: {
            type: String,
            required: false,
            default: "",
        },
    },
    {
        timestamps: true,
    },
);

const ProductModel = model("Product", ProductSchema);

export { ProductModel };
