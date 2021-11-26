import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const Navigation = () => {
    const{user,logout,admin}=useAuth();
    return (
        <>
 <Navbar expand="lg sm" bg="dark" variant="dark">
     <Container>
         <Navbar.Brand>BMW SHOP</Navbar.Brand>
           <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
        <NavLink style={{textDecoration: 'none', color: 'white'}}  to="/home">
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                <Button color="inherit">Explore</Button>
            </NavLink>
            { user?.email?
              <Box>
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                  <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logout} >Logout</Button>
            </Box>
                :<Nav.Link as={Link} to="/login">Login</Nav.Link>}
             {user.email && <Navbar.Text>
                Signed in as: {user.displayName || user.email}
                </Navbar.Text>}
               
        </Navbar.Collapse>
    </Container>
</Navbar>
     </>

    );
};

export default Navigation;