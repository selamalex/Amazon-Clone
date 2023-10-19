import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import CheckO from './checkO';
import { auth } from './firebase';
const promise = loadStripe('pk_test_51NzZfKBFyxamoQUyUBibbb9HMCaMz3r0zavbreRKuJ1weHX2KlwLsSEZWRb566DmL1S7XIBQGobVM3MEZ3APgWvs009vrJwdzl');
function App() {
  const [{}, dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else{
        dispatch({
          type: 'SET_USER',
          user: null,

        });
      }
    });
   }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route
            path="/login"
            element={
              <>
               <Login/>
              </>
            }
          />
<Route
            path="/payment"
            element={
              <>
              <Elements stripe={promise}>
                <Nav/>
             <Payment/>
              </Elements>
              
              </>
            }
          />
        <Route
            path="/checkout"
            element={
              <>
                <Nav />
                <CheckO/>
              </>
            }
          />
<Route
            path="/orders"
            element={
              <>
                <Nav />
                <Home/>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home/>
              </>
            }
          />
 
        </Routes>

    </div>
    </Router>
   
  );
}

export default App;
