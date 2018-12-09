import React from 'react';
import classes from '../css/styles.module.css'

const Header = ({keywords}) =>  {    
    return (
        <header>
            <div className={classes.logo}>Logo</div>
            <input type="text" onChange={keywords}/>
        </header>
    );

}

export default Header;