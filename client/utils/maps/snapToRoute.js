import getDirections from './getDirections';

export default latLng =>
    getDirections(latLng, latLng).then(route =>
        route.legs[0].start_location
    );
