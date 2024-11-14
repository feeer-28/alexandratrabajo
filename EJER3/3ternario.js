let categoriaIMC = (peso) => {
    let result = (peso<18.5)?'bajo peso':(peso>18.5 && peso<=24.9)?'normal' : (peso>=25 && peso<=29.9)?'sobrepeso' : 'invalido'
    return result
}
console.log(categoriaIMC(20.0));
console.log(categoriaIMC(17.5));
console.log(categoriaIMC(30.0));