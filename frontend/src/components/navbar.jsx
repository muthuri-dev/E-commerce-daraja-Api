import {AppBar, Button, Drawer, Grid, IconButton, List, Tab, Tabs, Toolbar,Box, ListItemButton, ListItemIcon, ListItemText, Dialog, DialogTitle, Typography, DialogContent}from '@mui/material';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate= useNavigate();
    const[drawer, setDrawer]= useState(false);
    const[value, setValue]= useState();
    const [open, setOpen]= useState(false);
    const handleDrawer= function(){
        setDrawer(true);
    }

    const handleModal= function(){
        setOpen(true);
    }
    const handleAdmin = function(){
        navigate('/admin');
    }
    return ( 
        <div>
            <AppBar sx={{backgroundColor:'#0096FF'}}>
                <Toolbar>
                    <Grid container spacing={2} SX={{placeItems:'center'}}>
                        <Grid item xs={1}>
                           <IconButton onClick={handleDrawer} color='inherit'>
                               <DehazeOutlinedIcon/>
                           </IconButton>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={6}>
                            <Tabs value={value}textColor='inherit' indicatorColor='secondary'onChange={(e,val)=>setValue(val)}>
                                <Tab label='HOME'/>
                                <Tab label='CONTACTS'/>
                                <Tab label='ABOUT US'/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display='flex'>
                                <IconButton sx={{marginLeft:'auto', color:'white'}}>
                                    <ShoppingCartOutlinedIcon/>
                                </IconButton>
                            <Button variant='contained' color='success' sx={{display:'flex',marginLeft:3}}
                            onClick={handleModal}
                            >LOGIN</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
            anchor='left'
            open={drawer}
            sx={{width:window.innerWidth*0.75}}
            >
                <List>
                   <ListItemButton  divider onClick={()=>setDrawer(false)}>
                        <ListItemText>CLOSE  X</ListItemText>
                   </ListItemButton >
                    <ListItemButton divider onClick={()=>{navigate('/electronics')}}>
                        <ListItemIcon>
                            <ComputerOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText>Computers</ListItemText>
                    </ListItemButton>
                    <ListItemButton divider onClick={()=>{navigate('/fashions')}}>
                        <ListItemIcon>
                            <WomanOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText>Fashion</ListItemText>
                    </ListItemButton>
                    <ListItemButton divider onClick={()=>navigate('/furnitures')}>
                        <ListItemIcon>
                            <ChairOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText>Furniture</ListItemText>
                    </ListItemButton>
                    <ListItemButton divider onClick={()=>{navigate('/electronics')}}>
                        <ListItemIcon>
                            <ComputerOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText>Electronics</ListItemText>
                    </ListItemButton>
                    <Button variant='contained'color='primary'
                    sx={{margin:6}} onClick={handleAdmin}
                    >Admin Login</Button>
                </List>
            </Drawer>
            <Dialog open={open} sx={{ alignItems:'center'}}>
                <DialogTitle sx={{fontFamily:'monospace',display:'flex', justifyContent:'center'}}>
                    <Typography>LOGIN</Typography>
                </DialogTitle>
                <DialogContent>
                    <Button variant='contained'>LOGIN USING GOOGLE</Button>
                </DialogContent>
            </Dialog>
        </div>
     );
}
 
export default Navbar;