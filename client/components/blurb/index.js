import React from 'react';
import Logo from '../logo';
import ColourBar from '../colourBar';

require('./style.scss');

export default function () {
    return (<div>
        <div className="logo">
            <Logo />
            <ColourBar />
        </div>
        <div className="tag-line">A cycling route guide to help you make the most enjoyable rides in the Peak District.</div>
        <a className="button start-route" href="/planner">Start a route</a>
    </div>);
}
