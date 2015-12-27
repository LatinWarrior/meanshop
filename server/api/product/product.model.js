/* server/api/product/product.model.js */

'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: {type: String, required: true, trim: true},
    price: {type: Number, required: true, min: 0},
    stock: {type: Number, default: 1},
    description: String
//   name: String,
//   info: String,
//   active: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
