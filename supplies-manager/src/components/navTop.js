import React from 'react';
import '../style.css'

const Navtop = () => {
    return(
    <div className = "navbar">
        <div className = "float-right pt-1 pb-1">
           <h3 className = "nomargin headingsWhite">SalesManagerDB</h3>
        </div>

        <div className = "">
            <p className = "float-right logout">Sign in</p>
        </div>
        
    </div>
    )
}

export default Navtop
