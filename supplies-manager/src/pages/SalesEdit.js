import { Button, Table } from 'react-bootstrap'
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

    const itemList = sale.items.map(item => {
        return(
            
            <>
              <tbody key = {item._id} className = "text center">
                  <tr className = "col-back border-style">
                      <td><input className = "custom-input" type = "text" name = "name" onChange = {handleForm} defaultValue = {item.name}/></td>
                      {/* <td><input className = "custom-input" type = "number" name = "$numberDecimal" step=".01" onChange = {handleForm} defaultValue = { item.price.$numberDecimal }/></td> */}
                      <td><input className = "custom-input" type = "number" name = "quantity" onChange = {handleForm} defaultValue = {item.quantity}/></td>
                  </tr>
              </tbody>
            </>
        // <div className = "floatRight">
        //     <div className = "ml-5 mt-2">
        //             <p className = " removemargin mb-1">Item Name</p>
        //             <input className = "" type = "text" name = "name" onChange = {handleForm} defaultValue = {item.name}/>
        //     </div>

        //         <div className = "ml-5 mt-2">
        //             <p className = " removemargin mb-1">Price</p>
        //             <input className = "" type = "text" name = "price" onChange = {handleForm}/>
        //         </div>

                    
              
        //      </div>
        )
    })

    

    const submitSale = () => {

        // let token = localStorage.getItem('token')

        axios.post(`http://localhost:8000/sales/${id}`, {
            storeLocation: form.storeLocation,
            couponUsed: form.couponUsed,
            purchaseMethod: form.purchaseMethod,
            items: {
                name: form.name,
                tags: form.tags,
                price: form.price,
                quantity: form.quantity
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
                <h3 className = "nomargin text-center">Edit Sale</h3>
                     
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "col-sm-10">

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
                     </div>
                    <div className = "mt-3 mb-0">
                        <h5>Items:</h5>
                    </div>

                    <Table bordered size="">
                    <thead className = "table-back border-color headingsWhite">
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    { itemList }
                </Table>

                    <div className = "floatRight"> 
                        <Button className = "custom-create" variant="" type = "submit" onClick = {submitSale}>Submit</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>

        </div>
    )
}

export default EditSale