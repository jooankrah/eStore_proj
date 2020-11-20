const product = require('../models/product')

const data = require ('../utils/data')

const seed = async ()=>{


const numberOfProducts = await product.countDocuments({},(err,num)=>{
            if (err) {
                console.log(err)
            }
            return num
})

if (numberOfProducts > 0) {
    await product.deleteMany({},(err)=>{
        if (err) {
            console.log(err)
        }
        console.log('All Products deleted')
    })

    await product.create(data,(err)=>{
        if (err) {
            console.log(err)
        }
        console.log('Products Seeded')
   })  
}
else{
    await product.create(data,(err)=>{
        if (err) {
            console.log(err)
        }
        console.log('Products Seeded')
    })
}
   
}

module.exports=seed