import { Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from 'react-router'
import { useState} from "react"

// import { useState } from 'react';
import '../style.css'

const CreateSale = () => {

    let navigate = useNavigate()

    const [form, setForm] = useState({})

    const handleForm = e => {

        setForm(prevState => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))
    
    }

    const submitSale = () => {

        // let token = localStorage.getItem('token')

        axios.post("http://localhost:8000/sales", form, {
            headers: {
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg4MjEzNjQsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4iLCJpYXQiOjE2Mzg4MDY5NjR9.q7G933H2ndEjNUAaEfycEFkBTMovhGHvBKqyowss6_c`
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
                <h3 className = "nomargin text-center">Create Sale</h3>
                     
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "">
                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Store Location</p>
                    <input className = "" type = "text" name = "storeLocation" onChange = {handleForm}/><br />
                    </div>

                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Coupon Used</p>
                    <input className = "" type = "text" name = "couponUsed" onChange = {handleForm}/><br />
                    </div>

                    <div className = "mt-3 ml-5">
                    <p className = " removemargin mb-1">Purchase Method</p>
                    <input className = "" type = "text" name = "purchaseMethod" onChange = {handleForm}/>
                    </div>

                    <div className = "mt-4 text-center"> 
                    
                        <Button variant="success" type = "submit" onClick = {submitSale}>Submit</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>

        </div>
    )
}

export default CreateSale