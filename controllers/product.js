const Product = require('../models/product')

//create a product
const newProduct =async (req,res)=>{

   await Product.create(productItem, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
        console.log(newlyCreated); 
        }
    });

}

//get all products
const getProducts = async (req,res)=>{
  await  Product.find({},(err,products)=>{
        if (err){
            res.sendStatus(404)
        }
      return  res.json(products)
    })
}



//get a specific product
const getProduct = async (req,res)=>{
 const product_id = req.params.id
 await Product.findById({id:product_id},(err,product)=>{
        if (err) {
            res.sendStatus(404)
        } else {
         return   res.json(product)
        }
 })

}

module.exports={newProduct,getProducts,getProduct}