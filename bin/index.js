#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const copyFile = (src, dist) => {
  fs.writeFileSync(dist, fs.readFileSync(src))
}

copyFile(path.resolve(__dirname, '../test.js'), './index.js')
