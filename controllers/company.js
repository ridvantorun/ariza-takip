const Product = require('../models/product');

exports.getIndex = (req, res, next) => {

  const products = Product.getAll();
  res.render("company/index", 
      { 
        title: "Company", 
        products: products,
        path: '/'
    });
}

 exports.getProducts = (req, res, next) => {

    const products = Product.getAll();
    res.render("company/products", 
        { 
          title: "Products", 
          products: products,
          path: '/products'
      });
  }

  exports.getProduct = (req, res, next) => {
    const product = Product.getById(req.params.productid);
  
    res.render('company/product-detail', {
      title: product.name,
      product: product,
      path: '/products'
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