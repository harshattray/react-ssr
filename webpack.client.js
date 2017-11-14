/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T10:57:29+05:30
 * @Filename: webpack.client.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T11:20:27+05:30
 * @License: Apache License v2.0
 */
const path = require('path');

module.exports = {

entry:'./src/client/client.js',

output:{
  filename:'bundle.js',
  path: path.resolve(__dirname,'public')
},
module:{
  rules:[
    {
      test:/\.js?$/,
      loader:'babel-loader',
      exclude:/node_modules/,
      options:{
        presets:[
          'react',
          'stage-0',
          ['env',{targets:{browsers:['last 2 versions']}}]
        ]
      }
    }
  ]
}

}
