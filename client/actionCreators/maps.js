import { LAT_LNG_SELECTED } from '../constants';
import snapToRoute from '../utils/maps/snapToRoute';

export const latLngSelected = latLng => (
    {
        type: LAT_LNG_SELECTED,
        latLng
    }
);

export const findNearestLatLng = latLng =>
    (dispatch) => {
        snapToRoute(latLng).then((nearestLatLng) => {
            dispatch(latLngSelected(nearestLatLng));
        });
    };
