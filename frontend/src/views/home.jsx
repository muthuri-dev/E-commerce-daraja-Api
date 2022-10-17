import {Card, CardContent, CardHeader, Grid, Typography} from '@mui/material';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Shopping1 from '../components/shopping1';


const Home = () => {
    return ( 
        <div>
            <Grid container direction='column'>
                <Grid item> <Navbar/></Grid>
                <Grid item container sx={{marginTop:10,justifyContent:'center'}}>
                    <Grid item >
                        <Typography color='primary' sx={{fontFamily:'mononspace',margin:10}}>Shop With Us At Affordable Prices<br/>At the comfort of your home<br/>And pick your order at your door step within minutes.</Typography>
                    </Grid>
                    <Grid item sx={{margin:'auto'}}>
                        <Shopping1/>
                    </Grid>
                </Grid>
                <Grid item sx={{justifyContent:'center',display:'flex',margin:10}}>
                    <Card elevation={5} sx={{width:'70%'}}>
                        <CardHeader title='About Us'/>
                        <CardContent>
                            <Typography>This is a online shopping platform which offers derivery at your door stem<br/>We are located at Embu Town near Tuskyus Supermarket</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Home;