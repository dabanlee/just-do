# Just - Just do one thing.

## Packages

- <a href="#just-type">just-type</a>
- <a href="#just-camelize">just-camelize</a>
- <a href="#just-extend-it">just-extend-it</a>
- <a href="#just-find">just-find</a>
- <a href="#just-map-it">just-map-it</a>
- <a href="#just-get-query">just-get-query</a>
- <a href="#just-ajax">just-ajax</a>

## Usage

<a name="just-type"></a>
### [just-type](https://github.com/JustClear/just-do/tree/master/packages/type)

type checking.

```js
import type from 'just-type';

function hello() {
    console.log('hello type');
}

type(); // undefined
type(undefined); // undefined
type(null); // null
type(''); // string
type('hello'); // string
type(0); // number
type(true); // boolean
type({}); // object
type([]); // array
type(hello); // function
type(/\./); // regexp
```

<a name="just-camelize"></a>
### [just-camelize](https://github.com/JustClear/just-do/tree/master/packages/camelize)

transform strings to camel case.

```js
import camelize from 'just-camelize';

camelize('_hello_world'); // HelloWorld
camelize('_hello-world'); // HelloWorld
camelize('-hello_world'); // HelloWorld
camelize('-hello-world'); // HelloWorld
```

<a name="just-extend-it"></a>
### [just-extend-it](https://github.com/JustClear/just-do/tree/master/packages/extend-it)

objects extend.

```js
import extend from 'just-extend-it';

let source = {
    just: 'just',
};

extend(source); // { just: 'just', }

extend(source, {
    hello: 'hello',
}); // { just: 'just', hello: 'hello', }

extend(source, {
    hello: 'hello',
}, {
    world: 'world',
}); // { just: 'just', hello: 'hello', world: 'world', }

extend(true, source, {
    hello: 'hello',
}); // { just: 'just', hello: 'hello', }

extend(true, source, {
    hello: {
        world: 'world',
    },
}); // { just: 'just', hello: { world: 'world', }, }

extend(true, source, {
    hello: {
        world: 'world',
    }, {
        hello: {
            hi: 'hi',
        },
    },
});// { just: 'just', hello: { world: 'world', hi: 'hi', }, }

extend(source, {
    hello: {
        world: 'world',
    },
}, {
    hello: {
        hi: 'hi',
    },
}); // { just: 'just', hello: { hi: 'hi', }, }
```

<a name="just-find"></a>
### [just-find](https://github.com/JustClear/just-do/tree/master/packages/find)

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

<a name="just-map-it"></a>
### [just-map-it](https://github.com/JustClear/just-do/tree/master/packages/map-it)

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

<a name="just-get-query"></a>
### [just-get-query](https://github.com/JustClear/just-do/tree/master/packages/get-query)

get url query.

```js
import getQuery from 'just-get-query';

let search = location.search; // https://just-do.io?hello=hello&world=world

// null
getQuery('hello')
getQuery('hello', '')
getQuery('just', search)
getQuery('just', '?' + search)
getQuery('just', '??' + search)

// hello
getQuery('hello', search)
getQuery('hello', '?' + search)
getQuery('hello', '??' + search)

// world
getQuery('world', search)
getQuery('world', '?' + search)
getQuery('world', '??' + search)
```

<a name="just-ajax"></a>
### just-ajax

ajax request.

```js
import ajax from 'just-ajax';

ajax({
    url: 'http://api.hello.com/',
    type: 'POST',
    data: {
        username: 'hello',
        password: 'world',
    },
    success: function (response) {
        console.log(response);
    },
    error: function (error) {
        console.log(error);
    },
});
```
