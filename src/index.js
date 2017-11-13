/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-13T16:29:15+05:30
 * @Filename: index.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-13T18:09:04+05:30
 * @License: Apache License v2.0
 */
//common JS module syntax

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';

const app = express();

//Root route of the application

app.get('/',(req,res) => { 
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(7000,() =>{
  console.log('listening to your port');
});
