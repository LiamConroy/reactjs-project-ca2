import { Button } from 'react-bootstrap'
import axios from '../config/index.js'
import { useNavigate } from 'react-router'
import { useState} from "react"
// import axios from "axios"
// import { useState } from 'react';
import '../style.css'

const CreateAdmin = () => {

    const [admin, setAdmin] = useState({}) 
    let navigate = useNavigate()

    const handleForm = e => {
        
        setAdmin(prevState => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))      
        console.log(admin)
    }

    const submitAdmin= () => {

        let auth_token = localStorage.getItem('auth_token')

        axios.post("/admins/register", 
          
        {
            name: admin.name,
            email: admin.email,
            password: admin.password,
        }, 
        
        {
            headers: {
                "Authorization" : `Bearer ${auth_token}`
            }

        })    

            .then(response =>{
                console.log(response.data)
                navigate(`/sales`)
            })

            .catch(err => {
                console.log(err)
            })
        }

    return(
        <div className = "container">
            <div className = "d-flex justify-content-xl-center">        
            <div className = "mt-5 cardStyleAlt">
            <div>
                <h3 className = "nomargin text-center">Create Admin</h3>
                     
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "">
                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Email</p>
                    <input className = "" type = "text" name = "email" onChange = {handleForm}/><br />
                    </div>

                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Username</p>
                    <input className = "" type = "text" name = "name" onChange = {handleForm}/><br />
                    </div>

                    <div className = "mt-3 ml-5">
                    <p className = " removemargin mb-1">Password</p>
                    <input className = "" type = "password" name = "password" onChange = {handleForm}/>
                    </div>

                    <div className = "mt-4 text-center"> 
                    
                        <Button className = "custom-create" variant="" type = "submit" onClick = {submitAdmin}>Submit</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>

        </div>
    )
}

export default CreateAdmin 