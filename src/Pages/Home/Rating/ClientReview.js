import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShowReview from './ShowReview';

const ClientReview = () => {
    const [reviews, setReview]=useState([]);
    useEffect(()=>{
        fetch('https://young-chamber-31709.herokuapp.com/review')
        .then(res => res.json())
            .then(data => {
                // setProducts(data);
                setReview(data);
            });
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Our Customer Review
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                    reviews.map(review=><ShowReview
                        key={review._id}
                        review={review}
                        ></ShowReview>)
               }
            </Grid>
        </Container>
    </Box>
    );
};

export default ClientReview;
