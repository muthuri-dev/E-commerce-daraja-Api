import { AppBar, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { DrawerContext } from "../contexts/drawer.context";


const Navbar = () => {

    //states
    const[tab, setTab]= useState('home');

    //importing drawer context
    const {openDrawer}=useContext(DrawerContext);

    return (
        <>
         <AppBar sx={{backgroundColor:'lightgray',}}>
             <Toolbar>
                <Grid container sx={{display:'flex',justifyContent:'space-around'}}>
                    <Grid item>
                        <IconButton onClick={openDrawer}>
                            <ClearAllIcon color="primary"/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Tabs value={tab} onChange={(event,tabb)=>setTab(tabb)} textColor='primary'>
                            <Tab label='HOME' value='home'/>
                            <Tab label='ABOUT US'/>
                        </Tabs>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <ShoppingCartIcon color='primary'/>
                            <Typography color='secondary'>2</Typography>
                        </IconButton>
                    </Grid>
                </Grid>
             </Toolbar>
         </AppBar>
        </>
      );
}
 
export default Navbar;