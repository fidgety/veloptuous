import { LAT_LNG_SELECTED } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            waypoints: []
        };
    }

    if (action.type === LAT_LNG_SELECTED) {
        return Object.assign({}, state, {
            waypoints: state.waypoints.concat([action.latLng])
        });
    }

    return state;
};
