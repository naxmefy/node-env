# @naxmefy/env

[![npm version](https://badge.fury.io/js/%40naxmefy%2Fenv.svg)](https://badge.fury.io/js/%40naxmefy%2Fenv)
![required node version](https://img.shields.io/badge/node-%3E%3D%204.2.x-green.svg)

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
```

## Support for Node.js <= 4

Use Versions <= 2.x.x
