const express = require('express');
const news = require('../database/newsdb.js');
const categories = require('../database/categorydb.js');
const router = express.Router();



//  List all news   
router.get('/', async (req, res, next)=>{
    try {
        const allNews = await news.find({});
        res.status(200).send(allNews);
    } 
    catch (error) {
        next(error);
    }
})


//  List particular news  
router.get('/:newsId', async (req, res, next)=>{
    try {
        const singleNews = await news.findById(req.params.newsId);
        res.status(200).send(singleNews);
    } 
    catch (error) {
        next(error);
    }
})


//  Updates particluar news  
router.put('/:newsId', async (req, res, next)=>{
    try {
        const updatedNews = await news.findByIdAndUpdate(req.params.newsId, req.body)
        res.status(200).send(updatedNews);
    } 
    catch (error) {
        next(error);
    }
})


//  Deletes particluar category news  
router.delete('/:newsId', async (req, res, next)=>{
    try {
        const oneNews = await news.findById(req.params.newsId);
        if(!oneNews){
            return res.status(404).send({error: "News does not exists"});
        }
        const category = await categories.findById(oneNews.category);
        await oneNews.remove();
        category.news.pull(oneNews);
        await category.save();
        res.status(200).send(oneNews);
    } 
    catch (error) {
        next(error);
    }
})


module.exports = router;