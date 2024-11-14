function esElegibleParaPrestamo(salario,credito){
    let result = (salario>=30000 && credito>=650)?"elegible para prestamo" : "no elegible"
    return result
}
export{esElegibleParaPrestamo}