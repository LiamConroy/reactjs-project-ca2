import axios from 'axios'
import { useEffect, useState } from 'react'
const SalesPage = () => {

    const [sales, setSales] = useState([]) 

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
            <div key = {sale._id}>
                <p>{sale.couponUsed}</p>
                <p>{sale.saleDate}</p>
            </div>
        )
    })



    return(
        <div className = "container">
            <div className = "mt-3">
                <h3>Sales</h3>
                { salesList }
            </div>
        </div>
    )
}

export default SalesPage