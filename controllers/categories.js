const categories = require('../database/categories')



//  Exporting all categories route functions
module.exports = {

    //  List all categories
    getCategories: async (req, res, next)=>{
        try {
            const data = await categories.find({})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  Creates a new category
    createNewCategory: async (req, res, next)=>{
        try {
            const newData = new categories(req.body)
            const data = await newData.save();
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  List particular category
    getCategory: async (req, res, next)=>{
        try {
            const data = await categories.findById(req.params.categoryId)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  Updates particular category
    updateCategory: async (req, res, next)=>{
        try {
            const data = await categories.findByIdAndUpdate(req.params.categoryId, req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    },

    //  Delete particular category
    deleteCategory: async (req, res, next)=>{
        try {
            
        } catch (error) {
            next(error)
        }
    }

}