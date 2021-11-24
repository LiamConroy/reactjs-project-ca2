import axios from "axios"
import { useState } from 'react';
const LogIn = () => {

    const [login, setLogin] = useState({});

    const loginHandler = (e) => {
      
        setLogin(prevState => ({
          ...prevState,
          [e.target.name]:  e.target.value      
        }))
      }
      
      const submitLogin = () =>{
        console.log(login)
      
        axios.post('https://festivals-api.herokuapp.com/api/users/login', {
          email: login.email,
          password: login.password
        })
            .then(response => {
              console.log(response.data.token)
              localStorage.setItem('token',response.data.token )
            })
            .catch(err => console.log(err))
      }
    return(
        <div className = "container">

        <div className = "d-flex justify-content-xl-center">        
            <div className = "mt-5 cardStyle">
            <div>
                <h4 className = "nomargin">Sign in </h4> 
                <h5 className = "nomargin">To manage your sales</h5> 
            </div>

                <div className = "float-left">
                    <div className = "mt-2">
                    <input className = "" type = "text" name = "email" onChange={loginHandler}/><br />
                    </div>

                    <div className = "mt-2 ml-5">
                    <input className = "" type = "password" name = "password" onChange={loginHandler}/>
                    </div>

                    <div className = "mt-2"> 
                        <button onClick={submitLogin} type = "submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      

        </div>
        
    )
}

export default LogIn