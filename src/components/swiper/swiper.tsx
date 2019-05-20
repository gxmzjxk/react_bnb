import React, { ReactNode } from 'react';

interface Props {
    duration: number,
    interval: number,
    autoplay: number,
    children? : ReactNode
}


export const Swiper = (props: Props) => {
    const { duration, interval, autoplay, children } = props;
    const fn = (e: any) => {
        console.log('swipe move.');

        e.preventDefault();
    };
    return (
        <div className="wh_content"
            onTouchMove={fn}>
            <div className="wh_swiper">
            {
                children
            }
            </div>

            <div
                className="wh_indicator">
                <div

                >
                </div>
            </div>
        </div>
    );
};
