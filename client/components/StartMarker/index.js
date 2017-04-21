import React from 'react';
import LocationMarker from '../LocationMarker';

import './style.scss';

export default function (props) {
    if (!props.waypoints.length) {
        return null;
    }

    return (<LocationMarker
      key="start"
      map={props.map}
      markerDiv={<div className="start-marker" />}
      latLng={props.waypoints[0]}
    />);
}
