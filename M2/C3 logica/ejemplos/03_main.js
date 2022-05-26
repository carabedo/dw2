let temp = prompt('Cual es la temperatura?')    
console.log('el usuario ingreso:')
console.log(temp)
if (temp < 0) {


img='<img src="polar.jpg" alt="">'   
document.getElementById('imagen').innerHTML = img
      

} else if (temp < 15) {
    img='<img src="frio.jpg" alt="">'   
    document.getElementById('imagen').innerHTML = img
} else if (temp < 30 ) {
    img='<img src="templado.jpg" alt="">'   
    document.getElementById('imagen').innerHTML = img
} else if (temp < 40 ){
    img='<img src="calido.jpg" alt="">'   
    document.getElementById('imagen').innerHTML = img 
} else {
    img='<img src="horno.jpg" alt="">'   
    document.getElementById('imagen').innerHTML = img
}