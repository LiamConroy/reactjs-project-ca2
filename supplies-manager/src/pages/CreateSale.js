import { Button } from 'react-bootstrap'
import axios from '../config/index.js'
import { useNavigate } from 'react-router'
import { useState} from "react"

// import { useState } from 'react';
import '../style.css'

const CreateSale = (props) => {

    let navigate = useNavigate()

    const [form, setForm] = useState({})
    // const [itemForm, setItemForm] = useState([])

    // const handleItemForm = e => {

    //     setItemForm(prevState => ({
    //       ...prevState,
    //       [e.target.name] : e.target.value
    //     }))        
    // }

    const handleForm = e => {
        
        setForm(prevState => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))      
        
        console.log(form)
    }

    



    const submitSale = () => {

        let auth_token = localStorage.getItem('auth_token')

        axios.post("/sales", 
          
        {
            storeLocation: form.storeLocation,
            couponUsed: form.couponUsed,
            purchaseMethod: form.purchaseMethod,
            items: {
                name: form.name,
                tags: form.tags,
                price: form.price,
                quantity: form.quantity
            }
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

                    <div className = "mt-3 mb-0">
                        <h5>Item:</h5>
                    </div>

                    <div className = "ml-5 mt-2">
                    <p className = " removemargin mb-1">Item Name</p>
                    <input className = "" type = "text" name = "name" onChange = {handleForm}/>
                    </div>
                    <div className = "ml-5 mt-2">
                    <p className = " removemargin mb-1">Item Tag</p>
                    <input className = "" type = "text" name = "tags" onChange = {handleForm}/>
                    </div>

                    <div className = "ml-5 mt-2">
                    <p className = " removemargin mb-1">Price</p>
                    <input className = "" type = "text" name = "price" onChange = {handleForm}/>
                    </div>

                    <div className = "ml-5 mt-2">
                    <p className = " removemargin mb-1">Quantity</p>
                    <input className = "" type = "text" name = "quantity" onChange = {handleForm}/>
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