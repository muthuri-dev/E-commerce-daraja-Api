import {Drawer, Grid, IconButton, List, ListItem}from '@mui/material';
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

const Navbar = () => {
    const[drawer, setDrawer]= useState(false);
    const handleDrawer= function(){
        setDrawer(true);
    }
    return ( 
        <div>
            <Grid container>
                <Grid item>
                    <IconButton onClick={handleDrawer}>
                        <DehazeOutlinedIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Drawer
            anchor='left'
            open={drawer}
            >
                <List>
                    <ListItem button>Learning drawer</ListItem>
                </List>
            </Drawer>
        </div>
     );
}
 
export default Navbar;