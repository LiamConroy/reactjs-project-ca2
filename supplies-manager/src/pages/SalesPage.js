import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SalesPage = () => {

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

        axios.delete(`http://localhost:8000/sales/${id}`,{
            headers: {
                "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg4MjEzNjQsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4iLCJpYXQiOjE2Mzg4MDY5NjR9.q7G933H2ndEjNUAaEfycEFkBTMovhGHvBKqyowss6_c`
            }
        })
        .then(response=> {
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    } 


if (!sales) return null
    
    const salesList = sales.map(sale => {

        return(
            <>

            
                {/* <Table bordered> */}
                    <tbody key = {sale._id}>
                    <tr>
                        <td><Link to = {`/sales/${sale._id}`}>{sale.customer.email}</Link></td>
                        <td>{sale.saleDate}</td>
                        <td></td>
                        <td>{sale.storeLocation}</td>

                        <td className = "removePadding"> 
                        
                        <Button variant="warning" type = "submit" >Edit</Button>
                        <Button variant="danger" type = "submit" onClick ={() => deleteSale(sale._id)}>Delete</Button>
                        
                        </td>

                    </tr>
                    </tbody>
                {/* </Table>  */}

                {/* <p>{sale.couponUsed}</p>
                <p>{sale.saleDate}</p> */}
            {/* </div> */}

            </>

        )
    })



    return(
        <div className = "container">
        <div className = "mt-3">

        <div className = "d-flex justify-content-center">
            <div className = "col-lg-10">
            
                <div className = "col-lg-5">
                    <div className = "d-inline">
                    <h3>Sales</h3>
                    </div>
                    
                    <div className = "d-inline">

                    <Link to = "create">
                    <Button variant = "success">Create</Button>
                    </Link>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPage