const express = require("express");
const router = express.Router();

const companyController = require('../controllers/company');

router.get("/", companyController.getIndex);

router.get("/products", companyController.getProducts);

router.get("/products/:productid", companyController.getProduct);

router.get("/details", companyController.getProductDetails);

router.get("/cart", companyController.getCart);

router.get("/orders", companyController.getOrders);

module.exports = router;
