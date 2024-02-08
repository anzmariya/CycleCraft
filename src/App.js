import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Allbikes from './pages/Allbikes';
import Bookings from './pages/Bookings';
import Header from './components/Header';
import Footer from './components/Footer';
import AddBikes from './pages/AddBikes';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDash from './pages/admin/AdminDash';
import Bikes from './pages/admin/Bikes';
import UserDash from './pages/UserDash';
import Viewbike from './pages/Viewbike';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/admin/AdminLogin';
import VerticalTabs from './pages/admin/VerticalTabs';
import Users from './pages/admin/Users';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/login' element={<Register login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/all-bikes' element={<Allbikes/>}></Route>
        <Route path='/bookings' element={<Bookings/>}></Route>
        <Route path='/add-bikes' element={<AddBikes/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin/dashboard' element={<VerticalTabs/>}></Route>
        <Route path='/admin-bikes' element={<Bikes/>}></Route>
        <Route path='/user/dashboard' element={<UserDash/>}></Route>
        <Route path='/bike/bike-view' element={<Viewbike/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/all-login' element={<Login/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
