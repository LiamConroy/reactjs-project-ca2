import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom'

const Navtop = () => {
    return(
    <div className = "navbar">
        <div className = "float-right pt-1 pb-1">
           <h3 className = "nomargin headingsWhite">SalesManagerDB</h3>
        </div>

        <div className = "">

            <Link className = "text-link" to='/'><p className = "float-right logout">Sign in</p></Link>
        </div>
        
    </div>
    )
}

export default Navtop
