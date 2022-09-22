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

## Anonimas


```javascript
(anioNacimiento)==>{
console.log('Tenes: '+ 2022-anioNacimiento + ' años.')
}
```
