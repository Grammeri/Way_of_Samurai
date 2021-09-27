import React from 'react';
import { NavLink } from 'react-router-dom';


import classes from "./Navbar.module.css";
// classes - можно назвать как угодно у димыча s,
// но тогда <nav className={s.nav}>

function Navbar() {
    // @ts-ignore
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                {/*В тегах не ставим точку ./*/}
               <NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to={"/news"} activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"} activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"settings"} activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;