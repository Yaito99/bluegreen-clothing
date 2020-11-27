import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({ price }) => {
    const stripeAmount = price * 100
    const key = 'pk_test_51HrRUfIaz93wvfBzm9nzLPTxvp7kkF65dEn4ifuvfQ40syAwqWSuML6ZLSuXhYfaCBARHZXeghAjIDoFhciXunrn00uTrBWSYC'
    const token = token =>{
        console.log(token)
        alert('Payment was successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name = 'BlueGreen Clothing'
        billingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total price is $${price}`}
        amount={stripeAmount}
        panelLabel='Pay Now'
        token={token}
        stripeKey={key}
        />
    )
}


export default StripeButton;