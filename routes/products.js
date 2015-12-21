var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;

/* GET all products. */
router.get('/', function(req, res, next) {
    Product.findAllProducts(function(products){
        res.render('Products/index', { 'products': products });
    });
});


/* Add product. */
router
    .get('/add', function(req, res, next) {
        res.render('Products/add', { 'namePage': 'Add product' });
    })
    .post('/add', function(req, res, next) {
        var newProduct = new Product(req.body);
        newProduct.addNewProduct(function(product){
            Product.findAllProducts(function(products){
                res.render('Products/index', { 'message': 'Product '+ product.name +' created!','products': products });
            });
        });
    });

module.exports = router;
