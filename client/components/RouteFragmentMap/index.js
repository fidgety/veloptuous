import React from 'react';
import GoogleMaps from '../GoogleMaps';
import GooglePolyline from '../GooglePolyline';
import StartMarker from '../StartMarker';

export default React.createClass({
    getInitialState() {
        return {
            map: undefined,
        };
    },
    mapReady(map) {
        window.SAMPLE_RATE = 100;
        this.props.onMapBooted(map);
        this.setState({
            map
        });
    },
    render() {
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
                <GooglePolyline
                  map={this.state.map}
                  latLngs={this.props.route}
                />
            </div>
        );
    }
});
