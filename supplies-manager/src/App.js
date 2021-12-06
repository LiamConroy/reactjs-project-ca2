import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/navTop.js';
import NavLeft from './components/navLeft';
import 'bootstrap/dist/css/bootstrap.css'
import LogIn from './pages/LogIn';
import CreateAdmin from './pages/CreateAdmin';
import CreateSale from './pages/CreateSale';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import SingleSale from './pages/SingleSale';




function App() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuthenticated(true)
    }
  },[])

  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth)
    if(auth){
      console.log(authenticated)
      localStorage.setItem('token', token)
    }
    else {
      console.log(authenticated)
      localStorage.removeItem('token')
    }
    
  }
  return (
     <Router>

<NavLeft />
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
      <div className = "container">
      
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sales" element={<SalesPage />}></Route>
          <Route path="/sales/:id" element={<SingleSale />}></Route>
          <Route path="/sales/create" element={<CreateSale />}></Route>
          <Route path="/admin/create" element={<CreateAdmin onAuthenticated={onAuthenticated} authenticated={authenticated}/>}></Route>
          <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
