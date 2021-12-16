import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import '../style.css';
import 'bootstrap/dist/css/bootstrap.css'


const SalesPage = (props) => {

    const [sales, setSales] = useState(null) 

    useEffect(() => {
        axios.get("http://localhost:8000/sales")
        .then(response=> {
            console.log(response.data.listSales)
            setSales(response.data.listSales)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const deleteSale = (id) => {

        let auth_token = localStorage.getItem('auth_token')

        axios.delete(`http://localhost:8000/sales/${id}`,{
            headers: {
                "Authorization" : `Bearer ${auth_token}`
            }
        })
        .then(response=> {
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    let navigate = useNavigate();
    const editSale = (id) => {
        return(
            navigate(`/sales/${id}/edit`)
        )
    }

<>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

</>


if (!sales) return null
    
    const salesList = sales.map(sale => {

        return(
            <>

            
                    <tbody key = {sale._id}>
                    <tr>
                        <td><Link to = {`/sales/${sale._id}`}>{sale.customer.email}</Link></td>
                        <td>{sale.saleDate}</td>
                        <td></td>
                        <td>{sale.storeLocation}</td>


                       
                        <td> 
                            <ButtonGroup className = "" size = "lg">
                                <Button variant="warning" className = "textColor bgColor" type = "submit" onClick = {() => editSale(sale._id)}>Edit</Button>
                                <Button variant="danger" type = "submit" onClick ={() => deleteSale(sale._id)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                        
                    </tr>
                    </tbody>

            </>

        )
    })


    return(

        <div className = "container">
        <div className = "mt-3">

        <div className = "d-flex justify-content-center">
            <div className = "col-lg-10">


            <div className = "col-md-12">
                    <div className = "">
                    <h3 className = "">Sales</h3>
                    </div>
            </div>
                
                {/* <div className= "col-lg-5">
                    <div className = "d-inline">
                    
                    </div>
                </div> */}
            <Table bordered size="sm">
                <thead>
                    <tr>
                        <th>CustEmail</th>
                        <th>SaleDate</th>
                        <th>NumItems</th>
                        <th>StoreLocation</th>
                        <th width = "16%">Options</th>
                    </tr>
                </thead>
            
                    { salesList }
            </Table>
            <div className = "push-right">
                <Link to = "create">
                <Button size = "lg" variant = "success" className = "textColor bgColor">Create</Button>
                </Link>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SalesPage