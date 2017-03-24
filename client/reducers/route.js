import { LAT_LNG_SELECTED, DIRECTIONS_READY, UNDO, ELEVATIONS_UPDATED } from '../constants';
import { findRoute } from '../actionCreators/maps';
import store from '../store';
import { calculateDistance } from '../utils/maps/polyline';

const flatten = arrays =>
    arrays.reduce((arr, array) => arr.concat(array), []);

const calculateDistanceInKm = route => (calculateDistance(route) / 1000);

export default (state, action) => {
    if (!state) {
        return {
            waypoints: [],
            legs: [],
            route: [],
            routeStarted: false,
            distance: 0,
            elevationsPerLeg: [],
            elevations: []
        };
    }

    if (action.type === UNDO) {
        const waypoints = state.waypoints ? state.waypoints.slice(0, state.waypoints.length - 1) : [];
        const elevationsPerLeg = state.elevationsPerLeg ? state.elevationsPerLeg.slice(0, state.elevationsPerLeg.length - 1) : [];
        const legs = state.legs ? state.legs.slice(0, state.legs.length - 1) : [];
        const route = flatten(legs);

        return Object.assign({}, state, {
            waypoints,
            legs,
            route,
            routeStarted: !!waypoints.length,
            distance: calculateDistanceInKm(route),
            elevationsPerLeg,
            elevations: flatten(elevationsPerLeg)
        });
    }

    if (action.type === DIRECTIONS_READY) {
        const legs = state.legs.concat([action.latLngs]);
        const route = flatten(legs);
        return Object.assign({}, state, {
            legs,
            route,
            distance: calculateDistanceInKm(route)
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

    if (action.type === ELEVATIONS_UPDATED) {
        const elevationsPerLeg = state.elevationsPerLeg.concat([action.elevations]);
        return Object.assign({}, state, {
            elevationsPerLeg,
            elevations: flatten(elevationsPerLeg)
        });
    }

    return state;
};
