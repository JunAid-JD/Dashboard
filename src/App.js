import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import Automation from './components/Automation/Automation';
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import SmallNav from './components/Navigation/SmallNav';
import Home from './components/Home/Home';
import New from './components/New/New';
import Customer from './components/Customer/Customer';
import WorkOrder from './components/WorkOrder/WorkOrder';
import Maps from './components/Map/Map';
import Invoice from './components/Invoice/Invoice';
import Job from './components/Job/Job';
import Estimates from './components/Estimate/Estimate';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Reports from './components/Reports/Reports';
import MarketPlace from './components/MarketPlace/MarketPlace';
import Account from './components/Account/Account';
import Profile from './components/Profile/Profile'
import Update from './components/Update/Update'

const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedItem = localStorage.getItem("user");
    const parsedItem = JSON.parse(savedItem);
    console.log(parsedItem);
    setUser(parsedItem);
  }, []);

  const [toggle, settoggle] = useState(true);
  const toggleNav = () => {
    settoggle(!toggle);
  }
  return (
    <>
      {user == null ? (
        <>
          <Router>
            <Routes>
              <Route path="/Dashboard" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/GetStarted" element={<GetStarted />} />
              <Route path="/Automation" element={<Automation />} />
            </Routes>
          </Router>
        </>
      ) : (
        <>
          <Router>
            <div className="Dashboard">
              {toggle ? <Navigation /> : <SmallNav />}
              <div className="Main">
                <Header toggleNav={toggleNav} />
                <Routes>
                  <Route path="/Admin" element={<Home />} />
                  <Route path="/New" element={<New />} />
                  <Route path="/Customer" element={<Customer />} />
                  <Route path="/WorkOrder" element={<WorkOrder />} />
                  <Route path="/Maps" element={<Maps />} />
                  <Route path="/Invoice" element={<Invoice />} />
                  <Route path="/Job" element={<Job />} />
                  <Route path="/Estimates" element={<Estimates />} />
                  <Route path="/SocialMedia" element={<SocialMedia />} />
                  <Route path="/Reports" element={<Reports />} />
                  <Route path="/MarketPlace" element={<MarketPlace />} />
                  <Route path="/Account" element={<Account />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Update" element={<Update />} />
                </Routes>

              </div>
            </div>
          </Router>
        </>
      )}
    </>
  )
}

export default App
