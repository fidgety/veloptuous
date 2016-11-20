export default (map, offsetx, offsety, centre) => {
    if (map.getProjection()) {
        const latLng = map.getProjection().fromLatLngToPoint(centre);
        const latLng2 = new google.maps.Point(
        ((typeof (offsetx) === 'number' ? offsetx : 0) / Math.pow(2, map.getZoom())) || 0,
        ((typeof (offsety) === 'number' ? offsety : 0) / Math.pow(2, map.getZoom())) || 0
    );
        map.panTo(map.getProjection().fromPointToLatLng(new google.maps.Point(
        latLng.x - latLng2.x,
        latLng.y + latLng2.y
    )));
    }
};
