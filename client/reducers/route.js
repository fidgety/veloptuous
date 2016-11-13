import { LAT_LNG_SELECTED, DIRECTIONS_READY, UNDO } from '../constants';
import { findRoute } from '../actionCreators/maps';
import store from '../store';

const flatten = arrays =>
    arrays.reduce((arr, array) => arr.concat(array), []);

export default (state, action) => {
    if (!state) {
        return {
            waypoints: [],
            legs: [],
            route: [],
            routeStarted: false
        };
    }

    if (action.type === UNDO) {
        const waypoints = state.waypoints ? state.waypoints.slice(0, state.waypoints.length - 1) : [];
        const legs = state.legs ? state.legs.slice(0, state.legs.length - 1) : [];

        return Object.assign({}, state, {
            waypoints,
            legs,
            route: flatten(legs),
            routeStarted: !!waypoints.length
        });
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
        const waypoints = state.waypoints.concat([action.latLng]);

        if (amountOfWaypoints) {
            store.dispatch(findRoute(previousWaypoint, action.latLng));
        }

        return Object.assign({}, state, {
            waypoints,
            routeStarted: !!waypoints
        });
    }

    return state;
};
