import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

function Cursor() {
    return (
        <div>
            {/*Custom Cursor*/}
            {(typeof window !== 'undefined') &&
            <AnimatedCursor
                innerSize={8}
                outerSize={20}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={2.5}
                hasBlendMode={true}
                outerStyle={{
                    border: 'none',
                    background: '#f8bd7f',
                }}
                innerStyle={{
                    backgroundColor: '#000',
                }}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            }
        </div>
    );
}

export default Cursor;