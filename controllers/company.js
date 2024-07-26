const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.findAll()
        .then(products => {
            Category.findAll()
                .then(categories => {
                    res.render('company/index', {
                        title: 'Yilmazmachine',
                        products: products,
                        path: '/',
                        categories: categories
                    });
                })
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProducts = (req, res, next) => {

    Product.findAll()
        .then(products => {

            Category.findAll()
                .then(categories => {
                    res.render('company/products', {
                        title: 'Products',
                        products: products,
                        path: '/',
                        categories: categories
                    });
                })
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.findAll()
        .then(categories => {
            model.categories = categories;
            return Product.findByCategoryId(categoryid);
        })
        .then(products => {
            res.render('company/products', {
                title: 'Products',
                products: products,
                categories: model.categories,
                selectedCategory: categoryid,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        })
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