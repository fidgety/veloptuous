import React from 'react';
import cs from 'classnames';

require('./style.scss');

export default function (props) {
    const classNames = cs({
        undo: true,
        'undo--active': props.activated
    });

    return (<a className={classNames} onClick={props.onClick}>undo</a>);
}
