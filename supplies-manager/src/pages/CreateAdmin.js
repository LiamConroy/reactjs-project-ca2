import { Button } from 'react-bootstrap'
// import axios from "axios"
// import { useState } from 'react';
import '../style.css'

const CreateAdmin = () => {

    

    return(
        <div className = "container">
            <div className = "d-flex justify-content-xl-center">        
            <div className = "mt-5 cardStyleAlt">
            <div>
                <h3 className = "nomargin text-center">Create Admin </h3>
                     
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "">
                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Email</p>
                    <input className = "" type = "text" name = "email" /><br />
                    </div>

                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Username</p>
                    <input className = "" type = "text" name = "username" /><br />
                    </div>

                    <div className = "mt-3 ml-5">
                    <p className = " removemargin mb-1">Password</p>
                    <input className = "" type = "password" name = "password" />
                    </div>

                    <div className = "mt-4 text-center"> 
                    
                        <Button variant="success" type = "submit">Submit</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>

        </div>
    )
}

export default CreateAdmin 