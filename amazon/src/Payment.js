import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import axios from './axios';
import { db } from './firebase';


const promise=loadStripe();
 function Payment() {
    const [{ basket ,user}, dispatch] = useStateValue();
const getBasketTotal= (basket) => basket?. reduce ((amount, item)=> Number(item.price) +Number(amount), 0);

    const stripe = useStripe();
    const elements= useElements();
    const history=useNavigate();

const [error, setError]= useState(null);
const [disabled, setDisabled]= useState(true);
const [succeeded, setSucceeded]= useState(false);
const [processing, setProcessing]= useState('');
const [clientSecret, setClientSecret]= useState(true);

useEffect(()=>{
    const getClientSecret= async() =>{
        const response= await axios ({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket)*100}`,
        });
        setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
}, [basket]);
console.log('The secret is>>>', clientSecret);


const handleSubmit= async(event)=>{
event.preventDefault();
setProcessing(true);
const payload = await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card: elements.getElement(CardElement),
    },
}).then(({paymentIntent})=>{
    console.log("starting");
    db.collection('users')
    .doc(user?.uid).collection('orders')
    .doc(paymentIntent.id)
    .doc(paymentIntent.id)
    .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
    });
    console.log("ending");

setSucceeded(true);
setError(null);
setProcessing(false);
dispatch({
    type:'EMPTY-BASKET',
});
history("/orders");


});

}
const handleChange= (event)=>{
    setDisabled(event.empty);
    setError(event.error? event.error.message: '');

};
 
    return (
        <div className='paymentProceed'>
            <div className='payment_nav'>
                <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            </div>
            <div className='address-displayer'>
                <div className='deliverInfo'> 
                    <h2>Delivery Address</h2>
                </div>
                <div >
                    <p>{user?.email}</p>
                    <p> 123 React Lane</p>
                    <p>Chicago, IL</p>
                </div>
            </div>
            <div>

                <h2 className='Review-items'> Review items and delivery</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                ))};
            </div>
            <div className='payment-method-section'>
                <div>
                    <h2 className='payment-method'>Payment Method</h2>
                </div>
                <div>
                 <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <CurrencyFormat 
                    renderText={(value)=> <h3>Order Total: {value}</h3>}
                     decimalScale={2}
                     value={getBasketTotal(basket)}
                     displayType={'text'}
                     thousandSeparator={true}
                     prefix={'$'}/>
                     <button disabled={processing || disabled|| succeeded}>
                        <span>{processing?<p>Processing</p>: 'Buy Now'}
                            </span> </button>
                            <div>
                            {error && <div>{error}</div>}
                            </div>
                            
                 </form> 
                </div>

            </div>
        </div>
    );
};

export default Payment;
 