CustomOverlay.prototype = new google.maps.OverlayView();

function CustomOverlay(bounds, map, markerElement) {
    this.latLng = bounds;
    this.markerElement = markerElement;

    this.setMap(map);
}

CustomOverlay.prototype.onAdd = function () {
    const panes = this.getPanes();

    panes.floatPane.appendChild(this.markerElement);
};

CustomOverlay.prototype.positionDivOnMap = function (div, sw) {
    const width = div.offsetWidth;
    const height = div.offsetHeight;

    div.style.left = `${sw.x - (width / 2)}px`;
    div.style.top = `${sw.y - height}px`;
};

CustomOverlay.prototype.draw = function () {
    if (this.latLng) {
        const overlayProjection = this.getProjection();

        const sw = overlayProjection.fromLatLngToDivPixel(this.latLng);

        this.positionDivOnMap(this.markerElement, sw);
    }
};

CustomOverlay.prototype.onRemove = function () {
    this.markerElement.parentNode.removeChild(this.markerElement);
    this.markerElement = null;
};

module.exports = (latLng, map, markerElement) => new CustomOverlay(latLng, map, markerElement);
