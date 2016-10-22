export default (state) => {
    if (!state) {
        return {
            locations: [{
                latLng: new google.maps.LatLng(53.32454221338231, -1.6524338722229004), // eslint-disable-line
                name: 'Cutlery Factory',
                type: 'café',
                image: '/images/cutlery-factory-1.jpg',
                selected: false
            }],
            selectedHighlight: undefined
        };
    }

    return state;
};
