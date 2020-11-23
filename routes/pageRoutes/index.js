const express = require('express')
const { getProduct } = require('../../controllers/product')
const product = require('../../controllers/product')
const router = new express.Router()


//render index page
router.get('/',(req,res)=>{
    res.render('index')
})

//render products page
router.get('/allproducts',(req,res)=>{
    res.render('allProducts')
})

//render product page
router.get('/products/:id',getProduct)

//render cart page
router.get('/cart',(req,res)=>{
    res.render('cart')
})

//render checkout page
router.get('/checkout',(req,res)=>{
    res.render('checkout')
})


module.exports=router