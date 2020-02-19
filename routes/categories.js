const express = require('express');
const categories = require('../database/categorydb.js');
const router = express.Router();



//  List all categories   
router.get('/', async (req, res, next)=>{
    try {
        const category = await categories.find({});
        res.status(200).send(category);
    } 
    catch (error) {
        next(error);
    }
})


//  List particular category
router.get('/:categoryId', async (req, res, next)=>{
    try {
        const category = await categories.findById(req.params.categoryId);
        res.status(200).send(category);
    } 
    catch (error) {
        next(error);
    }
})


//  Creates a new category
router.post('/', async (req, res, next)=>{
    try {
        const newCategory = new categories(req.body);
        const category = await newCategory.save();
        res.status(201).send(category);
    } 
    catch (error) {
        next(error);
    }
})


//  Updates particular category
router.put('/:categoryId', async (req, res, next)=>{
    try {
        const updatedCategory = await categories.findByIdAndUpdate(req.params.categoryId, req.body)
        res.status(200).send(updatedCategory);
    } 
    catch (error) {
        next(error);
    }
})


//  Deletes particular category
router.delete('/:categoryId', async (req, res, next)=>{
    try {
        
    } 
    catch (error) {
        next(error);
    }
})


module.exports = router;