import ProductRepo from "../repos/product.repo.js";
import { NotFoundError } from "../utils/appError.js";

class ProductService {
    
    async getProducts() {
        const products = await ProductRepo.getAllProducts();
        return products;
    }

    // async getProductById(id) {


    //     const product = await ProductRepo.getProductById(id);

    //     if (!product) {
    //         throw new NotFoundError("Product not found");
    //     }

    //     return product;
    // }

    async createProduct(name, description, price, stock, sellerId) {
        
        const productDb = await ProductRepo.createProduct(name, description, price, stock, sellerId);

        return productDb;
    }

    // async updateProduct(id, product) {
    //     const productDb = await ProductRepo.updateProduct(id, product);
    //     return productDb;
    // }

    // async deleteProduct(id) {
    //     const productDb = await ProductRepo.deleteProduct(id);
    //     return productDb;
    // }

    
    // /**
    //  * Check if the given attribute value is unique.
    //  *
    //  * @param {string} attribute - The attribute to check uniqueness for.
    //  * @param {any} value - The value to check uniqueness against.
    //  * @return {Promise<boolean>} Whether the attribute value is unique.
    //  */
    // async isUniqueAttribute(attribute, value) {
    //     const isUnique = await ProductRepo.isUniqueAttribute(attribute, value);
    //     return isUnique;
    // }
    

    // /**
    //  * Retrieves a product from the database based on their attribute.
    //  *
    //  * @param {string} attribute - The attribute to search on.
    //  * @param {any} value - The value to search for.
    //  * @return {Promise<Object>} A Promise that resolves to the product object if found, or null if not found.
    //  */
    // async getProductByAttribute(attribute, value) {
    //     const product = await ProductRepo.getProductByAttribute(attribute, value);
    //     return product;
    // }


}

export default ProductService;

