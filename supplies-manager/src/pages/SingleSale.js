import { useParams, Link } from 'react-router-dom'
import axios from '../config/index.js'
import '../style.css';
import { useEffect, useState } from 'react'
import { Table, Button,ButtonGroup } from 'react-bootstrap'


const SingleSale = () => {
    let { id } = useParams()
    const [sale, setSale] = useState(null)

    useEffect(() => {
        axios.get(`/sales/${id}`)
        .then(response=> {
            console.log(response.data.sale)
            setSale(response.data.sale)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [id])


    if(!sale) return null

    const itemList = sale.items.map(item => {
        return(
            
            <>
              <tbody key = {item._id} className = "">
                  <tr className = "col-back border-style">
                      <td>{ item.name }</td>
                      {/* <td> { item.price.$numberDecimal }</td> */}
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
                <Table bordered size="">
                    <thead className = "table-back border-color headingsWhite">
                        <tr>
                            <th>Name</th>
                            {/* <th>Price</th> */}
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    { itemList }
                </Table>

                <ButtonGroup className = "floatRight border-style">
                    <Link className = "text-link" to = {`/sales/${sale._id}/edit`}><Button variant="" className = "custom-edit" type = "submit" >Edit</Button></Link>
                    <Button className = "ml-5 custom-delete" variant ="" type = "submit">Delete</Button>
                </ButtonGroup>
               
 
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