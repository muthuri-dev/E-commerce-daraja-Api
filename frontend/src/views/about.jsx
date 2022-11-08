import { Grid, Typography } from "@mui/material";




const About = () => {
    return ( 
        <>
        <Grid container sx={{justifyContent:'center',marginTop:15}}>
            <Grid item >
                <Typography color='primary' sx={{textDecoration:'underline'}}>We are number 1 online shopping platform</Typography>
                <Typography>Shop with us</Typography>
                <Typography>Located in Embu Town</Typography>
                <Typography>Contacts: 0706638486</Typography>
            </Grid>
        </Grid>
        </>
     );
}
 
export default About;