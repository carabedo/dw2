```js
url='https://pokeapi.co/api/v2/pokemon/ditto'
fetch(url).then(x=>console.log(x.json()))
```

```js
let resultado
fetch(url).then(x=>x.json()).then(z=>resultado=z)
```
