const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.findAll()
      .then(products => {
          res.render('admin/products', {
              title: 'Admin Products',
              products: products,
              path: '/admin/products',
              action: req.query.action
          });
      })
      .catch((err) => {
          console.log(err);
      });
}

  exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', 
      {
        title: 'New Product',
        path: '/admin/add-product'
    });
  }

  exports.postAddProduct = (req, res, next) => {
    
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    
    const product = new Product(name, price, description, imageUrl);

      product.save()
        .then(result => {
          res.redirect('/admin/products');
        })
        .catch(err => {
          console.log(err);
        });
    /*const product = new Product(req.body.name, 
        req.body.price, 
        req.body.imageUrl, 
        req.body.description);
    
    product.saveProduct();
    res.redirect('/');*/
}

exports.getEditProduct = (req, res, next) => {

  Product.findById(req.params.productid)
      .then(product => {
          console.log(product);
          res.render('admin/edit-product', {
              title: 'Edit Product',
              path: '/admin/products',
              product: product
          });
      })
      .catch(err => { console.log(err) });

}

exports.postEditProduct = (req, res, next) => {
  
  const product = Product.getById(req.body.id);

  product.name = req.body.name;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.description = req.body.description;

  Product.Update(product);
  res.redirect('/admin/products?action=edit');
}

exports.postDeleteProduct = (req,res,next) => {
  Product.DeleteById(req.body.productid);
  res.redirect('/admin/products?action=delete');
}