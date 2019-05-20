import React, { useEffect, useState } from 'react';
import './focus';
import { Swiper, Slide } from './swiper';


export const Focus = (props: any) => {
    const [focus, setFocus] = useState([]);
    return (
        <div className="sports-focus" data-spm="focus">
            <Swiper
                duration={500}
                interval={3000}
                autoplay={3000}
            >
                {
                    focus.map((item, index) => {
                        return <Slide key={index}>
                            <a></a>
                        </Slide>;
                    })
                }
            </Swiper>
        </div >
    );
};
