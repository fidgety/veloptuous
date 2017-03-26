import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import AnimatedNumber from 'react-animated-number';

require('./style.scss');

export default React.createClass({
    getInitialState() {
        return {
            distance: 0,
            grads: [1, 1, 1, 1, 1]
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
                data: [
                    this.props.percentages.upSeven,
                    this.props.percentages.upThree,
                    this.props.percentages.flatish,
                    this.props.percentages.downThree,
                    this.props.percentages.downSeven
                    // 1, 1, 1, 1, 1
                ],
                backgroundColor: [
                    'black',
                    '#CC491A',
                    // '#EFB85F',
                    '#FFCE56',
                    '#90A955',
                    '#90A955',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'blue',
                    'red'
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
