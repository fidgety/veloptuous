import React from 'react';
import { connect } from 'react-redux';
import PlannerMap from '../components/PlannerMap';
import { findNearestLatLng } from '../actionCreators/maps';

const select = state => ({
    locations: state.locations.locations,
    route: state.route.route
});

export default connect(select)(props =>
    <div className="full-screen">
        <PlannerMap
          locations={props.locations}
          onLatLngClicked={latLng =>
            props.dispatch(findNearestLatLng(latLng))}
          route={props.route}
        />
    </div>
);
