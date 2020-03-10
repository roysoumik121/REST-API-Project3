const categories = require('../database/categories')
const news = require('../database/news')



//  Exporting all news route functions
module.exports = {

    //  List all news
    getAllNews: async (req, res, next)=>{
        try {
            const data = await news.find({})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  List all news by dates
    getNewsByDates: async (req, res, next)=>{
        try {
            
        } catch (error) {
            next(error)
        }
    },

    //  List all news by author
    getNewsByAuthor: async (req, res, next)=>{
        try {
            const data = await news.find({})
            res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    },

    //  Creates a new news
    createNewNews: async (req, res, next)=>{
        try {
            const newNews = new news(req.body)
            const categoryData = await categories.findById(req.params.categoryId)
            newNews.category_id = categoryData
            await newNews.save();
            res.status(201).json(newNews)
        } catch (error) {
            next(error)
        }
    },

    //  List particular news
    getOneNews: async (req, res, next)=>{
        try {
            const data = await news.findById(req.params.newsId)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  List all news by particular category
    getNewsByCategory: async (req, res, next)=>{
        try {
            const data = await news.find({category_id: req.params.categoryId})
            res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    },

    //  Updates particular news
    updateNews: async (req, res, next)=>{
        try {
            const data = await news.findByIdAndUpdate(req.params.newsId, req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  Delete particular news
    deleteNews: async (req, res, next)=>{
        try {
            const data = await news.findByIdAndRemove(req.params.newsId);
            if(data){
                res.status(200).json(data);
            }
            else{
                res.status(404).json({ Error: 'news does not exist'});
            }
        } catch (error) {
            next(error)
        }
    }

}