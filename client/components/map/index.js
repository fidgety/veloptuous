import React from 'react';
import mainMapOptions from './mapOptions';

require('./style.scss');

const bootUpMap = (element) => {
    const map = new google.maps.Map(
        element,
        mainMapOptions
    );

    google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
        google.maps.event.addListener(map, 'dragend', () => {
        });

        google.maps.event.addListener(map, 'click', (e) => {
            alert(e.latLng);
        });

        google.maps.event.addListener(map, 'dblclick', () => {
        });

        google.maps.event.addListener(map, 'zoom_changed', () => {
        });
    });

    return map;
};

module.exports = React.createClass({
    map: undefined,
    domReady(element) {
        this.map = bootUpMap(element);
    },
    render() {
        return (
            <div className="full-screen">
                <div className="full-screen" ref={this.domReady} />
            </div>);
    }
});
