import React from 'react';
import '../style.css'

const Navtop = () => {
    return(
    <div className = "navbar">
        <div className = "float-right pt-2 pb-2">
           <h3 className = "nomargin headingsWhite">SalesManagerDB</h3>
        </div>

        <div className = "">
            <p className = "float-right logout">Sign in</p>
        </div>
        
    </div>
    )
}

export default Navtop
