function getCart() {
         
           const data = JSON.parse(localStorage.getItem('cart'))
            if (data==null) {

            const cartItems = `<tr><div class="text-center">No Items added to cart<div></tr>`
            $('#cartbody').after(cartItems);
           } else {
              for(var i=0;i<data.length;i++){
              
            const cartItems =  `<tr id= ${data[i].productId}>
              <td class="cart_product">
                  <img src="${data[i].image}" style="height: 100px; weight: 100px" alt="">
              </td>
              <td class="cart_description">
                  <h4><a href="">${data[i].name}</a></h4>
              </td>
              <td class="cart_price">
                  <p>${data[i].price}</p>
              </td>
              <td class="cart_quantity">
                  <div class="cart_quantity_button">
                      <input class="cart_quantity_input" type="text" name="quantity" value=${data[i].quantity} autocomplete="off" size="2">
                  </div>
              </td>
              <td class="cart_total">
                  <p class="cart_total_price">$59</p>
              </td>
              <td class="cart_delete">
                  <button data-id = ${data[i].productId} class="cart_quantity_delete removeItem" href=""><i class="fa fa-times"></i></button>
              </td>
          </tr>`
          $('#cartbody').after(cartItems);

        }

           }
           

       }


       function getCheckout() {
        const data = JSON.parse(localStorage.getItem('cart'))
        let totalPrice = 0
        for(var i=0;i<data.length;i++){

         totalPrice += Number(data[i].price.slice(1))

        const checkoutItems =  `<tr id= ${data[i].productId}>
                                 <td class="cart_product">
                                     <img src="${data[i].image}" style="height: 100px; weight: 100px" alt="">
                                 </td>
                                 <td class="cart_description">
                                     <h4><a href="">${data[i].name}</a></h4>
                                 </td>
                                 <td class="cart_price">
                                     <p>${data[i].price}</p>
                                 </td>
                                 <td class="cart_quantity">
                                     <div class="cart_quantity_button">
                                         <input class="cart_quantity_input" type="text" name="quantity" disabled value=${data[i].quantity} autocomplete="off" size="2">
                                     </div>
                                 </td>
                                 <td class="cart_total">
                                     <p class="cart_total_price">${data[i].price}</p>
                                 </td>
                             </tr>`

            $('#checkout').after(checkoutItems);
            $('#total_price').text('$ '+ totalPrice.toString());
       }
    }

$(document).ready(function () {
    //remove Item from cart on click
    $('.removeItem').on('click', function (e) {
        const data = JSON.parse(localStorage.getItem('cart'))
        e.preventDefault()
    const toBeremoved = $(this).data('id')

   // const b = JSON.parse(toBeremoved)
    console.log(toBeremoved)

    var cart = data.filter(function(value, index, arr){ 
        return value.productId != toBeremoved;
    });
    localStorage.setItem('cart',JSON.stringify(cart))

        $(this).closest('tr').remove();
        $.toast({
            text : `Item removed to cart`,
            position:'top-right',
            icon :'error'
          })
    })
});
             
                       
getCart()    
getCheckout()                   
                       

