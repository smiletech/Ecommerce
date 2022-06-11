const httpStatus = require('http-status');
const {User, Product, Category} = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct= async (productdata) => {
      return Product.create(productdata);
};
const createCategory= async (productdata) => {
  return Category.create(productdata);
};

        
const queryProduct = async (filter, options) => {
    const products = await Product.paginate(filter, options);
    return products;
  };
  
  const queryCategory = async (filter, options) => {
    const category = await Category.paginate(filter, options);
    return category;
  };

  
const deleteUserById = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
    }
    await product.delete();
    return product;
  };
  
  module.exports = {
    createCategory,
    queryCategory,
    createProduct,
    queryProduct,
    deleteUserById,
  };
