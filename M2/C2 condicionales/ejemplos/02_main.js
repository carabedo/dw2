let temp = prompt('Cual es la temperatura?')    
console.log('el usuario ingreso:')
console.log(temp)
if (temp < 15) {

console.log('esta fresco')

divImagen=document.getElementById('imagen')
divImagen.innerHTML = '<img src="polar.jpg" alt="">'

} else {

divImagen=document.getElementById('imagen')
divImagen.innerHTML = '<img src="calido.jpg" alt="">'
console.log('esta lindo')

}
