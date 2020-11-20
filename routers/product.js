const path = require('path')
const express = require('express')
const Product = require('../models/product')
const router = new express.Router()

const {newProduct,getProducts,getProduct} = require('../controllers/product')

//root route
router.get("/", (req, res)=>{
    res.send("Hello World");
});

//render products page
router.get('/allproducts',getProducts)

//render a specific product
router.get('/product/:id',getProduct)



module.exports = router