import React from 'react';
import '../style.css'

const NavLeft = () => {
    return(
    <div className = "sidenav">
        <div>
        <h3 className = "headerWhite">Sales</h3>
        <h3 className = "headerWhite pt-2">Users</h3>
        </div>

        <div className = "sidePad">
            <div className = "">
            <p className = "smallText removemargin">Create Admin</p>
            <p className = "removemargin smallText">Support</p>
            </div>
            
        </div>
     </div>
    )
}

export default NavLeft