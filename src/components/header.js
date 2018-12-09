import React, { Component } from 'react';
import classes from '../css/styles.module.css'

class Header extends Component {

    state = {
        keywords: ''
    }

    inputChangeHandler = (event) =>{
        this.setState({
            keywords: event.target.value
        })
    }

    render() {
        
        return (
            <header>
                <div className={classes.logo}>Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
            </header>
        );
    }
}

export default Header;