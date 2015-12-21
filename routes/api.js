var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;

router.post('/product/add', function(req, res, next) {
    var newProduct = new Product(req.body);
    newProduct.addNewProduct(function(product){
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache'
        });
        res.end('Product saved!');
    });
});


module.exports = router;
