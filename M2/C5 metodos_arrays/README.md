# Semana 5 (for)

## Objetivos:

- Método slice
- Método join
- Método split
- For loop (variable i,j,k)
- for of
- for in
- map,filter & reduce

## Ejercicio:

```
https://7pyngmccwa.execute-api.us-east-1.amazonaws.com/default/apitest?q=aceite&n=50
``` 

Juguemos con este array, la idea es iterar por cada lugar de esta lista y sacar los nombres de los articulos en un segundo array: nombres.


Con esos nombres vamos generar una `<ul>` con cada item en un `<li>`. 
 
Armemos un tercer array: items, que agreguen el tag `<li>` nombre `</li>`

Luego a esta lista de items, agregar al principio y al final el tag `<ul>` y `</ul>`
  
Por ultimo generar el codigo html de esta tabla y meterla en el body de una pagina con:
  
```
document.body.innerHTML = stringdelhtml
```
