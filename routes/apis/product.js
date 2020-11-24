const path = require('path')
const express = require('express')
const Product = require('../../models/product')
const router = new express.Router()

const {newProduct,getProducts,getProduct} = require('../../controllers/product')


//get all products
router.get('/api/allproducts',getProducts)

//get a specific product
router.get('/api/product/:id',getProduct)



module.exports = router