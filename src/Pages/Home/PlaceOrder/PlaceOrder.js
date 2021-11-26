import { Grid, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import{ Typography,Container} from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';


const PlaceOrder = () => {
    const { _id} = useParams();

    const [singleProduct,setSingleProduct]=useState({});
    useEffect(()=>{
        fetch(`https://young-chamber-31709.herokuapp.com/products/${_id}`)
        .then(res => res.json())
            .then(data => {
                // setProducts(data);
                setSingleProduct(data);
                
            });
    },[]);
    console.log(singleProduct)
    const{name,price,des,img}=singleProduct;
    const Style = {
        width:'100%',
        height: '100%',
      };
   
    return (
        <>
         <Navigation></Navigation>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}  md={6}>
                    <Paper item  xs={12}  md={4} elevation={3} sx={{ py: 5 }}>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        <img src={img} style={Style}/>
                        </Typography>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        Name: {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                        Description:  {des}
                        </Typography> 
                      <Typography variant="h4" display="block" gutterBottom>
                        Price:  {price} $
                        </Typography> 
                    </Paper>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Order
                    key={singleProduct._id}
                    singleProduct={singleProduct}></Order>
                </Grid>
            </Grid>    
    </Container>
    </>
    );
};

export default PlaceOrder;