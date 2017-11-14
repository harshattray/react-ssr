/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T11:09:14+05:30
 * @Filename: client.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:31:28+05:30
 * @License: Apache License v2.0
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes  from './Routes';


ReactDOM.hydrate(<BrowserRouter>
                  <Routes />
                </BrowserRouter>,
  document.querySelector('#root'));
