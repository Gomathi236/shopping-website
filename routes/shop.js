const path = require('path');

const express = require('express');

const shopControllers = require('../controllers/shop')


const router = express.Router();


router.get("/", shopControllers.getIndex);

router.get("/products",shopControllers.getProducts);
router.get("/products/:productId",shopControllers.getProduct);

router.get("/cart",shopControllers.getCart);
router.post("/cart",shopControllers.postCart);
router.post('/cart-delete-item',shopControllers.postCartDeleteProduct)

router.get("/checkout",shopControllers.getCheckOut);


router.get("/orders",shopControllers.getOrders);


module.exports = router;
