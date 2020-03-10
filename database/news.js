const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    headline: String,
    author: String,
    description: String,
    date: Date,
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
});

const News = mongoose.model('news', newsSchema);

module.exports = News;