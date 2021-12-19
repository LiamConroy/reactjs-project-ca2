import React from 'react';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom'

let outButton
// let inButton

const Navtop = props => {

    let navigate = useNavigate();
    const logout = () => {
        console.log("activated")
        props.onAuthenticated(false)
        console.log(props.authenticated)
        navigate(`/`)
    }

    // if(!props.authenticated){
    //     inButton = (
    //         <Link className = "text-link" to='/'><p className = "float-right logout">Sign in</p></Link>
    //     )
    // }

    if(props.authenticated){
        outButton = (
            <Link onClick = {logout} className = "text-link" to='/'><p className = "float-right logout">Logout</p></Link>
        )
    }

    return(
    <div className = "navbar">
        <div className = "float-right pt-2 pb-2">
        
           <h3 className = "nomargin headingsWhite">SalesManagerDB</h3>
        </div>

        <div className = "">
            { outButton }
        </div>
        
    </div>
    )
}

export default Navtop
