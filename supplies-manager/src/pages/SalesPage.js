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
    })


if (!sales) return null
    
    const salesList = sales.map(sale => {

        return(
            <>

            {/* <div key = {sale._id}> */}
                {/* <Table bordered> */}
                    <tbody>
                    <tr>
                        <td><Link to = {`/sales/${sale._id}`}>{sale.customer.email}</Link></td>
                        <td>{sale.saleDate}</td>
                        <td></td>
                        <td>{sale.storeLocation}</td>

                        <td className = "removePadding">
                        
                        <Button variant="warning" type = "submit">Edit</Button>
                        <Button variant="danger" type = "submit">Delete</Button>
                        
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
            <h3>Sales</h3>
        
        <div className = "col-lg-10">
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
    )
}

export default SalesPage