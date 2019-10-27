import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(){
    return(
        <ul style={{display:"flex"}}>
            <NavLink to="/">
                <li style={{marginLeft:10,listStyle:"none"}}>Home</li>
            </NavLink>
            <NavLink exact activeClassName="current" to="/History">
                <li style={{marginLeft:10,listStyle:"none"}}>History</li>
            </NavLink>
        </ul>
    )
}

export default Navigation;