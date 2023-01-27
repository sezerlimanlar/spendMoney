import React from 'react'
import BasketItem from './BasketItem';
import { moneyFormat } from '../helper';

/* Sepet komponenti, sepet içerisindeki ürünleri listelemek üzere BasketItem componenti oluşturur ve toplam fiyatı gösterir.
------------------------------------------------------------------------------------
App.js üzerinde kullanmak üzere olduğumuz probları çektik */
function Basket({basket, products, total, resetBasket}) {
  return (
<>
  
  <div className="basket-container container">
  <h3>Alışveriş Detayları</h3>
    <ul>
      {/* Sepet içerisindeki ürünlerin her bir elemanını item olarak atar
       sepet içindeki elemanla, ürünler içerisindeki elemanın id si eşitse product'ın içine atar
       ve bunları BasketItem componentinde kullanmak üzere probs olarak yollar*/}
    {basket.map(item => (
    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
  ))}
    </ul>
  <div className='total'>
    Toplam: {moneyFormat(total)}₺
  </div>
  {/* sıfırlama butonu oluşturduk. onclick özelliği kullanarak sıfırlama işlemi yaptıracağız(bu işlem App.js üzerinde yapıldı.) */}
  <button className='resetButton' onClick={resetBasket}>Sepeti Sıfırla</button>
  </div>

   {/* Sepet içerisindeki elemanların CSS kodları. */}
  <style jsx>{`
  .basket-container{
    padding: 20px;
    margin-bottom: 30px;
    background-color: white;
    border: 1px solid  gray;
    
    
  }
  .basket-container h3{
    font-size:20px;
    margin-bottom:15px;

  }
  .basket-container .total{
    border-top:1px solid gray;
    padding-top:10px;
    margin-top:10px;
    text-align:right;
    font-weight:bold;
    font-size:20px;

  }
    .resetButton{
    height:40px;
    padding:0 20px;
    background:linear-gradient(to top, green, yellowgreen);
    font-size:16px;
    font-weight:600;
    color:white;
    border-radius:10px;
  }
  
  
  `}</style>
    </>  
    )
}

export default Basket