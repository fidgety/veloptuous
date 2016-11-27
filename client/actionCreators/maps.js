import { LAT_LNG_SELECTED, DIRECTIONS_READY, POI_SELECTED, POI_DESELECTED, POI_ADDED_TO_ROUTE } from '../constants';
import snapToRoute from '../utils/maps/snapToRoute';
import getDirections from '../utils/maps/getDirections';
import routeToLatLngs from '../utils/maps/routeToLatLngs';

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

export const findNearestLatLng = latLng =>
    (dispatch) => {
        snapToRoute(latLng).then((nearestLatLng) => {
            dispatch(latLngSelected(nearestLatLng));
        });
    };

export const poiAddedToRoute = latLng => findNearestLatLng(latLng);

export const findRoute = (startLatLng, endLatLng) =>
    (dispatch) => {
        getDirections(startLatLng, endLatLng).then((route) => {
            dispatch(directionsReady(routeToLatLngs(route)));
        });
    };
