'use strict';

var ghpages = require('gh-pages');
var path = require('path');
var config = require('../webpack.config');
var fs = require('fs');

fs.writeFileSync(path.join(config.output.path, 'index.html'), fs.readFileSync(path.join(__dirname, '../demos/index.html')));
ghpages.publish(config.output.path, console.error.bind(console));