import ProductService from "../../services/product.service.js";
import { CreatedResponse, SuccessResponse, DeletedResponse } from "../../utils/appResponse.js";

class ProductController {

    constructor() {
        this.productService = new ProductService();
     }
    getProducts = async (req, res) => {

            const products = await this.productService.getProducts();
            return new SuccessResponse("Products are fetched successfully", { products }).send(res);
    }

    // getProduct = async (req, res) => {

    //     const id = req.params.id;
 
    //     const product = await this.productService.getProductById(id);
    //     return new SuccessResponse("Product is fetched successfully", { product }).send(res);
    // }

    // getSelf = async (req, res) => {

    //     const id = req.currentProduct.id;
 
    //     const product = await this.productService.getProductById(id);
    //     return new SuccessResponse("Product is fetched successfully", { product }).send(res);
    // }


    createProduct = async (req, res) => {

        const { name, description, price, stock } = req.body;

        const currentUser = req.currentUser;

        const sellerId = currentUser.id;

        console.log(name, description, price, stock, sellerId);

        const productDb = await this.productService.createProduct(name, description, price, stock, sellerId);

        return new CreatedResponse("Product is created successfully", productDb).send(res);

    }

    // updateProduct = async (req, res) => {
    //     const { id } = req.params;
        
    //     const product = req.body;

    //     const productDb = await this.productService.updateProduct(id, product);
    //     return new SuccessResponse("Product is updated successfully", productDb).send(res);
    // }

    // deleteProduct = async (req, res) => {

    //     const id = req.params.id;

    //     await this.productService.deleteProduct(id);

    //     return new DeletedResponse("Product is deleted successfully").send(res);
    // }
}

export default ProductController;


