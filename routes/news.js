const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.js')




//  Routes for '/news'
router.route('/')
    //  List all news
    .get(newsController.getAllNews)



//  Routes for '/news/:newsId'
router.route('/:newsId')
    //  List particular news
    .get(newsController.getOneNews)
    //  Updates particular news
    .put(newsController.updateNews)
    //  Delete particular news
    .delete(newsController.deleteNews)



//  Routes for '/news/categories/:categoryId'
router.route('/categories/:categoryId')
    //  list all news by particlar category
    .get(newsController.getNewsByCategory)
    //  Creates a new news by particular category
    .post(newsController.createNewNews)



//  Routes for '/news/author'
router.route('/author')
    //  List news by author
    .get(newsController.getNewsByAuthor)



//  Exporting router methods
module.exports = router;