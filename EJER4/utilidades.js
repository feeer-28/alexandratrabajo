function nivelRiesgo (edad,enfermedad){
    let result = (edad > 60 || enfermedad)? "alto riesgo" : (edad >= 40 && edad <= 60 && enfermedad)? "riesgo moderado" : (edad > 1 && edad<=39)?"bajo riesgo" : ""
    return result
}
export {nivelRiesgo}