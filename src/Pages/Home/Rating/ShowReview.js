import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import PlaceOrder from './../PlaceOrder/PlaceOrder';
import { useHistory } from 'react-router';

const ShowReview = (props) => {
    const {customerName,des,rating} = props.review;
    return (
        <>
        <Grid item xs={4} sm={4} md={4}>
           <Card sx={{ minWidth: 275, border: 2, boxShadow: 3 }}>
               <CardContent>
                   <Typography variant="h5" component="div">
                       {customerName}
                   </Typography>
                   <Typography variant="h6" component="div">
                       "Say's"
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                       {des}
                   </Typography><br></br>
                   <Typography variant="h6" color="text.secondary">
                       <Rating name="read-only" defaultValue={rating}></Rating>({rating})
                   </Typography> 
               </CardContent>
           </Card>
       </Grid>
       </>
    );
};

export default ShowReview;