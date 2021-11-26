import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Ecplorer from './Ecplorer';
import Navigation from '../../Shared/Navigation/Navigation'

const Explore = () => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(()=>{
        fetch('https://young-chamber-31709.herokuapp.com/products')
        .then(res => res.json())
            .then(data => {
                // setProducts(data);
                setDisplayProducts(data);
            });
    },[])
    return (
 <>
 <Navigation></Navigation>
    <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
               Our Product
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   displayProducts.map(product=><Ecplorer
                    key={product.key}
                    product={product}
                   ></Ecplorer>)
               }
            </Grid>
        </Container>
    </Box>
 </>
    );
};

export default Explore;