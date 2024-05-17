import ProductRepo from "../repos/product.repo.js";
import { NotFoundError } from "../utils/appError.js";

class ProductService {

    async getProducts() {
        const products = await ProductRepo.getAllProducts();
        return products;
    }

    async getProductById(id) {

        const product = await ProductRepo.getProductById(id);
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        return product;
    }

    async getUserProducts(userId) {


        const products = await ProductRepo.getUserProducts(userId);

        return products;
    }

    async createProduct(name, description, price, stock, sellerId) {

        const productDb = await ProductRepo.createProduct(name, description, price, stock, sellerId);

        return productDb;
    }

    async updateProduct(id, product) {
        const productDb = await ProductRepo.updateProduct(id, product);
        return productDb;
    }

    async deleteProduct(id) {
        const productDb = await ProductRepo.deleteProduct(id);
        return productDb;
    }

}

export default ProductService;

