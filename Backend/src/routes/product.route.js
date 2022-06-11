const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const productValidation = require('../validations/product.validation');
const productController = require('../controllers/product.controller');

const router = express.Router();




// router.use(auth());

// ***************************************
router
  .route('/category')
  .post(validate(productValidation.createCategory),productController.createCategory)
  .get(productController.getCategory)
 



  
router
  .route('/')
  .post(validate(productValidation.createProduct),productController.createProduct)
  .get(validate(productValidation.getProduct),productController.getProduct);



module.exports = router;