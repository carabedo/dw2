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


## objeto Document

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

- el tag `h1`
- el tag div del header
- el tag con id `sidebar`

## objeto Element (elemento)

Miremos ahora solo el elemento h1:

```js
h1=document.querySelector('h1')
```

Miremos que atributos y metodos tenemos:

```js
console.dir(h1)
```
Estudiemos los siguientes atributos/metodos:


- innerHTML
- innerText
- setAttribute
- getAttribute
- classList
- style

### innerHTML, innerText

Este atributo nos permite visualizar el codigo HTML contenido en el elemento. Como ejemplo veamos el contenido del div con id test:

```js
div=document.querySelector('#test')
```

Veamos el html:

```js
div.innerHTML
```
```
'\n\n        Esto son <strong>negritas</strong> y aca dejo un      por las dudas. <code>Si.</code>!\n        '
```
Veamos solo el texto:

```js
div.innerText
```
```
'Esto son negritas y aca dejo un por las dudas. Si.!'
```




### set/get atributos

Vamos a visualizar la url de la imagen original:

```js
img=document.querySelector('img')
img.getAttribute('src')
```

Ahora podemos modificar esto:

```js
img.setAttribute('src','nuevaimagen.jpg')
```

### classList

Sirve para agregar, remover clases de un tag.

Probemos agregar, togglear y remover una clase nueva al tag h1:


```js
h1.classList.add('fondorojo')
h1.classList.toggle('fondorojo')
h1.classList.remove('fondorojo')
```


### style

Por ultimo veamos como podemos modificar el CSS del elemento:

Seleccionemos el footer, para esto seleccionamos la clase footer:

```js
foot=document.querySelector('.footer')
```

Ahora miremos el atributo style de este elemento:
```js
foot.style
```
Vemos una lista interminable de propiedades de CSS, modifiquemos una, vamos a setear al `background-color` a `cyan`:

```js
foot.style.backgroundColor='cyan'
```

