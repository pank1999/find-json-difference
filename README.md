# find-json-difference
Calculates the difference between two JSON objects.


```js
const {jsonDiff} = require('find-json-difference');
```

or 

```ts
import {jsonDiff} from "find-json-difference"
```

```js
const json1 = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

const json2 = {
    name: 'John Doe',
    age: 35,
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA'
    },
    occupation: 'Software Engineer'
};

const differences = jsonDiff(json1, json2);

console.log(differences);
/* output : {
  added: { occupation: 'Software Engineer' },
  deleted: {},
  edited: { age: [ 30, 35 ], address: [ [Object], [Object] ] }
}*/
```