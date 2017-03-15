import React from 'react';

require('./style.scss');

export default function (props) {
    return (<div className="distance">
        {props.distance}
        <ul className="gradiant">
            <li className="gradiant__up-7" />
            <li className="gradiant__up-3" />
            <li className="gradiant__up-1" />
            <li className="gradiant__level" />
            <li className="gradiant__down-1" />
            <li className="gradiant__down-3" />
            <li className="gradiant__down-7" />
        </ul>
    </div>);
}

const gradients = [7, 3, 1, 0, 1, 3, 7];
