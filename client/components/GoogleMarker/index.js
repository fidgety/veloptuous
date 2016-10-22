import React from 'react';
import ReactDOM from 'react-dom';
import customMarker from '../../utils/maps/customMarker';

export default React.createClass({
    getInitialState() {
        const markerDiv = document.createElement('div');
        markerDiv.style.position = 'absolute';
        markerDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            return false;
        });
        return {
            markerDiv
        };
    },
    componentDidMount() {
        ReactDOM.render(this.props.markerDiv, this.state.markerDiv);
    },
    componentDidUpdate() {
        ReactDOM.render(this.props.markerDiv, this.state.markerDiv);
    },
    componentWillUnmount() {
        this.state.marker.setMap(null);
    },
    render() {
        this.state.markerDiv.onclick = this.props.onClick;
        this.state.marker = customMarker(
            this.props.latLng,
            this.props.map,
            this.state.markerDiv
        );
        return null;
    }
});
