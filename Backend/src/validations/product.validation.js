const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createProduct = {
     body: Joi.object().keys({
      title: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      image:Joi.object(),
      rating:Joi.object()
  }),
};


const createCategory = {
  body: Joi.object().keys({
   name: Joi.string().required(),
   description: Joi.string().required(),
  })}

const getProduct = {
  body: Joi.object().keys({
   userId:Joi.string()
}),
};
 
module.exports = {
  createCategory,
  createProduct,
   getProduct
};
