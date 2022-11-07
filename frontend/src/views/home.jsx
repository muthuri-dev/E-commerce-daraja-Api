import { Grid } from "@mui/material";
import Body from "../components/body";
import Navbar from "../components/navbar";
import DrawerContextProvider from "../contexts/drawer.context";
import GetContextProvider  from "../contexts/getApi.context";


const Home = () => {
    return ( 
        <>
            <Grid container direction='column'>
                <DrawerContextProvider>
                     <Grid item><Navbar/></Grid>
                </DrawerContextProvider>
                <Grid item>
                    <GetContextProvider>
                        <Body/>
                    </GetContextProvider>
                </Grid>
            </Grid>
        </>
     );
}
 
export default Home;