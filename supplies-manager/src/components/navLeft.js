import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom'

const NavLeft = () => {
    return(
    <div className = "sidenav">
        <div>

        <Link className = "text-link" to = "sales"><h3 className = "headerWhite">Sales</h3></Link>
        <Link className = "text-link" to = "sales/users"><h3 className = "headerWhite pt-2">Users</h3></Link>

        {/* no path yet */}
        {/* <Link to = "users"><h3 className = "headerWhite pt-2">Users</h3></Link> */}
        
        </div>

        <div className = "sidePad">
            <div className = "">

            <Link className = "text-link" to = "admin/create"><p className = "smallText removemargin">Create Admin</p></Link>
            <p className = "removemargin smallText">Support</p>
            </div>
            
        </div>
     </div>
    )
}

export default NavLeft