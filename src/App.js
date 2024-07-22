import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Layout from './Components/Layout/Layout';
import Dasboard from './Components/Dasboard/Dasboard';
import Booking from './Components/Booking/Booking';
import Cars from './Components/Cars/Cars';
import Users from './Components/Users/Users';
import Invoices from './Components/Invoices/Invoices';
import Agreements from './Components/Agreements/Agreements';
import "../src/Components/MainPage/MainpageLayout.css"
import MainpageLayout from './Components/MainPage/MainpageLayout';
import Roles from './Components/Roles/Roles';
import AddVehicle from './Components/AddVehicle/AddVehicle';
const App = () => {
  return (
    <MainpageLayout>
      <Routes>
        <Route path="/" exact element={<Dasboard/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/roles" element={<Roles/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/agreements" element={<Agreements/>} />
        <Route path="/add-vehicle" element={<AddVehicle/>} />
      </Routes>
    </MainpageLayout>
  );
};

export default App;
