import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import AnimatedNumber from 'react-animated-number';

require('./style.scss');

export default React.createClass({
    getInitialState() {
        return {
            distance: 0,
            grads: [300, 50, 100]
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            distance: nextProps.distance
        });
    },
    render() {
        const options = {
            cutoutPercentage: 80,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        };

        const data = {
            datasets: [{
                data: [Math.random() * 20, Math.random() * 20, Math.random() * 20],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                borderWidth: 0
            }]
        };

        return (<div className="distance">
            <div className="doughnut">
                <Doughnut
                  data={data} options={options} redraw={false} width={100} height={100}
                />
                <div className="doughnut__distance">
                    <AnimatedNumber
                      component="text"
                      value={this.state.distance}
                      duration={1000}
                      formatValue={n => (n % 10 === 0 ? n : n.toFixed(1))}
                    />
                    <span className="metric">km</span>
                </div>
            </div>
        </div>);
    }

});
