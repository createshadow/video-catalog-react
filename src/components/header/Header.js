import React from 'react';
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";

const Header = () => {
    return (
        <AppBar position='fixed' className='AppBar' style={{height: '60px', justifyContent: 'center'}}>
            <nav className='AppNav'>
                <Link to="/" className='AppLink'>Home</Link>
                <Link to="/catalog" className='AppLink'>Catalog</Link>
            </nav>
        </AppBar>
    )
};

export default Header;