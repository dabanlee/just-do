## just-camelize

transform strings to camel case.

```js
import camelize from 'just-camelize';

camelize('_hello_world'); // HelloWorld
camelize('_hello-world'); // HelloWorld
camelize('-hello_world'); // HelloWorld
camelize('-hello-world'); // HelloWorld
```
