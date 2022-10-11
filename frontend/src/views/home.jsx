import Grid from '';
import Navbar from "../components/navbar";

const Home = () => {
    return ( 
        <div>
            <Grid container direction='column'>
                <Grid item><Navbar/></Grid>
                <Grid item></Grid>
            </Grid>
        </div>
     );
}
 
export default Home;