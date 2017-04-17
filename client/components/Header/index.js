import React from 'react';
import Logo from '../logo';
import ColourBar from '../colourBar';
import { Link } from 'react-router';

require('./style.scss');

export default function () {
    return (<header className="header">
        <div className="header__logo">
            <Link href="/"><Logo /></Link>
        </div>
        <div className="header__bar">
            <ColourBar />
        </div>
    </header>);
}
