var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;

/* GET all products. */
router.get('/', function(req, res, next) {
    Product.find({}, function (err, db_articles) {
        if (err) throw err;
        res.render('Products/index', { 'products': db_articles });
    });
});


/* Add product. */
router
    .get('/add', function(req, res, next) {
        res.render('Products/add', { 'namePage': 'Add product' });
    })
    .post('/add', function(req, res, next) {
        var product = new Product(req.body);
        product.save(function(err, user, affected) {
            if (err) throw err;
            Product.find({}, function (err, db_articles) {
                if (err) throw err;
                res.render('Products/index', { 'message': 'Product '+ user.name +' created!','products': db_articles });
            });
        });

    });

module.exports = router;
