var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categoryModel = new Schema({
    name: {
        type: String
    }
});

module.exports= mongoose.model('Category', categoryModel);