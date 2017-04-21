import React from 'react';
import GoogleMaps from '../GoogleMaps';
import GooglePolyline from '../GooglePolyline';
import LocationMarker from '../LocationMarker';
import StartMarker from '../StartMarker';
// import offsetMap from '../../utils/maps/offsetMapByPixels';

// const locationOffsetInPixels = 200;

export default React.createClass({
    getInitialState() {
        return {
            map: undefined,
        };
    },
    mapReady(map) {
        this.props.onMapBooted(map);
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
              onClick={() => {
                  this.props.onMarkerClick(location.id);
              }}
            />);

        return (
            <div className="full-screen">
                <GoogleMaps
                  onMapReady={this.mapReady}
                  onLatLngClicked={this.props.onLatLngClicked}
                />
                <StartMarker
                  waypoints={this.props.waypoints}
                  map={this.state.map}
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
