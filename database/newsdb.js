const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    headline: String,
    authors: String,
    description: String,
    date: Date,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
});

const News = mongoose.model('news', newsSchema);

module.exports = News;