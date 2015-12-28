var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;

router.post('/product/add', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    var newProduct = new Product(req.body);
    newProduct.addNewProduct(function(product){
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache'
        });
        res.end('Ok');
    });
});

router.get('/allproducts', function(req, res, next) {
    Product.findAllProducts(function(products){
        res.jsonp(products);
        res.end('Ok');
    });
});

router.get('/bestsellersProducts', function(req, res, next) {           //temp func
    Product.findAllProducts(function(products){
        res.jsonp(products);
        res.end('Ok');
    });
});


module.exports = router;
