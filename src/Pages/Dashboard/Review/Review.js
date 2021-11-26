import { Container, Typography, TextField, Button,TextareaAutosize, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} =useAuth();
    const initialInfo ={ customerName: user.displayName }
    const [loginData,setLoginData]=useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
    
       fetch('https://young-chamber-31709.herokuapp.com/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Thanks For Your Review')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={8} md={6} sx={{ mt: 8 }}>
                <Typography variant="body1" gutterBottom>Please Review Our Product</Typography>
                <form onSubmit={handleLoginSubmit}>
                     <TextField
                     disabled
                      sx={{ width: '75%', m: 1 }}
                      id="outlined-size-small"
                      name="customerName"
                      onBlur={handleOnBlur}
                      defaultValue={user.displayName}
                      size="small"              
                     />
                     <TextField
                      sx={{ width: '75%', m: 1 }}
                      id="outlined-size-small"
                      name="rating"
                      onBlur={handleOnBlur}
                      placeholder="Please Rating product 0-5"
                      size="small"              
                     />
                           
                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    name="des"
                    type="text"
                    onBlur={handleOnBlur}
                    placeholder="Description"
                    style={{ width: '100%' }}
                    />
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Submit</Button>
                </form>
             </Grid>
        </Grid>
    </Container>
    );
};

export default Review;