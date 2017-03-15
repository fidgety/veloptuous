const encodePath = google.maps.geometry.encoding.encodePath;
const decodePath = google.maps.geometry.encoding.decodePath;
const calcDistance = google.maps.geometry.spherical.computeLength;
const gBound = google.maps.LatLngBounds;

export const join = (polyline, polyline2) => {
    if (!polyline || !polyline2) {
        return;
    }

    const mainPathArray = polyline.getPath();
    const pathToMerge = polyline2.getPath().getArray();

    pathToMerge.forEach((point) => {
        mainPathArray.push(point);
    });

    return polyline;
};

export const encode = polyline => encodePath(polyline);

export const decode = encodedPath => decodePath(encodedPath);

export const calculateDistance = calcDistance;

export const toBounds = (latLngs) => {
    const bounds = new gBound();

    if (latLngs) {
        latLngs.forEach(latLng => bounds.extend(latLng));
    }

    return bounds;
};
