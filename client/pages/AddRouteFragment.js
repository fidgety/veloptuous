import React from 'react';
import { connect } from 'react-redux';
import RouteFragmentMap from '../components/RouteFragmentMap';
import Undo from '../components/undo';
import { findNearestLatLng, mapBooted } from '../actionCreators/maps';
import undo from '../actionCreators/controls';
import Header from '../components/Header';
import Distance from '../components/Distance';
import FragmentSidebar from '../components/FragmentSidebar';

const select = state => ({
    route: state.route.route,
    waypoints: state.route.waypoints,
    routeStarted: state.route.routeStarted,
    distance: state.route.distance,
    percentages: state.route.percentages,
    elevations: state.route.elevations
});

export default connect(select)(props =>
    <div className="full-screen">
        <Header />
        <RouteFragmentMap
          onLatLngClicked={latLng =>
            props.dispatch(findNearestLatLng(latLng))}
          route={props.route}
          waypoints={props.waypoints}
          onMapBooted={(map) => {
              props.dispatch(mapBooted(map));
          }}
        />
        <FragmentSidebar
          elevations={props.elevations}
        />
        <Undo
          onClick={() => {
              props.dispatch(undo());
          }}
          activated={props.routeStarted}
        />
        <Distance
          distance={props.distance}
          percentages={props.percentages}
        />
    </div>
);
