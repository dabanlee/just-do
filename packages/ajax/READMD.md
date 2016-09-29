## just-ajax

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
