import React from 'react';
import { connect } from 'react-redux';
import PlannerMap from '../components/PlannerMap';
import Undo from '../components/undo';
import { findNearestLatLng, poiSelected, poiDeselected } from '../actionCreators/maps';
import undo from '../actionCreators/controls';
import PoiSidebar from '../components/PoiSidebar';

const select = state => ({
    locations: state.locations.locations,
    selectedLocation: state.locations.selectedLocation,
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
          onMarkerClick={(name) => {
              props.dispatch(poiSelected(name));
          }}
          selectedLocation={
              props.selectedLocation
          }
        />
        <Undo
          onClick={() => {
              props.dispatch(undo());
          }}
          activated={props.routeStarted}
        />
        <PoiSidebar
          {...props.selectedLocation}
          onClose={() => {
              props.dispatch(poiDeselected());
          }}
        />
    </div>
);
