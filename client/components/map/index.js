import React from 'react';
import mainMapOptions from './mapOptions';

require('./style.scss');

module.exports = React.createClass({
    getInitialState() {
        return {
            map: undefined
        };
    },
    componentDidMount() {
        const map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mainMapOptions
        );

        this.setState({
            map
        });

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
    },
    render() {
        return (
            <div id="map">
                <div id="map-canvas" />
            </div>);
    }
});
