import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom'

const NavLeft = () => {
    return(
    <div className = "sidenav">
        <div>

        <Link to = "sales"><h3 className = "headerWhite">Sales</h3></Link>
        <h3 className = "headerWhite pt-2">Users</h3>

        {/* no path yet */}
        {/* <Link to = "users"><h3 className = "headerWhite pt-2">Users</h3></Link> */}
        
        </div>

        <div className = "sidePad">
            <div className = "">

            <Link to = "admin/create"><p className = "smallText removemargin">Create Admin</p></Link>
            <p className = "removemargin smallText">Support</p>
            </div>
            
        </div>
     </div>
    )
}

export default NavLeft