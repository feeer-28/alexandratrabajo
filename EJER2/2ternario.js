let calcularDescuento = (num) => {
    let result = (num>1000)?'el descuento es '+num*(20/100):(num>=500 && num<=1000)?'el descuento es '+num*(10/100) : (num<500)?'no se aplica descuento':'ingrese un valor valido'
    return result
}
console.log(calcularDescuento(600));
console.log(calcularDescuento(400));
console.log(calcularDescuento(6000));