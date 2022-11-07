import { Drawer, List, ListItemText } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "../contexts/drawer.context";


const Drawerr = () => {

    //importing drawer context state;
    const {drawer}= useContext(DrawerContext);

    return ( 
        <>
          <Drawer
            anchor='left'
            open={drawer}
            >
                <List>
                   <ListItemButton  divider>
                        <ListItemText><Typography sx={{fontSize:70,display:'flex',justifyContent:'end',fontStyle:'italic'}}>&times;</Typography></ListItemText>
                   </ListItemButton >
                    <ListItemButton divider>
                        <ListItemIcon>
                            <ComputerOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText ><Typography sx={{fontFamily:'monospace'}}>Computers</Typography></ListItemText>
                    </ListItemButton>
                    <ListItemButton divider >
                        <ListItemIcon>
                            <WomanOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText><Typography sx={{fontFamily:'monospace'}}>Fashions</Typography></ListItemText>
                    </ListItemButton>
                    <ListItemButton divider >
                        <ListItemIcon>
                            <ChairOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText><Typography sx={{fontFamily:'monospace'}}>Furnatures</Typography></ListItemText>
                    </ListItemButton>
                    <ListItemButton divider >
                        <ListItemIcon>
                            <ComputerOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText><Typography sx={{fontFamily:'monospace'}}>Electronics</Typography></ListItemText>
                    </ListItemButton>
                    <Button variant='contained'color='primary'
                    sx={{margin:6}} 
                    >Admin Login</Button>
                </List>
            </Drawer>
        </>
     );
}
 
export default Drawerr;