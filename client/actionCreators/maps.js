import { LAT_LNG_SELECTED, DIRECTIONS_READY, POI_SELECTED, POI_DESELECTED, ELEVATIONS_UPDATED, SAMPLE_RATE } from '../constants';
import snapToRoute from '../utils/maps/snapToRoute';
import getDirections from '../utils/maps/getDirections';
import routeToLatLngs from '../utils/maps/routeToLatLngs';
import getLatLngsForElevationLookup from '../utils/maps/sampleLatLngsFromRoute';
import getElevationsForLatLngs from '../utils/maps/elevations';

export const latLngSelected = latLng => (
    {
        type: LAT_LNG_SELECTED,
        latLng
    }
);

export const poiSelected = name => (
    {
        type: POI_SELECTED,
        name
    }
);

export const poiDeselected = () => (
    {
        type: POI_DESELECTED
    }
);

export const directionsReady = latLngs => (
    {
        type: DIRECTIONS_READY,
        latLngs
    }
);

export const findNearestLatLng = latLng => (dispatch) => {
    snapToRoute(latLng).then((nearestLatLng) => {
        dispatch(latLngSelected(nearestLatLng));
    });
};

export const poiAddedToRoute = latLng => findNearestLatLng(latLng);

export const elevationsUpdated = elevations => ({
    type: ELEVATIONS_UPDATED,
    elevations
});

export const getElevationsForLeg = latLngs => (dispatch) => {
    let latLngsForLookup = getLatLngsForElevationLookup(latLngs, 0, SAMPLE_RATE); //eslint-disable-line
    getElevationsForLatLngs(latLngsForLookup).then((elevations) => {
        dispatch(elevationsUpdated(elevations));
    });
};

export const findRoute = (startLatLng, endLatLng) => (dispatch) => {
    getDirections(startLatLng, endLatLng).then((route) => {
        const routeLatLngs = routeToLatLngs(route);
        dispatch(directionsReady(routeLatLngs));
        dispatch(getElevationsForLeg(routeLatLngs));
    });
};
