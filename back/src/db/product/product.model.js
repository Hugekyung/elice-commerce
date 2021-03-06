import { ProductModel } from "./product.schema";
import { powerSet } from "../../middlewares/search";
import is from "@sindresorhus/is";

class Product {
    static async create({ newProduct }) {
        const createdNewProduct = await ProductModel.create(newProduct);
        return createdNewProduct;
    }

    static async findByProductId({ productId }) {
        const product = await ProductModel.findOne({ productId });
        return product;
    }

    static async findByQuery({ cid, pid, keyword }) {
        const query = {};
        if (cid) query.category = cid;
        if (pid) query.productId = pid;

        const product = await ProductModel.find(query);
        return product;
    }
    static async findBySearch({ keyword }) {
        const product = await ProductModel.find({ $text: { $search: keyword } });
        if (is.emptyArray(product)) {
            const arr = powerSet(keyword);
            arr.shift();
            const newKeyword = arr.join(" ");
            const product = await ProductModel.find({ $text: { $search: newKeyword } });
            return product;
        }
        return product;
    }

    static async findAll() {
        const products = await ProductModel.find({});
        return products;
    }

    static async update({ productId, fieldToUpdate, newValue }) {
        const filteredById = { productId };
        const updateData = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updateProduct = await ProductModel.findOneAndUpdate(
            filteredById,
            updateData,
            option,
        );

        return updateProduct;
    }

    static async deleteByProductId({ productId }) {
        const deleteProduct = await ProductModel.deleteOne({ productId });
        return deleteProduct;
    }

    static async findByLikeProductId({ proudctlikeId }) {
        const product = await ProductModel.findOne({ productId: proudctlikeId });
        return product;
    }

    static async findByLikeDelProductId({ productDelId }) {
        const product = await ProductModel.findOne({ productId: productDelId });
        return product;
    }

    static async findProductsByAgeGender({ userAgeIndex, gender }) {
        const products = await ProductModel.find({
            $and: [{ bestPreferAge: userAgeIndex }, { gender }],
        }).limit(15);

        return products;
    }
}

export { Product };
