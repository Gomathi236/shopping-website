const Product = require('../models/product');
const Cart = require('../models/cart');

const db = require("../util/database")


exports.getProducts = (req, res, next) => {
  Product.fetchAll() 
  .then(([rows,fieldData])=>{
    res.render('shop/product-list', {
      prods: rows,
      title : 'All Products',
      path: '/products'
    });
  })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) =>{
    res.render('shop/product-detail', {
      products: product[0],
      Title : product.title,
      path :'/products'
    });
  })
  .catch(err => console.log(err))
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products =>{
    res.render('shop/index', {
      prods: products,
      title : 'Shop',
      path: '/'
    });
  }).catch(err => console.log(err));
  
}

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
}
exports.postCart =(req,res,next)=>{
  const prodId = req.body.productId;
  Product.findById(prodId, product =>{
    Cart.addProduct(prodId, product.price);
  })
  res.redirect("/cart");
}

exports.postCartDeleteProduct = (req,res,next) =>{
  const prodId = req.body.productId;
  Product.findById(prodId,product =>{
    Cart.deleteProduct(prodId,product.price);
    res.redirect("/cart");
  
  })
  

}

exports.getCheckOut = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    title: 'Checkout'
  });
};
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/orders',
      title: 'Orders'
    });
  };

  