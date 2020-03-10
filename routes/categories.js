const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories.js')



//  Routes for '/categories'
router.route('/')
    //  List all categories
    .get(categoryController.getCategories)
    //  Creates a new category
    .post(categoryController.createNewCategory)



//  Routes for '/categories/:categoryId'
router.route('/:categoryId')
    //  List particular category
    .get(categoryController.getCategory)
    //  Updates particular category
    .put(categoryController.updateCategory)
    //  Delete particular category
    .delete(categoryController.deleteCategory)



//  Exporting router methods
module.exports = router;