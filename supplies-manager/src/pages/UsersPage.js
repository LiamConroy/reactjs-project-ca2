import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css';


const SalesPage = (props) => {

    const [sales, setSales] = useState({}) 

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


if (!sales) return null
    
for (const [key, value] of Object.entries(sales.customer)){
    console.log(`${key}: ${value}`);
}
// sales.customer.map(customer => {
//     return(
//         <>
//           <tbody>
//               <tr>
//                   <td>{ customer.gender }</td>
//               </tr>
//           </tbody>
//         </>


//     )
// })


    return(

        <div className = "container">
        <div className = "mt-3">

        <div className = "d-flex justify-content-center">
            <div className = "col-lg-10">
            
                <div className = "col-lg-5 float-left">
                    <div className = "d-inline">
                    <h3 className = "">Sales</h3>
                    </div>
                </div>
                    
                <div className = "col-lg-5 float-left">
                    <div className = "d-inline">

                    <Link to = "create">
                    <Button variant = "success" className = "textColor bgColor">Create</Button>
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
            
                    {/* { userInfoList } */}

                    { sales.customer.gender }
            </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SalesPage