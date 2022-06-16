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

https://javascript.info/array

`let arr = []`


# Arrays, cajasMisteriosas pero ordenadas!

Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.

Pero a menudo necesitamos una colección ordenada, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.

No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.

Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

## Indice

`array.at(0)`

`array[9]`

## Length

`array.lenght`

## push

Agrega elementos al final del array.

## pop

Elimina el último elemento del array.

## shift
Elimina elementos al principio del array y devuelve el elemento eliminado


## unshift
Agrega elementos al principio del array y no devuelve nada


## indexof

Solo devuelve la primera coincidencia.

## lastIndexOf

Solo devuelve la ultima coincidencia.

## splice

El método arr.splice funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.

La sintaxis es:

`array.splice(desdeDonde, deleteCount,reemplazarCon)`

------

## Preguntas:

### 1. Definimos el siguiente Array:

```javascript
miArray=['HOLA!' ,function(){console.log('hola?')}, 334 , 45,[],]
```

¿Qué veremos en pantalla si ejecutamos la siguiente línea?

`miArray[1]()`

Y por que?

### 2. Si quiero acceder al último lugar de un array, tengo que ejecutar:
Elija al menos una respuesta correcta.

+ `miArray[-1]`
+ `miArray.at(-1)`

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

* `miArray.splice(2,1,b)`

* `miArray.pop() miArray.push(b)`

* `miArray.pop().push(b)`

* `miArray.pop();miArray.push(b)`

* `miArray.pop(b).push()`

### 6 Que hace el metodo `.forEach()`

`miArray=['Manaos','Pitucas','Krachitos']`
