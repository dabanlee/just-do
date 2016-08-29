## just-find

find key or value in object.

```js
import find from 'just-find';

let object = {
    hello: 'hello',
    onClick: 'onClick',
    onTouch: 'onTouch',
    just: null,
    a: 0,
    b: 5,
    c: 7,
    d: 6,
    e: 8,
};

find(object, function (key, value) {
    return key === 'hello';
}); // { hello: 'hello', }

find(object, function (key, value) {
    return typeof value === 'number';
}); // { a: 0, b: 5, c: 7, d: 6, e: 8, }

find(object, function (key, value) {
    return key.slice(0, 2) === 'on';
}); // { onClick: 'onClick', onTouch: 'onTouch', }

find(object, function (key, value) {
    return value > 0 && value < 8;
}); // { b: 5, c: 7, d: 6, }
```
