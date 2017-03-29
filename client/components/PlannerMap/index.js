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
            previousCentre: undefined,
            locationLatLng: undefined
        };
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLocation && this.state.locationLatLng === undefined) {
            return this.setState({
                previousCentre: this.state.map.getCenter(),
                locationLatLng: nextProps.selectedLocation.latLng
            });
        }

        if (!nextProps.selectedLocation) {
            return this.setState({
                locationLatLng: undefined
            });
        }

        if (nextProps.selectedLocation.latLng !== this.state.locationLatLng) {
            this.setState({
                locationLatLng: nextProps.selectedLocation.latLng
            });
        }

        return undefined;
    },
    mapReady(map) {
        this.props.onMapBooted(map);
        this.setState({
            map,
            previousCentre: map.getCenter(),
            locationLatLng: undefined
        });
    },
    render() {
        if (this.state.map && this.state.previousCentre) {
            // offsetMap(
            //     this.state.map,
            //     this.state.locationLatLng ? locationOffsetInPixels : 0,
            //     0,
            //     this.state.locationLatLng || this.state.previousCentre
            // );
        }

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
                  route={this.props.route}
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
