import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, image, title, price, rating}){
    const [{basket}, dispatch]= useStateValue();
    const removeFromBasket= ()=>{
        dispatch({
            type:'REMOVE-FROM-BASKET',
            id:id,
        })
    };
    return (
        <div>
            <div className='checkoutP '>
           <div className='img-left'>
<img className='img-checkout' src={image}/>
           </div>
           
           <div className='items-right'>
<p className='checkoutP-title'>{title}</p>
<p className='checkoutP-info'>
    <small>$</small>
    <strong>{price}</strong>
</p>
<div className='checkoutP-rating'>
{Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐️</p>
                        ))
                    }
</div>
<button className='remove-btn' onClick={removeFromBasket}>Remove this items</button>
           </div>
           </div>
        
        </div>
    );
}

export default CheckoutProduct;
