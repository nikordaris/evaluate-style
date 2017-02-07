var evaluateStyle = require('./dist/index.js').default;
var style = {a: 'asdf', foo: (data) => `${data}-bar`, b: {c: 'foo', d: (data) => `${data}`}};
var result = evaluateStyle(style, 'test');
console.log(result);
