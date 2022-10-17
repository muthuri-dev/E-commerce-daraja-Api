import { Grid, Typography } from "@mui/material";



const Footer = () => {
    return (  
        <div>
            <Grid container direction='column' sx={{justifyContent:'center',backgroundColor:'black',height:200,marginBottom:'auto'}}>
                <Grid item>
                    <Typography color='secondary'>Shop with us</Typography>
                </Grid>
                <Grid item>
                    <Typography color='primary'>&copy; 2022 Darmaris</Typography>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Footer;