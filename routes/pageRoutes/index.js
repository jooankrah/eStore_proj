const express = require('express')
const { getProduct } = require('../../controllers/product')
const product = require('../../controllers/product')
const router = new express.Router()


//render index page
router.get('/',(req,res)=>{
    res.render('index',{title : 'Home'})
})

//render products page
router.get('/allproducts',(req,res)=>{
    res.render('allProducts', {'title':'All Products'})
})

//render product page
router.get('/products/:id',getProduct)

//render cart page
router.get('/cart',(req,res)=>{
    res.render('cart',{'title':'Cart'})
})

//render checkout page
router.get('/checkout',(req,res)=>{
    res.render('checkout',{'title': 'Checkout'})
})


module.exports=router