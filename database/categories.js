const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    status: String,
    date: Date
});

const Categories = mongoose.model('categories', categorySchema);

module.exports = Categories;