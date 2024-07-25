const Product = require('../models/product');

exports.getIndex = (req, res, next) => {

  Product.findAll()
      .then(products => {
        console.log(products);  
        console.log(products);
          res.render('company/index', {
              title: 'yilmazmachine',
              products: products,
              path: '/'
          });
      })
      .catch((err) => {
          console.log(err);
      });
}

exports.getProducts = (req, res, next) => {

  Product.findAll()
      .then(products => {
          res.render('company/products', {
              title: 'Products',
              products: products,
              path: '/'
          });
      })
      .catch((err) => {
          console.log(err);
      });
}

exports.getProduct = (req, res, next) => {

  Product.findById(req.params.productid)
      .then(product => {
          res.render('company/product-detail', {
              title: product.name,
              product: product,
              path: '/products'
          });
      })
      .catch((err) => {
          console.log(err);
      });
}

  exports.getProductDetails = (req, res, next) => {

    res.render("company/details", 
        { 
          title: "Details", 
          path: '/details'
      });
  }

  exports.getCart = (req, res, next) => {

    res.render("company/cart", 
        { 
          title: "Cart", 
          path: '/cart'
      });
  }

  exports.getOrders = (req, res, next) => {

    res.render("company/orders", 
        { 
          title: "Orders",
          path: '/orders'
      });
  }