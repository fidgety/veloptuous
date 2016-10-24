import React from 'react';
import { connect } from 'react-redux';
import PlannerMap from '../components/PlannerMap';
import { findNearestLatLng } from '../actionCreators/maps';

const select = state => ({
    locations: state.locations.locations
});

export default connect(select)(props =>
    <div className="full-screen">
        <PlannerMap
          locations={props.locations}
          onLatLngClicked={latLng =>
            props.dispatch(findNearestLatLng(latLng))}
        />
    </div>
);
