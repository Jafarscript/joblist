import React from 'react';
import {header, rotate} from './header.module.css'

const Header = () => {
    return (
        <div className={header}>
            <p className={rotate}></p>
        </div>
    )
}

export default Header
