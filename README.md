# healthcheck
[![Build Status](https://travis-ci.org/joonhocho/healthcheck-ok.svg?branch=master)](https://travis-ci.org/joonhocho/healthcheck-ok)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/healthcheck-ok/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/healthcheck-ok?branch=master)
[![npm version](https://badge.fury.io/js/healthcheck-ok.svg)](https://badge.fury.io/js/healthcheck-ok)
[![Dependency Status](https://david-dm.org/joonhocho/healthcheck-ok.svg)](https://david-dm.org/joonhocho/healthcheck-ok)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


A simple healthcheck middleware for express.js that simply sends OK (200).


### Install
```
npm install --save healthcheck-ok
```


### Usage
```javascript
import express from 'express';
import healthcheck from 'healthcheck-ok';

const app = express();

app.use('/healthcheck', healthcheck);
```


### Source
```javascript
(req, res) => {
  res.append('Cache-Control', 'no-cache, no-store, max-age=0');
  res.sendStatus(200);
}
```


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

