function categoriaIMC (peso){
    let result = (peso<18.5)?'bajo peso':(peso>18.5 && peso<=24.9)?'normal' : (peso>=25 && peso<=29.9)?'sobrepeso' : 'invalido'
    return result
}
export {categoriaIMC}