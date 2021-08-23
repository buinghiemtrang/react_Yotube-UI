import React, { useState } from 'react'

import Header from './Header'

import Home from '../pages/Home'

const Layout = () => {

    const [dark, setDarkMode] = useState(false);

    const toggle = (theme)=> {
        
        return theme ? setDarkMode(!dark): theme

    }

    return (
        <div className={dark ? 'layouts dark' : 'layouts'}>
            <Header toggle={toggle} />
            <div className="container">
                <div className="main">
                    <Home/>
                </div>
            </div>
        </div>
    )
}

export default Layout
