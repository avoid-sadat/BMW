import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Grid, Typography } from '@mui/material';

const ManageProduct = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://young-chamber-31709.herokuapp.com/products')
        .then(res => res.json())
            .then(data => {
                // setProducts(data);
                setProducts(data);
            });
    },[products])
     //Delect Product
     const handleDeleteOrders = id=>{
        const url =`https://young-chamber-31709.herokuapp.com/products/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then()
        .then(data =>{
            if(data.deletedCount>0){
                alert('Are You Sure Delete The Product?');
                const remainigProducts = products.filter(products=>products._id !==id)
                setProducts(remainigProducts);
            }
        })
    }
    return (
        <Grid item xs={12} md={8}>
        <TableContainer component={Paper}>
            <Typography variant="h3">Number of Product: {products.length}</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell align="right">Product Name</TableCell>
               <TableCell align="right">Product Price</TableCell>
               <TableCell align="right">Action</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {products.map((product) => (
           //  console.log(orderrs)
               <TableRow
                 key={product._id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell align="right">{product.name}</TableCell>
                 <TableCell align="right">{product.price}</TableCell> 
                 <TableCell align="right"><button onClick={()=>{
                       if(window.confirm('Are you sure you want to Delete it?')){
                         handleDeleteOrders(product._id)
                       }
                 }
                 }>Delete Product</button></TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
 
      </Grid>
    );
};

export default ManageProduct;