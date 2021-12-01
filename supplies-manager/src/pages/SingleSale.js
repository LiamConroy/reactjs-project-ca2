import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'


const SingleSale = () => {
    let { id } = useParams()
    const [sale, setSale] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/sales/${id}`)
        .then(response=> {
            console.log(response.data.sale)
            setSale(response.data.sale)
        })
        .catch(err =>{
            console.log(err)
        })
    })


    if(!sale) return null

    const itemList = sale.items.map(item => {
        return(
            <>
              <tbody>
                  <tr>
                      <td>{ item.name }</td>
                      <td> ${ item.price.$numberDecimal }</td>
                      <td>{ item.quantity }</td>
                  </tr>
              </tbody>
            </>


        )
    })

    return (
        <div className = "container">
        <div className = "d-flex justify-content-xl-center">        
        <div className = "mt-5 cardStyleAlt">
        <div>
            <h3 className = "nomargin">Sales Id: {id}</h3>
                 
        </div>


        <div className = "d-flex justify-content-center mt-5">
            <div className = "">
                <div className = "mt-2 mb-1">
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

                    { itemList }
                </Table>

                <div className = "">
                <Button className = "pl-5" variant ="warning" type = "submit">Edit</Button>
                <Button className = "ml-5" variant ="danger" type = "submit">Delete</Button>
                </div>
 
            </div>

            <div>
                
            </div>

            </div>

        </div>
    </div>

    </div>
    )
  }
  
  export default SingleSale