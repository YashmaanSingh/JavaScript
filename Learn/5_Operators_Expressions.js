// === it is used to compare the variable type 
// !== it tells it is not equal type 

/*
| Operator | Compares     | Coercion | Example               | Result  |
| -------- | ------------ | -------- | --------------------- | ------- |
| `==`     | Value only   | Yes      | `'5' == 5`            | `true`  |
| `===`    | Value & Type | No       | `'5' === 5`           | `false` |
| `===`    | Value & Type | No       | `'hello' === 'hello'` | `true`  |

*/

let a =  "grisha"
let b  = "grisha"

console.log(a==b)

let c = 45
let g = 52

console.log(c===g)