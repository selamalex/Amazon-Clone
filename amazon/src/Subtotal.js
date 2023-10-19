import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

 function Subtotal() {
    const [{basket}, dispatch]= useStateValue(); 
    const history=useNavigate();
    const getBasketTotal= (basket)=>
    basket?.reduce((amount, item)=> Number(item.price)+ Number(amount),0);

    return (
        <div className='mainDiv'>
            <CurrencyFormat renderText={(value)=>(
                <div>
                    <p>
Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input className='subtotal-input' type='checkbox'/> This order contains a gift
                    </small>
                    <Link to="/payment">
                    <button className='check-btn'> Proceed to Checkout </button>
                    </Link>
                    </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
        </div>
    );
}

export default Subtotal;
