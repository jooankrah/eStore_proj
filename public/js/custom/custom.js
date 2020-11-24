    let cart = []
    const productId = $('#product').data('id');  
    const name = $('#productName').text();
    const image= $('#productImage').attr('src');
    const price =$('#productPrice').text();
    function getNewProucts() {
         $.ajax({
            type: "get",
            url: "/api/allproducts",
            success: function (response) {
            
                const data = response.slice(0,20)
                for(var i=0;i<data.length;i++){

                const latestProducts = `<div class="col-sm-3">
                <div class="product-image-wrapper">
                    <div class="single-products">
                    <a href="/products/${data[i]._id}" class="productinfo text-center">
                            <img src= ${data[i].Image} alt="image" />
                            <h2>${data[i].Price}</h2>
                            <p>${data[i].Name}</p>
                    </a>                              
                    </div>
                </div>
            </div>`

                    $('#latestProducts').after(latestProducts);

                }

            }
        })
}


$(document).ready(
     function addToCart(){
        let addedProduct ={
            quantity : 1,
            image,
            name,
            price,
            productId
                } 
    //get quantity 
    $("#quantity").on("input", function(){
        // Print entered value in a div box
        addedProduct.quantity = $('#quantity').val();
        console.log(addedProduct)
    });

$('.addToCart').on('click', function (e) {
        e.preventDefault()
        const oldcart = JSON.parse(localStorage.getItem("cart"))
        console.log(oldcart)
        if (oldcart != null) {
            console.log(oldcart)
            cart = oldcart.concat(addedProduct)   
            localStorage.setItem('cart',JSON.stringify(cart))
            $.toast({
                      text : `Item added to cart`,
                      position:'top-right',
                      icon :'success'
                    })
        }else{
            cart.push(addedProduct)
            localStorage.setItem('cart',JSON.stringify(cart))

        }

});

})



getNewProucts()
