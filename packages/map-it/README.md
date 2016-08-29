## just-map-it

map object.

```js
import map from 'just-map-it';

let object = {
    a: 0,
    b: 5,
    c: 7,
    d: 6,
    e: 8,
};

map(object, function (key, value) {
    return value * value;
}); // { a: 0, b: 25, c: 49, d: 36, e: 64, }
```
