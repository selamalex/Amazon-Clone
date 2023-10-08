import React from 'react';
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import amazon from '../src/Amazon.png';
import './Nav.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Nav() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    };
    return (
        <div>
            <div className='header'>
                <Link  to="/">
            <img className='header-logo' src={amazon} alt='Amazon logo'/>
           </Link>

            <div className='deliver-detail'>
            <div className='deliver-to'> Deliver to</div>
           <div className='location'>  <HiOutlineLocationMarker size='20px' className='location-icon' color='white'/>Ethiopia</div>
            </div>
            <div className='Selector'>
            <select name="all" className='ALL' id="cars">
  <option value="all">All</option>
  <option value="Arts">Arts & Crafts</option>
  <option value="Automotive">Automotive</option>
  <option value="Baby">Baby</option>
  <option value="Beauty">Beauty & personal care</option>
  <option value="Books">Books</option>
  <option value="Boy">Boy's fashion</option>
  <option value="Computers">Computers</option>
  <option value="Deals">Deals</option>
</select>
            </div>
            <div className='hearder-search'>
            <input className='search-button' typeof='text'></input>
            </div>
            <div className='search-button-div'>
<button className='search-click'> <FaSearch size='20px'/></button>
            </div>
            <Link to={!user && "http://localhost:3000/login"}>
            <div className='header-option1'>
                <button onClick={handleAuthentication} className='button-option1'>
<div className='header-optionLineOne'> Hello {!user? 'Guest':user.email}</div>
<div className='header-optionLineTwo'> {!user? 'Sign In':'Sign Out'}</div>
</button>
            </div>
            </Link>
            <div className='header-option2'>
            <button className='button-option'>
<div className='header-optionLineOne'> Returns</div>
<div className='header-optionLineTwo'> & Orders</div>
</button>
            </div>
            <div className='header-option3'>
            <button className='button-option'>
<div className='header-optionLineOne'> Your</div>
<div className='header-optionLineTwo'> Prime</div>
</button>
            </div>
            <Link to="/checkout">
            <div className='shoping-icon'>
                <button className='shop-icon'>
                <MdShoppingBasket size='30px' color='white'/>
                </button>
            </div>
            </Link>
            <span className='header-basketCount'> {basket.length} </span>
            </div>   
        </div>
    );
}

export default Nav;
 