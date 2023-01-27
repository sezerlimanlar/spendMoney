import React from 'react'
import { moneyFormat } from '../helper'

// Header componenti iki props alır: total ve money
function Header({total, money}) {
  return (

    <div className='header' >
      {/*Eğer total 0'dan büyükse ve money-total 0'dan farklı ise*/}
      {/*kullanıcının harcayabileceği kalan paranın miktarını gösteren bir mesaj göster*/}
      {total > 0 && money - total  !==0 && (
      <div className='header'>Harcayacak {moneyFormat(money-total)}₺ paranız kaldı!</div>
      )}
      {/*Eğer total 0 ise, kullanıcının harcama için sahip olduğu paranın miktarını gösteren bir
      mesaj göster*/}
      {total == 0 && (
      <div className='header'> Harcamak için {moneyFormat(money)}₺ paranız var!</div>
      )}
      {/*Eğer money - total 0 ise, kullanıcının paranın bittiğini gösteren bir mesaj göster*/}
      {money - total == 0 &&(
      <div className='header'>Paran bitti!</div>
      )}
       <style jsx>{`
       .header{
        position: sticky;
        top: 0;
        background:linear-gradient(to bottom, green, yellowgreen);
        height:70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        letter-spacing: 1px;
      }
       `}

       </style>
    </div>
  )
}

export default Header