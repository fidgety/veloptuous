import React from 'react';
import cs from 'classnames';

require('./style.scss');

export default function (props) {
    if (!props.headline) {
        return null;
    }

    const classNames = cs({
        sidebar: true,
        'sidebar--visible': props.headline,
    });

    const goodForMap = {
        cake: 'cake',
        lunch: 'lunch',
        pitStop: 'pit stop',
        afterCycle: 'post cycle refuel'
    };

    const goodFor = Object.keys(props.goodFor).map((item) => {
        const classNamesItem = cs({
            'good-for__item': true,
            'good-for__item--on': props.goodFor[item]
        });
        return <li className={classNamesItem} key={item}>{goodForMap[item]}</li>;
    });

    return (
        <div className={classNames}>
            <div className="sidebar__close" onClick={props.onClose}>X</div>
            <img src={props.image} />
            <h2>{props.name}</h2>

            <h3>{props.headline}</h3>
            <ul className="good-for">
                {goodFor}
            </ul>
            <table>
                <tbody>
                    <tr>
                        <td className="item">Awkwardness</td>
                        <td>It's posh, but relaxed, chill.</td>
                    </tr>
                    <tr>
                        <td className="item">Bike security</td>
                        <td>100% safe</td>
                    </tr>
                    <tr>
                        <td className="item">Cost</td>
                        <td>Class doesn't come cheap!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
