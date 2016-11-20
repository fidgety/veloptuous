import { POI_SELECTED, POI_DESELECTED } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            locations: [{
                latLng: new google.maps.LatLng(53.32454221338231, -1.6524338722229004), // eslint-disable-line
                name: 'David Mellor Cutlery Factory',
                headline: 'The classiest cafe in the Peak District, bar none.',
                type: 'café',
                image: '/images/cutlery-factory-2.jpg',
                goodFor: {
                    cake: true,
                    lunch: true,
                    pitStop: false,
                    afterCycle: false
                }
            }],
            selectedLocation: undefined
        };
    }

    if (action.type === POI_SELECTED) {
        return Object.assign({}, state, {
            selectedLocation: state.locations.find(item => item.name === action.name)
        });
    }

    if (action.type === POI_DESELECTED) {
        return Object.assign({}, state, {
            selectedLocation: undefined
        });
    }

    return state;
};
