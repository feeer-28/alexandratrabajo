let enRango = (num) => {
    let result = (num>=10 & num<=50 )? "esta en el rango" : "no esta en el rango"
    return result
}
console.log(enRango(9));
console.log(enRango(40));
console.log(enRango(60));