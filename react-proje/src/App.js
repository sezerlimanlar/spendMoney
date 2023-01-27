import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json';
import Basket from './components/Basket';

// App Componenti oluşturduk. Genel işlemleri bu component üzerinden yapıyoruz.
function App() {
  //Başlangıç değerleri girilen probslar
  const [money, setMoney] = useState(1000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  //Sepeti Sıfırlamamızı sağlayan metotumuz.
  const resetBasket = () => {
    setBasket([]);
  }
 
  /* useEffect, componentin ilk render edildiğinde veya bazı değişkenlerin değerleri değiştiğinde
   çalışacak bir fonksiyonu alır. Toplamı güncellediğimiz fonksiyonu çağırıp içinde reduce metoduyla
   tüm elemanları dolaşıyoruz. acc toplam her döndüğünde toplamın üzerine ekletmemizi sağlıyor. acc art, sepet içindeki
   eleman sayısı çarpı, sepet elemanı ile ürünler elemanının idlerinin aynı olup olmadığını kontrol ettirerek alınan fiyat.
  [basket], sepet değiştiğinde çalışır ve toplam fiyat değişir.
  */
  useEffect(() => {
setTotal(
  basket.reduce((acc,item)=>  {
  return acc + (item.amount*(products.find(product => product.id === item.id).price))
  },0),
)
}, [basket])
  
    
  
  return (
    <div>
      {/*Header componentini çağırıp, probslarını gönderiyoruz. */}
      <Header total={total} money={money} />
      <div className="container products">
        {/*Product dizisi içindeki her bir ürünü döndürüp Product componentini çağırıyoruz */}
      {products.map(product => (
        <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
      ))}
      </div>
      {/*total değeri sıfırdan büyük olduğu sürece Basket componentini çağırıyoruz */}
      {total>0 && (
      <Basket resetBasket={resetBasket} products={products} basket={basket} total={total}/>
      )}
    </div>
  );
}

export default App;