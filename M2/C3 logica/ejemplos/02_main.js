let temp = prompt('Cual es la temperatura?')    
console.log('el usuario ingreso:')
console.log(temp)

if (temp < 0) {
console.log('polar')
} else if (temp < 15) {
    console.log('frio')
} else if (temp < 30 ) {
    console.log('templado')
} else if (temp < 40 ){
    console.log('calido')
} else {
    console.log('horno')
}
