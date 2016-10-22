import React from 'react';
import GoogleMarker from '../GoogleMarker';

require('./style.scss');

export default props =>
    <GoogleMarker
      {...props}
    />;
