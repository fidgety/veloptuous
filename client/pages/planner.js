import React from 'react';
import { connect } from 'react-redux';
import PlannerMap from '../components/PlannerMap';
import Undo from '../components/undo';
import { findNearestLatLng } from '../actionCreators/maps';
import undo from '../actionCreators/controls';

const select = state => ({
    locations: state.locations.locations,
    route: state.route.route,
    routeStarted: state.route.routeStarted
});

export default connect(select)(props =>
    <div className="full-screen">
        <PlannerMap
          locations={props.locations}
          onLatLngClicked={latLng =>
            props.dispatch(findNearestLatLng(latLng))}
          route={props.route}
        />
        <Undo
          onClick={() => {
              props.dispatch(undo());
          }}
          activated={props.routeStarted}
        />
    </div>
);
