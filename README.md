# lodash.cloneJSON

`_.cloneJSON(value)`

Converts a JavaScript value to a JSON string and then parses it back to a JavaScript value. This function is a shortcut for `JSON.parse(JSON.stringify(value))`.

| argument | description |
| ---: | :--- |
| `value` | The value to clone. |

Returns the cloned value.

## dependencies

- [lodash](https://github.com/lodash/lodash)

## setup

Install the [package](https://www.npmjs.com/package/lodash.clonejson) via npm.

```sh

npm install lodash.clonejson

```

Import the module into your Node.js project.

```javascript
const _ = require('lodash');
require('lodash.clonejson');
```

---

Include the code in your page via a CDN.

```html

<script src="https://unpkg.com/lodash"></script>
<script src="https://unpkg.com/lodash.clonejson"></script>

```

## usage

```javascript
let array = [{a: 11}, {b: 22}];
let arrayCopy = _.cloneJSON(array);
console.log(array[1] === arrayCopy[1]); // => false
```
