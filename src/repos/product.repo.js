import prisma from "../loaders/prisma.js";
class ProductRepo {
  // /**
  //  * Retrieves a product from the database based on their ID.
  //  *
  //  * @param {number} id - The ID of the product to retrieve.
  //  * @return {Promise<object>} A promise that resolves to the product object.
  //  */
  // static async getProductById(id) {
  //   const product = await prisma.product.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });

  //    return product;
  // }

  /**
   * Retrieves all products from the database.
   *
   * @return {Array} An array of product objects
   */
  static async getAllProducts() {
    const products = await prisma.product.findMany();
    return products;
  }

  // /**
  //  * Retrieves a product from the database based on their productname.
  //  *
  //  * @param {string} productname - The productname of the product to retrieve.
  //  * @return {Promise<Object>} A Promise that resolves to the product object if found, or null if not found.
  //  */
  // static async getProductByAttribute(attribute, value) {
  //   const product = await prisma.product.findUnique({
  //     where: {
  //       [attribute]: value,
  //     },
  //   });
  //   return product;
  // }

  /**
   * Creates a new product in the database.
   *
   * @param {Object} product - The product object containing the product's information.
   * @return {Promise<Object>} The newly created product object.
   */
  static async createProduct(name, description, price, stock, sellerId) {

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        sellerId
      },
    });
    return newProduct;
  }

  // /**
  //  * Update a product by their ID.
  //  *
  //  * @param {number} id - the ID of the product to update
  //  * @param {object} product - the updated product data
  //  * @returns {Promise<object>} the updated product
  //  */
  // static async updateProduct(id, product) {

  //   const updatedProduct = await prisma.product.update({
  //     where: { id },
  //     data: product,
  //   });
  //   return updatedProduct;
  // }

  // /**
  //  * Deletes a product by ID.
  //  *
  //  * @param {number} id - The ID of the product to delete
  //  * @return {Promise<Object>} The deleted product object
  //  */
  // static async deleteProduct(id) {
  //   const deletedProduct = await prisma.product.delete({
  //     where: { id },
  //   });
  //   return deletedProduct;
  // }


  // /**
  //  * Checks if a given attribute is unique among all products.
  //  *
  //  * @param {string} attribute - The attribute to check.
  //  * @param {string} value - The value of the attribute to check.
  //  * @return {Promise<boolean>} True if the attribute value is unique, false otherwise.
  //  */
  // static async isUniqueAttribute(attribute, value) {
    
  //   const product = await prisma.product.findUnique({
  //     where: {
  //       [attribute]: value,
  //     },
  //   });
  //   return product === null;
  // }


}

export default ProductRepo;

