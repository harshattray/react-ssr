/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T15:50:40+05:30
 * @Filename: renderer.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:59:04+05:30
 * @License: Apache License v2.0
 */

import React from 'react';
import renderToString from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/Routes';

export default (req) =>{
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}> // fetching the url from  the request param of the express server
      <Routes />
    </StaticRouter>
  );

  return `<html><head></head><body><div id="root">${content}</div><script src="bundle.js"></script></body></html>`;
};
