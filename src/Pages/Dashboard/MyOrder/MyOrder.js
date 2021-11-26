import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Grid } from '@mui/material';


const MyOrder = () => {
    const [orders,setOrders]=React.useState([]);
    const {user} =useAuth();

    React.useEffect(()=>{
        fetch('https://young-chamber-31709.herokuapp.com/orders/')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[orders]);
    //Delect Order
    const handleDeleteOrders = id=>{
      const url =`https://young-chamber-31709.herokuapp.com/orders/${id}`;
      fetch(url,{
          method: 'DELETE'
      })
      .then()
      .then(data =>{
          if(data.deletedCount>0){
              alert('Cancel Order');
              const remainigOrders = orders.filter(orders=>orders._id !==id)
              setOrders(remainigOrders);
          }
      })
  }
    const orderr =orders.filter(order=>order.email==user.email);

    return (
     <Grid item xs={12} md={8}>
       <TableContainer component={Paper}>
        {orderr && <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Product Price</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderr.map((orderrs) => (
          //  console.log(orderrs)
              <TableRow
                key={orderrs._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {orderrs.customerName}
                </TableCell>
                <TableCell align="right">{orderrs.serviceName}</TableCell>
                <TableCell align="right">{orderrs.price}</TableCell>
                <TableCell align="right">{orderrs.phone}</TableCell>
                <TableCell align="right">{orderrs.address}</TableCell>
                <TableCell align="right">{orderrs.status}</TableCell>
                <TableCell align="right"><button onClick={()=>{
                      if(window.confirm('Are you sure you want to Delete it?')){
                        handleDeleteOrders(orderrs._id)
                      }
                }
                }>Cancel Order</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>}
      </TableContainer>

     </Grid>
    );
};

export default MyOrder;