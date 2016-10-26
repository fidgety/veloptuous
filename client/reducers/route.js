import { LAT_LNG_SELECTED, DIRECTIONS_READY } from '../constants';
import { findRoute } from '../actionCreators/maps';
import store from '../store';

const flatten = arrays =>
    arrays.reduce((arr, array) => arr.concat(array));

export default (state, action) => {
    if (!state) {
        return {
            waypoints: [],
            legs: [],
            route: []
        };
    }

    if (action.type === DIRECTIONS_READY) {
        const legs = state.legs.concat([action.latLngs]);
        return Object.assign({}, state, {
            legs,
            route: flatten(legs)
        });
    }

    if (action.type === LAT_LNG_SELECTED) {
        const amountOfWaypoints = state.waypoints.length;
        const previousWaypoint = state.waypoints[amountOfWaypoints - 1];

        if (amountOfWaypoints) {
            store.dispatch(findRoute(previousWaypoint, action.latLng));
        }

        return Object.assign({}, state, {
            waypoints: state.waypoints.concat([action.latLng])
        });
    }

    return state;
};
