let esElegibleParaPrestamo = (salario,credito) => {
    let result = (salario>=30000 && credito>=650)?"elegible para prestamo" : "no elegible"
    return result
}
console.log(esElegibleParaPrestamo(35000,700));
console.log(esElegibleParaPrestamo(3000,70));
