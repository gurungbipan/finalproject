var mongoose = require("mongoose");
mongoose.pluralize(null);           //avoid s post fix for collection. 

var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id:Number,
    name: String,
    description: String,
    imageUrl: String,
    price: Number
    
});

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;