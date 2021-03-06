# @naxmefy/env

[![npm version](https://badge.fury.io/js/%40naxmefy%2Fenv.svg)](https://badge.fury.io/js/%40naxmefy%2Fenv)
![required node version](https://img.shields.io/badge/node-%3E%3D%206.x-green.svg)

[![Build Status](https://travis-ci.org/naxmefy/node-env.svg?branch=master)](https://travis-ci.org/naxmefy/node-env)
[![Coverage Status](https://coveralls.io/repos/github/naxmefy/node-env/badge.svg?branch=master)](https://coveralls.io/github/naxmefy/node-env?branch=master)

> **Type declarations included**

## Installation

```
$ npm install --save @naxmefy/env
```

## Usage

```TypeScript
import env from '@naxmefy/env'
const NodeEnv: string = env('NODE_ENV', 'development')
const aNumber: number = env('A_NUMBER', '10', Number)
const hello: string = env('USERNAME', 'John', v => `Hello ${v}!`)
```

### glob method

```TypeScript
import {glob} from '@naxmefy/env'

// e.g.:
interface IDBVars {
  DB_URL?: string
  DB_USER?: string
}

// load vars
const dbVars = glob('DB_*') as IDBVars

// e.g.:
console.log(dbVars.DB_URL)
console.log(dbVars.DB_USER)
```

## Support for Node.js <= 4

Use Versions 1.x.x

## Support for Node.js 5.x

Use Versions 2.x.x
