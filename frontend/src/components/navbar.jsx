import { AppBar, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { DrawerContext } from "../contexts/drawer.context";
import {ListItemButton,ListItemText,Drawer,List,Button,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";


const Navbar = () => {

    //states
    const[tab, setTab]= useState('home');

    //importing drawer context
    const {openDrawer,drawer,closeDrawer}=useContext(DrawerContext);

    //importing cart context;
    const {cart}= useContext(CartContext);

    //initializing navigation
    const navigate= useNavigate();

    //dialogue state;
    const [dialog, setDialog]=useState(false);

    //paying function;
    const handlePay=()=>{
        navigate('/pay');
        setDialog(false);
    }

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
                        <Tabs value={tab} onChange={(event,index)=>setTab(index)} textColor='primary'>
                            <Tab label='HOME' value='home'/>
                            <Tab label='ABOUT US' value='about'/>
                        </Tabs>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={()=>setDialog(true)}>
                            <ShoppingCartIcon color='primary'/>
                            <Typography color='secondary'>{cart.length}</Typography>
                        </IconButton>
                    </Grid>
                </Grid>
             </Toolbar>
         </AppBar>
         <Drawer
            anchor='left'
            open={drawer}
            >
                <List>
                   <ListItemButton  divider onClick={closeDrawer}>
                        <ListItemText><Typography sx={{fontSize:70,display:'flex',justifyContent:'end',fontStyle:'italic'}}>&times;</Typography></ListItemText>
                   </ListItemButton >
                    <Button variant='contained'color='primary'
                    sx={{margin:6}} 
                    onClick={()=>navigate('/login')}
                    >Admin Login</Button>
                </List>
            </Drawer>
            <Dialog open={dialog}>
                <DialogTitle>
                    <Typography sx={{fontFamily:'monospace'}}>Shopping Cart</Typography>
                </DialogTitle>
                <DialogContent>
                    {cart && cart.map(item=>(
                        <List key={item.id}>
                            <ListItemText>{item.description}</ListItemText>
                            <ListItemText>Ksh.{item.price}</ListItemText>
                        </List>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button variant='contained'onClick={handlePay}>Pay using mpesa</Button>
                </DialogActions>
            </Dialog>
        </>
      );
}
 
export default Navbar;