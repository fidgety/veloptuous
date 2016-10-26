import { LAT_LNG_SELECTED, DIRECTIONS_READY } from '../constants';
import snapToRoute from '../utils/maps/snapToRoute';
import getDirections from '../utils/maps/getDirections';
import routeToLatLngs from '../utils/maps/routeToLatLngs';

export const latLngSelected = latLng => (
    {
        type: LAT_LNG_SELECTED,
        latLng
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

export const findRoute = (startLatLng, endLatLng) =>
    (dispatch) => {
        getDirections(startLatLng, endLatLng).then((route) => {
            dispatch(directionsReady(routeToLatLngs(route)));
        });
    };
