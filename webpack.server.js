/**
* @Author: Harsha Attray <harsha>
* @Date:   2017-11-13T16:44:23+05:30
* @Filename: webpack.server.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T13:06:42+05:30
* @License: Apache License v2.0
*/
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');


const config = {
  //Building a bundle for nodejs rather than browser
  target : 'node',
  // Tell wenpack the root file of our application

  entry: './src/index.js',
  //tells webpack where to put the output file that is generated
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  },
  //tells webpack to run babel on every file it runs through
  externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig,config);
