var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


schema.methods.addNewCategory = function(callback){
    this.save(function(err, category, affected) {
        if (err) throw err;
        callback(category);
    });
}


schema.statics.findAllCategory = function(callback){
    this.find({}, function (err, db_articles) {
        callback(db_articles);
    });
}

exports.Category = mongoose.model('Category', schema);