import React from 'react';
import logo from '../../../assets/images/t-logo.png';
import './header.less';

export const HomeHeader = () => {
    return (
        <header className="homeHeader" data-spm="header">
            <a href="//m.sohu.com">
                <div className="back-home">
                    <i className="ico bicon-left-arrow"></i>
                    <img className="logo" alt="" src={logo} />
                </div>
            </a>
            <div className="label">体育</div>
            <a>
                <div className="right-promotion">
                    <i className="icon"></i>
                    <div className="txt">热剧推广</div>
                </div>
            </a>
        </header>
    );
};
