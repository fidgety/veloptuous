import React from 'react';
import GoogleMaps from '../GoogleMaps';
import GooglePolyline from '../GooglePolyline';
import LocationMarker from '../LocationMarker';

export default React.createClass({
    getInitialState() {
        return {
            map: undefined
        };
    },
    mapReady(map) {
        this.setState({
            map
        });
    },
    render() {
        const markers = this.props.locations.map(location =>
            <LocationMarker
              key={location.name}
              map={this.state.map}
              markerDiv={<div className="marker" />}
              latLng={location.latLng}
            />);

        return (
            <div className="full-screen">
                <GoogleMaps
                  onMapReady={this.mapReady}
                  onLatLngClicked={this.props.onLatLngClicked}
                />
                {markers}
                <GooglePolyline
                  map={this.state.map}
                  latLngs={this.props.route}
                />
            </div>
        );
    }
});
