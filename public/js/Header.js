/**
 * Created by fiddlest on 2016-07-29.
 */


import React from 'react';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router';

const Header = () => {
    const brandImageStyle ={
        position: "absolute",
        top : "0px",
        left : "12px"
    };
    const wrapperStyle = {
        marginBottom : '20px'
    };
    return (
        <div style={wrapperStyle}>
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img style={brandImageStyle} src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" width="50"/>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        </div>
    )

};

export default Header;