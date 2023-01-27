//Bu kod, "moneyFormat" adlı bir işlev oluşturur. Bu işlev, bir parametre olarak verilen "money" değişkenini alır ve onu "toLocaleString()" methodu kullanarak yerelleştirilmiş bir metin şekline dönüştürür. Son olarak, işlev "moneyFormat" adı ile dışarı aktarılır. Bu işlev, para birimi formatına dönüştürür.
const moneyFormat = (money) => {
    return money.toLocaleString()
}
export{moneyFormat}