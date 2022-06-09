# Semana 3 (Condicionales 2)

## Objetivos

- Reforzar conocimientos en el uso de condicionales.
- Conocer el patrón de fallback con el else.
- Aplicar el uso y conocer el alcance y posibilidades al desarrollar if,else anidados.
- Conocer el uso del objeto Math y su implicancia en diversas operaciones de programación (acceder a elementos, números aleatorios, redondeos, etc)

## Operador === y ==

```javascript
1 == true
1 === true
```

## Operadores && y || 

Me sirven para combinar condiciones.

## if else

Agrego una segunda opcion a mis condiciones!

# Ejercicio

Hagamos una pagina que pregunte la temperatura y muestre una imagen para temperaturas menores a 15º y otra para tempreaturas mayores.

Frio:

<img src='ejemplos/polar.jpg' width=500> 



Calor:

<img src='ejemplos/calido.jpg' width=500> 



## Funciones:

<img src='https://scausey.github.io/assets/images/toasterFunctionDiagram.jpg' width=500>

Armemos una maquina que reciba nuestro año de nacimiento y devuelva nuestra edad!

```javascript
function calculoEdad(anioNacimiento) {
return 2022-anioNacimiento
}
```


![](f.png)





Podemos hacerla un poquito mas compleja:

```javascript
function calculoEdad(anioNacimiento) {
let edad = 2022-anioNacimiento
console.log('Tenes: '+ edad + ' años.')
return 
}
```


## Tipo de datos: 

Vimos numeros, strings y booleanos y ahora vemos
el cuarto tipo...los objetos!

![](https://http2.mlstatic.com/D_NQ_NP_881520-MLA43683157972_102020-O.webp)

```javascript
let cajamisteriosa
cajoneramisteriosa = { cajon1 : 23 , cajon2 : 'hola', cajon3 : false , cajon4 : calculoEdad} 
```


## Objeto Math:

Una cajonear (objeto) con valores y funciones matematicas super utiles!

```javascript
Math.PI
Math.round(3.14159)
Math.sqrt(25)
```
