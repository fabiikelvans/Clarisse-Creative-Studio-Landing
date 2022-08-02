import React, {useEffect, useRef, useState} from 'react';
import { gsap } from "gsap";
import Link from "next/link";
import {
    menuShow,
    menuHide,
    textIntro,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../components/animations/gsap/Animate";


function Menu({state}) {
    //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)
    let info = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)


    // Colors
    const colors = {
        Sea: '#a2ccb6',
        Sand: '#fceeb5',
        Peach: '#F8A477',
        Tea : '#00F5D4',
        Miniom: '#FDE74C'
      }


      const [color, setColor] = useState(colors.Sea)


        useEffect(() => {
            setColor(color)

        }, [])
        
    
      
       

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.
            menuHide(show2, show1);
            // Set menu to display none
            gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([show1, show2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            menuShow(show1, show2);
            textIntro(info);
            staggerLinks(line1, line2, line3, line4);
        }

    }, [state]);

    return (
        <div ref={(el) => (menuWrapper = el)} className='menu-wrapper'>
            <div
                ref={(el) => (show1 = el)}
                className="menu-secondary-background-color"
            ></div>
            <div className="menu" ref={(el) => (show2 = el)}  style={{backgroundColor : color}} >
                <ul className="menu__items">
                    <li 
                    onMouseEnter={e => setColor(colors.Sand)}
                    onMouseLeave={e => setColor(colors.Sea)}
                    className="menu__item" ref={(el) => (line1 = el)}>
                        <Link href={'#'} >Home</Link></li>

                    <li 
                    onMouseEnter={e => setColor(colors.Peach)}
                    onMouseLeave={e => setColor(colors.Sea)}
                    className="menu__item" ref={(el) => (line2 = el)}>
                        <Link href={'#'}>About</Link>
                    </li>

                    <li 
                    onMouseEnter={e => setColor(colors.Tea)}
                    onMouseLeave={e => setColor(colors.Sea)}
                    className="menu__item" ref={(el) => (line3 = el)}>
                        <Link href={'#'}>Portfolio</Link>
                    </li>


                    <li 
                    onMouseEnter={e => setColor(colors.Miniom)}
                    onMouseLeave={e => setColor(colors.Sea)}
                    className="menu__item" ref={(el) => (line4 = el)}>
                        <Link href={'#'}>Shop</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;