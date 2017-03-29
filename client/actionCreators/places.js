import { PLACE_LOOKUP_STARTED, PLACE_LOOKUP_FINISHED } from '../constants';

import placesLookup from '../utils/maps/places';

export const placesInformationLookupStarted = () => ({
    type: PLACE_LOOKUP_STARTED
});

export const placesInformationReady = placeInformation => ({
    type: PLACE_LOOKUP_FINISHED,
    placeInformation
});

export const getPlacesInformation = (placeId, map) => (dispatch) => {
    placesInformationLookupStarted();

    placesLookup(placeId, map).then((placeInformation) => {
        dispatch(placesInformationReady(placeInformation));
    });
};
