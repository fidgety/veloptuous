import React from 'react';
import Logo from '../logo';
import ColourBar from '../colourBar';

require('./style.scss');

export default function () {
    return (<header className="header">
        <div className="header__logo">
            <Logo />
        </div>
        <div className="header__bar">
            <ColourBar />
        </div>
    </header>);
}
