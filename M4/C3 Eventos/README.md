# Eventos

Un evento es una señal de que algo ocurrió. Todos los nodos/elementos del DOM generan dichas señales.

Aquí hay una lista con los eventos del DOM más utilizados, solo para echar un vistazo:

### Eventos del mouse:

- click – cuando el mouse hace click sobre un elemento (los dispositivos touch lo generan con un toque).
- contextmenu – cuando el mouse hace click derecho sobre un elemento.
- mouseover / mouseout – cuando el cursor del mouse ingresa/abandona un elemento.
- mousedown / mouseup – cuando el botón del mouse es presionado/soltado sobre un elemento.
- mousemove – cuando el mouse se mueve.

### Eventos del teclado:

- keydown / keyup – cuando se presiona/suelta una tecla.

### Eventos de formularios:

- submit – cuando el visitante envía un `<form>`.
- focus – cuando el visitante se centra sobre un elemento, por ejemplo un `<input>`.

### Eventos del documento:

- DOMContentLoaded --cuando el HTML es cargado y procesado, el DOM está completamente construido

### Eventos del CSS:

- transitionend – cuando una animación CSS concluye.

---
## EventListener:

`elemento.addEventListener('click', function(){})`

- Selecciono el elemento al cual le vamos a asignar el evento.
- Agregamos al elemento el evento suando `addEventListener`.
- Dentro la funcion asigno el codigo que quiero que se ejecute con el evento.

### Ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Prueba de eventos.</h1>
    <div>
        <button id="btn">Clickeame!</button>
    </div>
<script src="main.js"></script>
</body>
</html>
```

Primero selecionamos el boton:

```js
let btn = document.getElementById('btn')
``` 

Ahora al elemento `btn` le asociamos una funcion cuando el evento `click` suceda.

```js
btn.addEventListener('click', miFuncion)
```

En este caso, cuando se presione el boton `btn` se ejecutara la funcion `miFuncion`:

La cual podemos definir asi:

```js
function miFuncion(){
    console.log('click!')
}
```

### Mas Eventos del mouse:

- mouseover: Cuando el puntero pasa por arriba del elemento.

```js
btn.addEventListener('mouseover', function(){
    console.log('ojo!')
})
```

- mousemove: Cuando el puntero se mueve dentro del elemento.

```js
let h1 = document.getElementById('h1')
h1.addEventListener('mousemove', ()=>console.log('se mueve!'))
```
