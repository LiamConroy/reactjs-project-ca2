import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'

const SingleSale = () => {
    
    let { id } = useParams()
    // const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/sales/${id}`)
        .then(response=> {
            console.log(response.data.sale)
            // setItem = (response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })

    // if(!item) return null

    // const listItems = item.maps(item => {
    //    return (
    //     <div>
    //     <p>{item.name}</p>
    //     </div>           
    //    )
        
    // })

    

    return(
        <div className = "container">
        <div className = "d-flex justify-content-xl-center">        
        <div className = "mt-5 cardStyleAlt">
        <div>
            <h3 className = "nomargin">Sales Id: {id}</h3>
            <p>{sale.couponUsed}</p>
                 
        </div>


        <div className = "d-flex justify-content-center mt-5">
            <div className = "">
                <div className = "mt-2">
                <h3 className = "nomargin">Items Purchased </h3>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                </Table>
            </div>

            </div>

        </div>
    </div>

    </div>
    )
}

export default SingleSale