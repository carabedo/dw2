let btn = document.getElementById('btn')

// click
btn.addEventListener('click', miFuncion)



function miFuncion(){
    console.log('se clickeo')
}





// mouseover
btn.addEventListener('mouseover', mifuncion2 )

function mifuncion2(){
    console.log('ojo!')
}



// mousemove
let h1 = document.getElementById('h1')

h1.addEventListener('mousemove', ()=>console.log('se mueve!'))