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

```js
document.getElementsByClassName
```
