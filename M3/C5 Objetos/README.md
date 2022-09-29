# Objetos
Empecemos a jugar con estructuras de datos un poco mas complejas:

## JSON

https://dummyjson.com

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]
```

https://jsoncrack.com/

## Fetch

```js
fetch('https://dummyjson.com/products/')
.then(repuesta => respuesta.json())
.then(json => productos = json)
```

# Ejericios:

## JSON

Iterar el json e imprimir cada nombre de usuario y la ciudad en la que viven.


## DOM

### Ejercicio 1:


https://carabedo.github.io/test/lista_css

Usemos el metodo `.getElementsByClassName()` para seleccionar el div que contiene la lista de las bebidas, imprimir en consola las bebidas.

# Entrega:

## Opcion 1:

Incorporar en el proyecto del modulo anterior los conceptos nuevos que vimos en este modulo.
    
## Opcion 2:

Genere una pagina nueva usando HTML y CSS, maquete una grilla, asigne a cada elemento de una grilla un ID. Luego utilizando un JSON como este: 

```json
{"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/682896/Jugo-Ades-Soja-Manzana-1-Lt-1-17840.jpg?v=637764969806700000", "name": "Ades Soja + Jugo De Manzana 1 L", "price": 239.0}, {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/643143/Exquisita-Bizc-Chocolate-Ldg-12x450g-1-861744.jpg?v=637564728573800000", "name": "Exquisita Bizcochuelo Chocolate 450 Gr", "price": 519.0}, {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/603275/Bizcochuelo-Exquisita-1-Min-Choc-X55g-1-853761.jpg?v=637358665317730000", "name": "Exquisita 1 Minuto De Chocolate X55 Gr", "price": 169.0}, {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/650817/Chocolate-Loacker-Chocolate-Creme-87gr-1-863534.jpg?v=637595826966530000", "name": "Chocolate Loacker Chocolate Creme 87gr", "price": 692.0}, {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/712985/Chocolate-Chocolate-Colonial-Negro-70cacao-100-1-892562.jpg?v=637947715242530000", "name": "Chocolate Chocolate Colonial Negro 70cacao 100", "price": 437.87}
```


Con informacion que le parezca interesante agregue en cada elemento de la grilla algo diferente.
