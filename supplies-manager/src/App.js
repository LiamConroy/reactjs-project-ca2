import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react'
import './style.css';
import Navbar from './components/navTop.js';
import NavLeft from './components/navLeft';
import 'bootstrap/dist/css/bootstrap.css'
import LogIn from './pages/LogIn';
import CreateAdmin from './pages/CreateAdmin';
import CreateSale from './pages/CreateSale';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import SingleSale from './pages/SingleSale';
import EditSale from './pages/SalesEdit';
import UsersPage from './pages/UsersPage';




const App = () => {

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&family=Rokkitt&display=swap');
  </style>

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth_token'))
    {
      setAuthenticated(true)
    }
  }, [])

  const onAuthenticated = (auth, auth_token) => {
    setAuthenticated(auth)
    if(auth){
      localStorage.setItem('auth_token', auth_token)
    }
    else {
      localStorage.removeItem('auth_token')
    }
    
  }
  let protectedRoutes
  if(authenticated) {
    protectedRoutes = (
      <>
      <Route path="/sales/:id/edit" element={<EditSale />}></Route>
      <Route path="/sales/:id" element={<SingleSale />}></Route>
      <Route path="/sales/create" element={<CreateSale />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      </>
    )
  }

  

  return (
     <Router>

<NavLeft />
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <div className = "container">
      <Routes>
          <Route path="/sales/users" element={<UsersPage />}></Route>
          <Route path="/sales" element={<SalesPage />}></Route>      
          <Route path="/admins/register" element={<CreateAdmin onAuthenticated={onAuthenticated} authenticated={authenticated}/>}></Route>
          <Route path="/" element={<LogIn onAuthenticated={onAuthenticated} authenticated={authenticated}/>}></Route>
          {protectedRoutes}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
