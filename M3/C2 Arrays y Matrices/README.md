
# For



```js
for (inicio; condicion; final){
  bloque de codigo
}
``` 


array = ['arbol','hoja','salto']


```js
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}
```

## for ... of


```js
for (elemento of array) {
  console.log(elemento)
}
```

## for ... in

```js
for (let i in array) {
  console.log(array[i]);
}
```

## .forEach()

array.forEach((v, i) => console.log(v))
  
# Matrices 

```js
fila1 = [2,4,6]
fila2 = [3,5,7]
```

Puedo armar una matriz, es decir un array de filas:


```js
matriz = [ fila1,fila2]

```

O puedo hacerlo directamente:

```js
matriz2= [ [ 9,11,13 ] , [10,12,14]]
```
