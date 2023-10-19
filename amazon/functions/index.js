// const functions= require('firsebase-functions');
const express= require('express');
const cors= require('cors');
const stripe = require ('stripe')(
    'sk_test_51NzZfKBFyxamoQUydhcy9QsD0rQ0fXif3DWiS6KDBZL7gs43MRc7Mk1TBm3azg3Z02GYI4OSR3jKT4lFMwUZobP900m6vxMW7Q',
);
const app= express();
app.use(cors({origin: true}));
app.use(express.json());
app.get('/', (request,response)=>response.status(200).send('Hello world'));
app.post('/payments/create',async(request,response)=>{
    const total= request.query.total;
    console.log('Payment Request Recieved for this this amount>>>', total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount: total,
        currency: 'USD',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

port=6005;

app.listen(port,(error,response) => {
    if(error){
        console.log(error.message);
    }
    else{
        console.log(`Listening ${port}`);
    }
});
