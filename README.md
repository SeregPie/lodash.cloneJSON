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

### npm

```shell
npm install lodash.clonejson
```

### ES module

```javascript
import _ from 'lodash';
import 'lodash.clonejson';
```

### Node

```javascript
const _ = require('lodash');
require('lodash.clonejson');
```

### browser

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
