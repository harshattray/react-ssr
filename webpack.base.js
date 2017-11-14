/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T12:41:56+05:30
 * @Filename: webpack.base.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T12:42:58+05:30
 * @License: Apache License v2.0
 */
module.exports = {
  module: {
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
