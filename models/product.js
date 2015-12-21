var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    serial: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


schema.methods.addNewProduct = function(callback){
    this.save(function(err, product, affected) {
        if (err) throw err;
        callback(product);
    });
}


schema.statics.findAllProducts = function(callback){
    this.find({}, function (err, db_articles) {
        callback(db_articles);
    });
}

exports.Product = mongoose.model('Product', schema);