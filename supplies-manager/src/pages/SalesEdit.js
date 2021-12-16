import { Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from "react"

// import { useState } from 'react';
import '../style.css'

const EditSale = () => {

    let navigate = useNavigate()
    let { id } = useParams()

    const [form, setForm] = useState({})
    const [sale, setSale] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/sales/${id}`)
        .then(response=> {
            console.log(response.data.sale)
            setSale(response.data.sale)
            setForm(response.data.sale)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [id])


    if(!sale) return null

    const handleForm = e => {

        setForm(prevState => ({
          ...prevState,
          [e.target.name] : e.target.value
        }))
    
    }

    

    const submitSale = () => {

        // let token = localStorage.getItem('token')

        axios.post(`http://localhost:8000/sales/${id}`, form)    

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
                <h3 className = "nomargin text-center">Edit Sale</h3>
                     
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "">
                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Store Location</p>
                    <input className = "" type = "text" name = "storeLocation" onChange = {handleForm} defaultValue = {sale.storeLocation}/><br />
                    </div>

                    <div className = "mt-2">
                    <p className = " removemargin mb-1">Coupon Used</p>
                    <input className = "" type = "text" name = "couponUsed" onChange = {handleForm} defaultValue = {sale.couponUsed}/><br />
                    </div>

                    <div className = "mt-3 ml-5">
                    <p className = " removemargin mb-1">Purchase Method</p>
                    <input className = "" type = "text" name = "purchaseMethod" onChange = {handleForm} defaultValue = {sale.purchaseMethod}/>
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

export default EditSale