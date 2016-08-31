## just-get-query

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
