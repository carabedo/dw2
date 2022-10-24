let btn = document.getElementById('btn')

btn.addEventListener('click', miFuncion)

function miFuncion(){
    console.log('click!')
}


btn.addEventListener('mouseover', function(){
    console.log('ojo!')
})

let h1 = document.getElementById('h1')
h1.addEventListener('mousemove', ()=>console.log('se mueve!'))