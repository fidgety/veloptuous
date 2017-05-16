
import React from 'react';
import cs from 'classnames';

require('./style.scss');

export default function (props) {
    if (!props.headline) {
        return null;
    }

    const classNames = cs({
        sidebar2: true,
        'sidebar2--visible': props.headline,
    });

    const goodForMap = {
        cake: 'cake',
        lunch: 'lunch',
        pitStop: 'breakfast',
        afterCycle: 'after'
    };

    const goodFor = Object.keys(props.goodFor).map((item) => {
        const classNamesItem = cs({
            'good-for__item': true,
            'good-for__item--on': props.goodFor[item]
        });
        return <li className={classNamesItem} key={item}>{goodForMap[item]}</li>;
    });
    const onAddRoute = () => {
        props.onAddRoute(props.latLng);
    };

    const openingHours = props.openingHours.map(item =>
        <li key={item.day + item.times}>
            <span className="sidebar2__opening-times-day">{item.day}</span>
            <span className="sidebar2__opening-times-time">{item.times}</span>
        </li>
    );

    return (
        <div className={classNames}>
            <div className="sidebar2__image">
                <img src={props.image} />
                <h2>{props.name}</h2>
            </div>

            <div className="other-info">
                <h3 className="headline">{props.headline}</h3>

                <div className="ot">
                    <div className="sidebar2__opening-times">
                        <h3>opening hours</h3>
                        <ul className="opening-times">{openingHours}</ul>
                    </div>

                    <div className="ot2">
                        <ul className="good-for">
                            {goodFor}
                        </ul>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="item">
                                        <span className="icon fa fa-lock" />
                                    </td>
                                    <td>100% safe</td>
                                </tr>
                                <tr>
                                    <td className="item">
                                        <span className="icon fa fa-gbp" />
                                    </td>
                                    <td>Class doesn&#8217;t come cheap!</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="links">
                            <li>
                                <a href="http://davidmellor.com" target="_blank">
                                    <span className="item fa fa-link" />davidmellor.com
                                </a>
                            </li>
                            <li className="fl">
                                <a href="http://twitter.com" target="_blank">
                                    <span className="item fa fa-twitter" />
                                </a>
                            </li>
                            <li className="fl">
                                <a href="http://facebook.com" target="_blank">
                                    <span className="item fa fa-facebook" />
                                </a>
                            </li>
                            <li className="fl">
                                <span className="item fa fa-phone" />
                                +44 1457 862888
                            </li>
                        </ul>
                    </div>
                    <button className="sidebar2__add-to-route" onClick={onAddRoute}>Add to my route</button>
                </div>
            </div>
            <div className="sidebar2__close" onClick={props.onClose}>X</div>
        </div>
    );
}
