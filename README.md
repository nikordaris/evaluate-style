Evaluate Style
--------------
Evaluates dynamic inline styles by passing data arguments to all defined functions.

## Status

[![license - MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![BuildStatus](https://secure.travis-ci.org/nharris85/evaluate-style.png?branch=master)](http://travis-ci.org/nharris85/evaluate-style)

[![NPM status](https://nodei.co/npm/evaluate-style.png?downloads=true&stars=true)](https://www.npmjs.com/package/evaluate-style)

[![Dependency Status](https://david-dm.org/nharris85/evaluate-style.svg)](https://david-dm.org/nharris85/evaluate-style)
[![devDependency Status](https://david-dm.org/nharris85/evaluate-style/dev-status.svg)](https://david-dm.org/nharris85/evaluate-style#info=devDependencies)

## Installation

```bash
npm install acl-arangodb
```

## Usage

**ES6**
```js
import evaluateStyle from 'evaluate-style';

const dynamicStyle = {foo: 'bar', bar: (data) => `${data.foobar}`};
const style = evaluateStyle(dynamicStyle, {foobar: 'test'});
```

**CommonJS**
```js
var evaluateStyle = require('evaluate-style').default;

var dynamicStyle = {foo: 'bar', bar: (data) => `${data.foobar}`};
var style = evaluateStyle(dynamicStyle, {foobar: 'test'});
```
