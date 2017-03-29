export default function (placeId, map) {
    return new Promise((resolve, reject) => {
        const request = {
            placeId
        };

        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                return resolve(place);
            }
            return reject(`bad response from places api${status}`);
        });
    });
}
