import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../dashboardhome/checkoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jwq6GBjxNtMfEn2xYNkA9Yr1bffRjkIu1NhSmXnneB7nF4Rqx90F6g1342Z66neFNqUtHYtXWH75FatQW6lJp7H00XuVZBFP0')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        // fetch(`https://intense-gorge-28690.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    // console.log(appointmentId);
    return (
        <div>
            <h3>Payment here for {appointment.patientName} for {appointment.serviceName}</h3>
            <h4>Pay: $ {appointment.price}</h4>
            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}>

                    </CheckoutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;