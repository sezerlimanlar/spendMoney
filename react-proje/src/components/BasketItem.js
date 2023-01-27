import React from 'react'

function BasketItem({item, product}) {

  //Komponent, "item" ve "product" adında iki props'u alır. "item" ve "product" verileri, içerisinde <li> elementi olan bir liste oluşturmak için kullanılır. <li> elementinin içeriği, "product.title" ve "item.amount" verilerinden oluşur.
  return (
    <>    <li className='basket-item'>{product.title} <span>x  {item.amount}</span></li>
    <style jsx>{`
    .basket-item{
      paddding-bottom:10px;
    font-size:17px;
    }
    .basket-item span{
      color:gray;
    }
    

    `}</style>
    </>

  )
}

export default BasketItem