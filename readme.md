# hashpass-core

A lightweight implementation of the [boyers/hashpass](https://github.com/boyers/hashpass) password generator.

[![Build status](https://travis-ci.org/michaelrhodes/hashpass-core.svg?branch=master)](https://travis-ci.org/michaelrhodes/hashpass-core)

## Install

```sh
$ npm install hashpass-core
```

## Usage

```js
var hashpass = require('hashpass-core')

var domain = 'github.com'
var key = 'mysecretkey'
var pass = hashpass(domain, key)

console.log(pass)
=> 'IKyjrP/CCKfu6MD4'
```

## License

MIT
