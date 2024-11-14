let esBisiesto = (año) => {
    let result = (año%4===0 && (año%100!==0 || año%400===0))?"es bisiesto" : "no es bisiesto"
    return result
}
console.log(esBisiesto(1520));
console.log(esBisiesto(2020));
console.log(esBisiesto(2021));