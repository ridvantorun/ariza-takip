const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin');

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

// admin/products/20
router.get("/products/:productid", adminController.getEditProduct);

router.post("/products", adminController.postEditProduct);

router.get("/products", adminController.getProducts);

router.post('/delete-product', adminController.postDeleteProduct);

router.get('/add-category', adminController.getAddCategory);

router.post('/add-category', adminController.postAddCategory);

router.get('/categories/:categoryid', adminController.getEditCategory);

router.get('/categories', adminController.getCategories);

router.post('/categories', adminController.postEditCategory);

module.exports = router;