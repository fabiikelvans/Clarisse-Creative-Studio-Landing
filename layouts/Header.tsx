import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import Menu from "./Menu";
import {CgClose} from "react-icons/cg";

function Header() {
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

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



    return (

            <header className='main-header'>
                <div className='header'>
                    <div className="header__logo">
                        <Link href={'/'} > Muriel </Link>
                    </div>
                    <button className="header__toggle" disabled={disabled} onClick={handleMenu}>
                        <div className='header__toggle-icon'>
                            {state.menuName}
                        </div>

                    </button>
                </div>

                {/*Menu Component*/}
                <Menu state={state}/>

            </header>

    );
}

export default Header;