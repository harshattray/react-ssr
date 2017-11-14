/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T11:09:14+05:30
 * @Filename: client.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T12:29:37+05:30
 * @License: Apache License v2.0
 */


import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';


ReactDOM.hydrate(<Home />,document.querySelector('#root'));
