const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const productService=require('../services/product.service')

const createProduct = catchAsync(async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.status(httpStatus.CREATED).send(product);
    
  });



  const createCategory = catchAsync(async (req, res) => {
    const category = await productService.createCategory(req.body);
    res.status(httpStatus.CREATED).send(category);
  });

  const getProduct = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await productService.queryProduct(filter, {
      ...options,
      populate: [{
        path: "category",
        select: "_id name"
      }]
    });

    res.send(result);
  });




  const getCategory = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await productService.queryCategory(filter, {
      ...options,
    });
    res.send(result);
  });

  



module.exports = {
  createCategory,
  getCategory,
    createProduct,
     getProduct

  };
  