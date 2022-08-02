import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";
import { gsap } from "gsap";
import {
    menuShow,
    menuHide,
    textIntro,
    sidebarShow,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../components/animations/gsap/Animate";


function Sidebar() {

    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

     //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)


    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };


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
                width: "100%",
                left: "40px"
            });
            sidebarShow(show1, show2);
            staggerLinks(line1, line2, line3, line4);
        }

    }, [state]);


    return (
        <div className='grid__sidebar sidebar'>
            <div className="sidebar__header">
            <div className="sidebar__logo">
                    <Link href={'/'} > Clarisse </Link>
                </div>
                <button className='sidebar__menu' disabled={disabled} onClick={handleMenu}>
                    {state.menuName}
                </button>
                <p className='sidebar__copyright'>© 2022 CLARISSE</p>
            </div>

            <div ref={(el) => (menuWrapper = el)} className="sidebar__content">
                <div
                    ref={(el) => (show1 = el)}
                    className="mer"
                ></div>

                <div ref={(el) => (show2 = el)} >
                <ul className="sidebar__items" >
                    <li className="sidebar__item"><Link href={'#'}>Home</Link></li>
                    <li className="sidebar__item"><Link href={'#'}>About</Link></li>
                    <li className="sidebar__item"><Link href={'#'}>Portfolio</Link></li>
                    <li className="sidebar__item"><Link href={'#'}>Shop</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;