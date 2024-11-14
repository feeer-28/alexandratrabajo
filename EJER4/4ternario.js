let nivelRiesgo = (edad, enfermedad) => {
    let result = (edad > 60 || enfermedad)? "alto riesgo" : (edad >= 40 && edad <= 60 && enfermedad)? "riesgo moderado" : (edad > 1 && edad<=39)?"bajo riesgo" : ""
    return result
}
console.log(nivelRiesgo(70,true));
console.log(nivelRiesgo(40,true));
console.log(nivelRiesgo(20));