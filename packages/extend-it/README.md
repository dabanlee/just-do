## just-extend

objects extend.

```js
import extend from 'just-extend-it';

var source = {
    just: 'just',
};

extend(source); // { just: 'just', }
extend(source, { hello: 'hello', }); // { just: 'just', hello: 'hello', }
extend(source, { hello: 'hello', }, { world: 'world', }); // { just: 'just', hello: 'hello', world: 'world', }
extend(true, source, { hello: 'hello', }); // { just: 'just', hello: 'hello', }
extend(true, source, { hello: { world: 'world', }, }); // { just: 'just', hello: { world: 'world', }, }
extend(true, source, { hello: { world: 'world', }, { hello: { hi: 'hi', }, });// { just: 'just', hello: { world: 'world', hi: 'hi', }, }
extend(source, { hello: { world: 'world', }, }, { hello: { hi: 'hi', }, }); // { just: 'just', hello: { hi: 'hi', }, }
```
