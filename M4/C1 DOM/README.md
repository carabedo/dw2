# DOM


Repasemos, podemos crear variables del tipo objeto: 

```js
usuario = { nombre : 'fernando' , apellido : 'carabedo', telefono : 1123234455 , saludar : ()=>console.log('hola soy fernando')}
```

Puedo acceder a valores o funciones, usando la notacion del punto.

```js
usuario.nombre
usuario.telefono
usuario.saludar
```

Existe una funcion `console.dir()` que me permite ver todos los atributos y metodos de un objeto.


## el DOM

El dom es un objeto de javascript que representa el HTML de nuestra pagina.

https://carabedo.github.io/test/dom

Cuando el navegador carga el HTML, genera automaticamente esta variable `document`.

Luego de cargar la pagina ejecutemos en consola:

```js
console.dir(document)
```

### querySelector

Uno de los metodos mas utiles del dom es el metodo `querySelector()`. Este metodo me permite seleccionar cualquier elemento HTML, en nuestra pagina vamos a practicar seleccionando el titulo de la etiqueta `h1`.

Como seleccionamos una etiqueta? De la misma manera que lo haciamos en CSS!

Probemos seleccionar:

- `

