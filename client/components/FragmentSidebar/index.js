import React from 'react';
import cs from 'classnames';

import { Line } from 'react-chartjs-2';

require('./style.scss');

export default React.createClass({
    getInitialState() {
        return {
            title: '',
            photos: ['']
        };
    },
    onChange(e) {
        const elementName = e.target.name;

        if (elementName.indexOf('image-') === 0) {
            const photos = this.state.photos;
            const index = elementName.split('-')[1];
            photos[index] = e.target.value;
            return this.setState({
                photos
            });
        }

        return this.setState({
            [e.target.name]: e.target.value
        });
    },
    add() {
        this.setState({
            photos: this.state.photos.concat([''])
        });
    },
    save(e) {
        e.preventDefault();
    },
    render() {
        const classNames = cs({
            'fragment-sidebar': true,
            'fragment-sidebar--visible': true,
        });

        const elevations = this.props.elevations.map(elevation => elevation.elevation);

        const options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false
                }]
            },
            tooltips: {
                enabled: false
            },
            point: {
                display: false
            }
        };

        const data = {
            labels: elevations,
            datasets: [{
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(255,255,255,0.8)',
                borderCapStyle: 'butt',
                pointRadius: 0,
                data: elevations
            }]
        };

        const photos = this.state.photos.map((photo, i) =>
            <input name={`image-${i}`} onChange={this.onChange} key={i} type="text" placeholder="image" />
        );

        return (
            <div className={classNames}>
                <div className="fragment-sidebar__close" onClick={this.props.onClose}>X</div>
                <form action="">
                    <input type="text" placeholder="headline" name="title" onChange={this.onChange} />
                    {photos}
                    <div
                      className="fragment-sidebar__add-photo"
                      onClick={this.add}
                    >+</div>
                    <div className="fragment-sidebar__elevations">
                        <Line data={data} options={options} redraw={false} width={100} height={40} />
                    </div>
                    <button onClick={this.save}>Save</button>
                    <textarea
                      value={JSON.stringify(Object.assign({}, this.state, {
                          elevations
                      }), null, 4)}
                      cols="80"
                      rows="30"
                      readOnly="true"
                    />
                </form>
            </div>
        );
    }
});
