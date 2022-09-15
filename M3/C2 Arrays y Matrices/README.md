
# For



```js
for (inicio; condicion; final){
  bloque de codigo
}
``` 

Veamos un ejemplo, vamos a imprimir cada uno de los elementos del siguiente array de 4 maneras diferentes:

```js
array = ['arbol','hoja','salto']
```

Usando la definicion mas basica del loop for:

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

```js
array.forEach((v, i) => console.log(v))
```

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
