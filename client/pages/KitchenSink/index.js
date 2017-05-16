import React from 'react';

import './style.scss';
import Logo from '../../components/logo';

const Carousel = require('react-responsive-carousel').Carousel;

export default () => <div className="ks">
    <div className="ks__header">
        <div className="ks__header-logo">
            <Logo />
            <div className="ks__header-title">Kitchen Sink</div>
        </div>
    </div>
    <div className="ks_carousel ks__section">
        <div className="ks__heading">Carousel</div>
        <Carousel>
            <div>a</div>
            <div>b</div>
            <div>c</div>
        </Carousel>
    </div>
</div>;
