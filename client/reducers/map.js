import { MAP_BOOTED } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            map: undefined
        };
    }

    if (action.type === MAP_BOOTED) {
        window.map = action.map;
        return {
            map: action.map
        };
    }

    return state;
};
