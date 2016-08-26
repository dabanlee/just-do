# Just - Just do one thing.

[![browser support](https://ci.testling.com/justclear/just.png)](https://ci.testling.com/justclear/just)

## Emoji Commit

Commit Type             | Emoji
----------------------- | -------------
Initial Commit          | :tada: `:tada:`
Structure               | :art: `:art:`
Documentation           | :memo: `:memo:`
New Idea                | :bulb: `:bulb:`
New Feature             | :sparkles: `:sparkles:`
Bug                     | :bug: `:bug:`
Version Tag             | :bookmark: `:bookmark:`
Performance             | :racehorse: `:racehorse:`
Tooling                 | :wrench: `:wrench:`
Tests                   | :rotating_light: `:rotating_light:`
Deprecation             | :poop: `:poop:`
Work In Progress (WIP)  | :construction: `:construction:`
Upgrading               | :arrow_up: `:arrow_up:`

Example:

> ":tada: Initial Commit"

## Packages

- <a href="#just-type">just-type</a>
- <a href="#just-camelize">just-camelize</a>
- <a href="#just-extend-it">just-extend-it</a>

## Usage

<a name="just-type"></a>
### [just-type](https://github.com/JustClear/just/tree/master/packages/type)

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
## [just-camelize](https://github.com/JustClear/just/tree/master/packages/camelize)

transform strings to camel case.

```js
import camelize from 'just-camelize';

camelize('_hello_world'); // HelloWorld
camelize('_hello-world'); // HelloWorld
camelize('-hello_world'); // HelloWorld
camelize('-hello-world'); // HelloWorld
```

<a name="just-extend-it"></a>
## [just-extend-it](https://github.com/JustClear/just/tree/master/packages/extend-it)

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
