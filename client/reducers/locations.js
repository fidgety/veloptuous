import { POI_SELECTED, POI_DESELECTED, PLACE_LOOKUP_FINISHED } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            locations: [{
                latLng: new google.maps.LatLng(53.32454221338231, -1.6524338722229004), // eslint-disable-line
                id: 'ChIJy_1ThGkqekgRZsFMLc61gd4',
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
            selectedLocation: undefined,
            placesInformation: {
                openingHours: []
            }
        };
    }

    if (action.type === POI_SELECTED) {
        return Object.assign({}, state, {
            selectedLocation: state.locations.find(item => item.id === action.id)
        });
    }

    if (action.type === PLACE_LOOKUP_FINISHED) {
        return Object.assign({}, state, {
            placesInformation: {
                openingHours: action.placeInformation.opening_hours.weekday_text.map((item) => {
                    const split = item.split(':');
                    const day = split[0];
                    split.shift();
                    const times = split.join(':');
                    return {
                        day,
                        times
                    };
                })
            }
        });
    }

    if (action.type === POI_DESELECTED) {
        return Object.assign({}, state, {
            selectedLocation: undefined,
            placesInformation: {
                openingHours: []
            }
        });
    }

    return state;
};
