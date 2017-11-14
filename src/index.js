/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-13T16:29:15+05:30
 * @Filename: index.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:57:45+05:30
 * @License: Apache License v2.0
 */
//common JS module syntax

import express from 'express';
import renderer from './helpers/renderer';

const app = express();

//Root route of the application
app.use(express.static('public'));

app.get('/',(req,res) => {

  res.send(renderer(req));
});

app.listen(7000,() =>{
  console.log('listening to your port');
});
