import axios from "axios"
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LogIn = props => {

    const [login, setLogin] = useState({name: "Liamo", password: "secret"});
    let navigate = useNavigate();

    const loginHandler = (e) => {
      
        setLogin(prevState => ({
          ...prevState,
          [e.target.name]:  e.target.value      
        }))
      }
      
      const submitLogin = () =>{
        console.log(login)
      
        axios.post('http://localhost:8000/admins/login', {
          name: login.name,
          password: login.password
        })
            .then(response => {
              props.onAuthenticated(true, response.data.auth_token)
              console.log(response.data.auth_token)
              navigate('/home')
            })
            .catch(err => console.log(err))
      }

      // let linkHome

      // if(props.authenticated){
      //   linkHome = (
      //     "/home"
      //   )
      // }

    return(
        <div className = "container">

        <div className = "d-flex justify-content-xl-center">        
            <div className = "mt-5 cardStyle">
            <div>
                <h3 className = "nomargin headerWhite text-center">Sign in </h3>
                
                <h6 className = "nomargin headerWhite text-center">To manage your sales</h6>             
            </div>


            <div className = "d-flex justify-content-center mt-5">
                <div className = "">
                    <div className = "mt-2">
                    <p className = "paraWhite removemargin mb-1">Username</p>
                    <input className = "" type = "text" name = "name" onChange={loginHandler}/><br />
                    </div>

                    <div className = "mt-3 ml-5">
                    <p className = "paraWhite removemargin mb-1">Password</p>
                    <input className = "" type = "password" name = "password" onChange={loginHandler}/>
                    </div>

                    <div className = "mt-4 text-center"> 
                        <Button variant = "outline-light"onClick={submitLogin} type = "submit">Submit</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>
      

        </div>
        
    )
}

export default LogIn