import React from 'react'
import  {moneyFormat}  from '../helper'
function Product({product, total, money, basket, setBasket}) {  //propları kullanmak üzere tanımladık

  const basketItem =  basket.find(item => item.id === product.id) //basketItem değişkenine sepet içerisindeki ilk elemanın değerini yada undefined döndürür. 

  const addBasket = () => { //Ekleme işlemi
    const checkBasket = basket.find(item => item.id === product.id) //checkBasket değişkenine sepet içerisindeki ilk elemanın değerini yada undefined döndür.
    
    if (checkBasket) {  //checkBasket true ise yani sepette aynı üründen var ise aşağıdaki kod bloğu çalışır.

      checkBasket.amount +=1; //Eğer sepette aynı ürün var ise miktarını 1 arttır.
      setBasket([...basket.filter(item =>item.id !== product.id), checkBasket]); //Tüm sepeti seçip sepette olmayanları ve checkBasket'i günceller.
  }else{
    setBasket([...basket, { //Daha önce sepette aynı üründen yoksa direkt miktarını 1 olarak günceller.
      id: product.id,
      amount:1

    }])
  }
}
const removeBasket =() => { //Silme işlemi
  const currentBasket = basket.find(item => item.id === product.id)  //Sepette olan ürünün aynısını bulur
  const basketWithoutCurrent = basket.filter(item => item.id !== product.id)  //Sepette olmayan ürünleri filtreler ve basketwithoutcurrent değişkenine dizi olarak döndürür.
    currentBasket.amount -=1   //Sepette bulduğu aynı ürünün miktarını 1 azaltır.
    if (currentBasket.amount===0) {  
      setBasket([...basketWithoutCurrent]);  //Tüm sepette olmayanları günceller
    }else{
  
      setBasket([...basketWithoutCurrent, currentBasket]); //Tüm sepette olmayanları ve sepette olan ürünü günceller.
  }
}


  return (


    
    <div className='product'>
      <img src={product.image} alt=""/>
        <h5>{product.title}</h5>
        <div className='price'>{moneyFormat(product.price)}₺</div> {/*moneyFormat ile yazan fiyatı bölgesel olarak para formatına ayırmak için kullandık */}
        <div className='actions'>
          <button className='sellButton'disabled={!basketItem}onClick={removeBasket}>Sat</button> {/*Sepet boş ise Sat butonu devre dışı olacaktır.Basıldığında ise removeBasket fonksiyonu çalışacaktır}*/}
          <span className='amount'>{basketItem && basketItem.amount || 0}</span> {/*basketItem true ise yani sepette ürün varsa basketItem.amount değerini değilse miktar yerine 0 yazar */}
          <button className='buyButton'disabled={total + product.price>money} onClick={addBasket}>Satın Al</button>   {/*Toplam fiyat ve ürünün fiyatı paramızdan büyük ise buton disable olucaktır. Tıklandığında ise addBasket fonksiyonu çalışacaktır.*/}       
        </div>
          <style jsx>{`
          .product{
            text-align: center;
            padding:15px;
            background:White;
            border-radius:10px;
            border:2px solid green;
            margin-bottom:20px;
            width:30%;
            box-shadow: 10px 10px 10px gray;
             
        }
        .product img{
          width:100%;

        }
        .product h5{
          font-size:20px;
          margin-bottom:10px;
        }
        .product .price{
          font-size:20px;
          font-weight:550;
        }
        .product .actions{
          display:flex;
          align-items:center;
          margin-top:20px;
        }

        .actions button{
          height:40px;
          padding:0 15px;
          flex:1;  //Bulundukları alana göre genişleyerek boş alanları doldurmak için kullanıldı.
          cursor:pointer;

        }
        .actions .amount{
          font-size:18px;
          width:50px;
         text-align:center;
         font-weight:bold;
         font-size:17px;
         
        
        }
        .actions .buyButton{
          background:linear-gradient(to top, green, yellowgreen); /*Geçişli renklendirmek için kullandık. yeşilden, sarıyeşile geçiş*/
          color:white;
          font-size:14px;
          font-weight:550;
          border-radius:0 10px 10px 0;
          
          
        }
        .actions .sellButton{
          background:linear-gradient(to top, green, yellowgreen);
          font-size:14px;
          color:white;
          font-weight:550;
          border-radius:10px 0 0 10px
          
        }
        .actions button[disabled] {  /*Butonlar disabled durumunda opacity yani şeffaflığını azalttık ve imlecin buton üzerindeki görünümünü dğeiştirdik.*/
          opacity:0.3;
          cursor:not-allowed;
        }
      

          `}
        
        </style>

        </div>
  );
}

export default Product //