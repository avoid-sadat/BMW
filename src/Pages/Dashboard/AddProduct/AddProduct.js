import { Container, Typography, TextField, Button,TextareaAutosize, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useHistory } from 'react-router-dom';

const AddProduct = () => {
   const [loginData,setLoginData]=useState();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
    
       fetch('https://young-chamber-31709.herokuapp.com/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added the product.')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Add Product</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Product Code"
                            name="key"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Product Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        name="des"
                        type="text"
                        onBlur={handleOnBlur}
                        placeholder="Description"
                        style={{ width: 430 }}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Price"
                            type="text"
                            name="price"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Image Url"
                            type="text"
                            name="img"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                    </form>
            </Grid>
            </Grid>
        </Container>
      
    );
};

export default AddProduct;