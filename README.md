# currify

Modern and mini currify implementation

# Install

npm i currifyjs

# Usage

```javascript
function add(a, b, c) {
    return a + b + c;
};

var addCurr = currify(add);

console.log(addCurr(3)(2)(1))
```

# Support

Modern browsers, Babel or Node.js v7+