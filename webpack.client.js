/**
* @Author: Harsha Attray <harsha>
* @Date:   2017-11-14T10:57:29+05:30
* @Filename: webpack.client.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T12:47:30+05:30
* @License: Apache License v2.0
*/
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {

  entry:'./src/client/client.js',

  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname,'public')
  }
};

module.exports = merge(baseConfig,config);
