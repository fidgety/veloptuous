import React from 'react';

module.exports = React.createClass({
    getInitialState() {
        return {
            polyline: new google.maps.Polyline({
                path: [],
                strokeColor: '#000000',
                strokeWeight: 4,
                map: undefined
            })
        };
    },
    shouldComponentUpdate(nextProps) {
        this.state.polyline.setMap(nextProps.map);

        this.state.polyline.setOptions({
            strokeColor: nextProps.strokeColour || '#000000',
            strokeWeight: nextProps.strokeWeight || 4
        });

        google.maps.event.addListener(this.state.polyline, 'click', (e) => {
            if (this.props.onClick) {
                this.props.onClick(e.latLng);
            }
        });

        return nextProps.latLngs !== undefined
            && this.state.polyline.getPath().getLength() !== nextProps.latLngs.length;
    },
    componentWillUnmount() {
        this.state.polyline.setMap(null);
    },
    render() {
        if (this.props.latLngs) {
            const newPath = this.props.latLngs;
            const route = this.state.polyline.getPath();
            route.clear(); // lazy

            newPath.forEach((latLng, count) => {
                route.push(newPath[count]);
            });
        }
        return null;
    }
});
