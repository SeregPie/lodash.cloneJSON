# lodash.cloneJSON

`_.cloneJSON(value)`

Converts a JavaScript value to a JSON string and then parses it back to a JavaScript value. This function is a shortcut for `JSON.parse(JSON.stringify(value))`.

| argument | description |
| ---: | :--- |
| `value` | The value to clone. |

Returns the cloned value.

## dependencies

- [lodash](https://github.com/lodash/lodash)

## usage

```javascript
let array = [{a: 11}, {b: 22}];
let arrayCopy = _.cloneJSON(array);
console.log(array[1] === arrayCopy[1]); // => false
```

## Node.js

The [package](https://www.npmjs.com/package/lodash.clonejson) can be installed via npm and used as a Node.js module.

```javascript
const _ = require('lodash');
require('lodash.clonejson');
```