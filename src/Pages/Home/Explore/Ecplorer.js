import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PlaceOrder from './../PlaceOrder/PlaceOrder';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Ecplorer = (props) => {
    const {_id,name,des,price,img}=props.product;
    const {admin} = useAuth();
    return (
        <>
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: '80%', height: '80%', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {des.slice(0,149)}
                </Typography><br></br>
                <Typography variant="h6" color="text.secondary">
                    {price}$
                </Typography>
                {!admin && <Link to={`placeOrder/${_id}`}>
                <Button sx={{ width: '75%', m: 1 }}  variant="contained">Buy Product</Button>
                </Link>} 
            </CardContent>
        </Card>
    </Grid>
    </>
    );
};

export default Ecplorer;