/**
 * @Author: Harsha Attray <harsha>
 * @Date:   2017-11-13T16:32:35+05:30
 * @Filename: Home.js
 * @Last modified by:   harsha
 * @Last modified time: 2017-11-14T12:41:08+05:30
 * @License: Apache License v2.0
 */
import React from 'react';


const Home = () => {
  return (
    <div>
      <div>
        Stuff rendered from server
        <button onClick={()=>console.log('Print this')}>
          Press this!!
        </button>
      </div>
    </div>
  );
}

export default Home;
