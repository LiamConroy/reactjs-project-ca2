import axios from 'axios'
import { useEffect, useState } from 'react'
const SalesPage = () => {

    const [sales, setSales] = useState([]) 

    useEffect(() => {
        axios.get("http://localhost:8000/sales")
        .then(response=> {
            console.log(response.data)
            setSales(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })


if(!sales){
    var salesList = sales.map(sale => {
        return(
            <div>
                <p>{sale.listSales.couponUsed}</p>
                <p>{sale.listSales.saleDate}</p>
            </div>
        )
    })
}


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