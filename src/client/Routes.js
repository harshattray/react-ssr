/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-14T16:16:38+05:30
 * @Filename: Routes.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T16:25:15+05:30
 * @License: Apache License v2.0
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
