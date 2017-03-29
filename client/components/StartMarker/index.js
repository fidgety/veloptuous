import React from 'react';
import LocationMarker from '../LocationMarker';

import './style.scss';

export default function (props) {
    if (!props.route.length) {
        return null;
    }
    console.log(props.route[0]);
    return (<LocationMarker
      key="start"
      map={props.map}
      markerDiv={<div className="start-marker" />}
      latLng={props.route[0]}
    />);
}
