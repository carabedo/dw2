# Semana 4 (arrays)

## Objetivos

- Conocer los arrays y su uso.
- Acceder a distintos elementos dentro de un array.
- Visualizar situaciones reales que resuelven problemáticas con el uso necesario de arrays.
- Índice
- Length
- Métodos push y pop
- Métodos shift y unshift
- Método indexOf

## Ejercicios:

Ir a la pagina12, usar el metodo `getElementsByClass` para buscar todos los articulos.


## Preguntas:

### 1. Definimos el siguiente Array:

`miArray=['HOLA!' ,function(){console.log('hola?')}, 334 , 45,[],]`

¿Qué veremos en pantalla si ejecutamos la siguiente línea?

`miArray[1]()`

Y por que?

### 2. Si quiero acceder al último lugar de un array, tengo que ejecutar:
Elija al menos una respuesta correcta.

+ Respuesta 1
+ miArray[-1]
+ Respuesta 2
+ miArray.at(-1)

### 3. Podemos pensar una matriz como una lista de filas, en JavaScript como un array de arrays:

`matriz= [  ['00','01','02'] , ['10','11','12'] , ['20','21','22']  ]`


¿Cómo podemos acceder al tercer carácter en la segunda fila?

### 4. ¿Cual es la longitud de miArray si ejecutamos las siguientes líneas para borrar el segundo elemento?

```javascript
miArray=['Manaos','Pitucas','Krachitos']
delete miArray[1]
miArray.length
```

### 5. Queremos armar el siguiente array:

`['me','gusta','javascript']`

a partir de:

```javascript
miArray =['me','gusta','CSS']
b='javascript'
```

¿Cómo lo hago? Elija todas las las respuestas correctas.

Respuesta 1

`miArray.splice(2,1,b)`

Respuesta 2

`miArray.pop() miArray.push(b)`

Respuesta 3

`miArray.pop().push(b)`

Respuesta 4

`miArray.pop();miArray.push(b)`

Respuesta 5

`miArray.pop(b).push()`


