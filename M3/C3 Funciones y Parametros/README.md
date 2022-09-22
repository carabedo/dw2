# Funciones


<img src='https://scausey.github.io/assets/images/toasterFunctionDiagram.jpg' width=500>

Armemos una maquina que reciba nuestro año de nacimiento y devuelva nuestra edad!

```javascript
function calculoEdad(anioNacimiento) {
return 2022-anioNacimiento
}
```


![](https://github.com/carabedo/dw2/raw/main/M2/C3%20logica/f.png)




Podemos hacerla un poquito mas compleja:

```javascript
function calculoEdad(anioNacimiento) {
let edad = 2022-anioNacimiento
console.log('Tenes: '+ edad + ' años.')
return 
}
```

Hace falta el return?:

```javascript
function calculoEdad(anioNacimiento) {
let edad = 2022-anioNacimiento
console.log('Tenes: '+ edad + ' años.')
}
```


## Declaradas

```javascript
function calculoEdad(anioNacimiento) {
let edad = 2022-anioNacimiento
console.log('Tenes: '+ edad + ' años.')
}
```

## Anonimas/Arrow/Flecha


```javascript
anioNacimiento => console.log(2022-anioNacimiento)
```

```js
lista = [ 1989,2002,2010 ]
lista.forEach(x=>console.log(2022-x))
```

## Les puedo poner nombre:

```javascript
calcAnio = anioNacimiento => console.log(2022-anioNacimiento)
```

```js
lista = [ 1989,2002,2010 ]
lista.forEach(calcAnio)
```

# Map 

Un metodo que tienen todas los arrays. Este metodo es muy util por que me devuelve OTRO ARRAY a l cual se le aplico la funcion argumento del map a todos los elementos del array original.

MAPEA una funcion a los elementos de una lista!

```js
lista.map(x=>2022-x)
```


# Filter

Otro metodo muy util de los arrays. Como su nombre lo indica permite filtrar elementos de un array. Como funciona? Bueno como argumento recibe una funcion, esta funcion va ir siendo ejecutada en todos los elementos del array. Esta funcion debe estar construida de manera de que devuelva un true o un false, los elementos que devuelvan true pasaran el filtro!

```js
lista.filter( x => (2022-x)>18 )
```
