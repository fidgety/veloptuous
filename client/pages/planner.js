import React from 'react';
import { connect } from 'react-redux';
import PlannerMap from '../components/PlannerMap';
import Undo from '../components/undo';
import { findNearestLatLng, poiSelected, poiDeselected, poiAddedToRoute, mapBooted } from '../actionCreators/maps';
import { getPlacesInformation } from '../actionCreators/places';
import undo from '../actionCreators/controls';
import PoiSidebar from '../components/PoiSidebar2';
import Distance from '../components/Distance';
import Header from '../components/Header';

const select = state => ({
    locations: state.locations.locations,
    selectedLocation: state.locations.selectedLocation,
    route: state.route.route,
    routeStarted: state.route.routeStarted,
    distance: state.route.distance,
    percentages: state.route.percentages,
    openingHours: state.locations.placesInformation.openingHours
});

export default connect(select)(props =>
    <div className="full-screen">
        <Header />
        <PlannerMap
          locations={props.locations}
          onLatLngClicked={latLng =>
            props.dispatch(findNearestLatLng(latLng))}
          route={props.route}
          onMapBooted={(map) => {
              props.dispatch(mapBooted(map));
          }}
          onMarkerClick={(id) => {
              props.dispatch(poiSelected(id));
              props.dispatch(getPlacesInformation(id, window.map));
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
        <Distance
          distance={props.distance}
          percentages={props.percentages}
        />
        <PoiSidebar
          {...props.selectedLocation}
          openingHours={props.openingHours}
          onClose={() => {
              props.dispatch(poiDeselected());
          }}
          onAddRoute={(latLng) => {
              props.dispatch(poiAddedToRoute(latLng));
          }}
        />
    </div>
);
