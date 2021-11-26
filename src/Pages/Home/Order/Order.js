import { TextField, Typography,Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Order = ({singleProduct}) => {
    const{name,price}=singleProduct
    const{user,admin}=useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '',address:'',status:'pending' }
    const [bookingInfo, setBookingInfo] =useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        const order = {
            ...bookingInfo,
            price,
            serviceName: name,
            }
            fetch('https://young-chamber-31709.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                       alert("Congrats Your request is being Pending wait for approval!")
                    }
                });
    
            e.preventDefault();
        }

    return (
        <div>
            <Typography variant="body1" gutterBottom>Place Order Form</Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="customerName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                               <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                defaultValue={name}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                defaultValue={price}
                                size="small"
                            />
                         
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                defaultValue="Phone Number"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="address"
                                onBlur={handleOnBlur}
                                defaultValue="address"
                                size="small"
                            />
                            <TextField
                            hidden
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="status"
                                onBlur={handleOnBlur}
                                defaultValue="pending"
                                size="small"
                            />
                            { !admin && <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Place Order</Button>}
                        </form>
        </div>
    );
};

export default Order;