import axios from '../config/index.js'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import '../style.css';
import 'bootstrap/dist/css/bootstrap.css'


const SalesPage = (props) => {

    const [sales, setSales] = useState(null) 

    useEffect(() => {
        axios.get("/sales")
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

        axios.delete(`/sales/${id}`,{
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
                    <tr className = "border-style text-center">
                        <td className = "col-back"><Link to = {`/sales/${sale._id}`}>{sale._id}</Link></td>
                        <td className = "col-back">{sale.saleDate}</td>
                        {/* <td></td> */}
                        <td className = "col-back">{sale.storeLocation}</td>


                       
                        <td className = "text-center removePadding"> 
                            <ButtonGroup className = "" size = "lg">
                                <Button variant="" className = "custom-edit" type = "submit" onClick = {() => editSale(sale._id)}>Edit</Button>
                                <Button variant="" className = "custom-delete" type = "submit" onClick ={() => deleteSale(sale._id)}>Delete</Button>
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
            <div className = "col-lg-9">
                

        <div className = "col-md-12">
            <div className = "col-sm-6 removeMargin">
                    <h3 className = "">Sales</h3>
            </div>

            <div className = "col-sm-6">
            
            </div>    
        </div>

             <Table bordered size="sm" variant="" className = ""> 
                 <thead className = "table-back border-color">
                    <tr className = "headingsWhite">
                        <th>Order ID</th>
                        <th>SaleDate</th>
                        {/* <th>NumItems</th> */}
                        <th>StoreLocation</th>
                        <th width = "16%">Options</th>
                    </tr>
                </thead>

            {/* <table className = "Table">
                <thead className = "thead-dark">
                    <tr>
                        <th scope = "col">CustEmail</th>
                        <th scope = "col">SaleDate</th>
                        <th scope = "col">NumItems</th>
                        <th scope = "col">StoreLocation</th>
                        <th scope = "col">Options</th>
                    </tr>
                </thead>
            </table>  */}
            
                    { salesList }
            </Table>
            <div className = "floatRight ">
                <Link to = "create">
                    <Button size = "lg" variant = "" className = "custom-create">Create</Button>
                </Link>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SalesPage