# Repaso:

## Arrays

```js
lista = [1,23,2]
```

## if

```js
if (lista.length <4 ){
console.log('el array tiene menos de 4 elementos')}
else {console.log('el array tiene mas de 4 elementos')
}
```

## for

```js
for (x in lista){
console.log(x)
}
```

```js
for (x of lista){
console.log(x)
}
```

## Funciones


### Declaradas

```js
function esmayoracuatro(x){
  if (x>4){
  console.log('es mayor a 4')
  }
  else {
  console.log('es menor a 4')
  }
}
```

### Scope (alcance)

Una variable definida dentro de una funcion, solo existe dentro de la funcion.

```js
// aca no existe la variable color
function unaFuncion() {
  let color = "Rojo";
  // aca existe la variable color
  console.log(color)
}
// aca no existe la variable color
```
Una variable definida de manera global (no adentro de una funcion o un bloque)  existe dentro de las funciones.

```js
// aca no existe la variable color
let color = "Rojo"
// aca existe la variable color
function unaFuncion() {
  // aca existe la variable color
  console.log(color)
}
// aca existe la variable color
```
### Anonimas (una manera rapida de escribir funciones)

```js
lista.forEach(x=>console.log(x))
```


## Metodos

```js
lista.forEach(esmayoracuatro)
```

## Objetos


Vimos numeros, strings y booleanos. Despues aprendimos a usar `arrays` para organizar nuestros datos

Por ultimo veamos objetos!

![](https://http2.mlstatic.com/D_NQ_NP_881520-MLA43683157972_102020-O.webp)

```javascript
let cajamisteriosa
cajoneramisteriosa = { cajon1 : 23 , cajon2 : 'hola', cajon3 : false , cajon4 : esmayoracuatro} 
```


## Objeto Math:

Una cajonera (objeto) con valores y funciones matematicas super utiles!

```javascript
Math.PI
Math.round(3.14159)
Math.sqrt(25)
```

## Objeto Console:

Una cajonera  con valores y funciones para manipular la consola!

```javascript
console.clear()
console.log('hola mundo')
```

### DOM

Una cajonera (objeto) con valores y funciones para manipular nuestro documento HTML!

![](https://www.w3schools.com/js/pic_htmltree.gif)

Podemos seleccionar elementos HTML usando la clase:

```js
document.getElementsByClassName
```
Podemos seleccionar elementos HTML usando la ruta de CSS:

```js
document.querySelector('#readme > article > div:nth-child(35) > pre')
```

Una vez que ubicamos el elemento que queremos manipular, lo asignamos a una variable y usamos el metodo o atributo que nos interese.

```js
cajita=document.querySelector('#readme > article > div:nth-child(35) > pre')
cajita.innerHTML='HOLA!!! ESTOY HACKEANDO LA PAGINA!!!"
```
