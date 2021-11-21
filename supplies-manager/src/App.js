import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import LogIn from './pages/LogIn';
import CreateAdmin from './pages/CreateAdmin';
import CreateSale from './pages/CreateSale';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import SingleSale from './pages/SingleSale';




function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sales" element={<SalesPage />}></Route>
          <Route path="/sales/:id" element={<SingleSale />}></Route>
          <Route path="/sales/create" element={<CreateSale />}></Route>
          <Route path="/admin/create" element={<CreateAdmin />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
