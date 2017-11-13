/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-13T16:29:15+05:30
 * @Filename: index.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-13T17:10:03+05:30
 * @License: Apache License v2.0
 */
//common JS module syntax
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/component/Home').default;

const app = express();

//Root route of the application

app.get('/',(req,res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(7000,() =>{
  console.log('listening to your port');
});
