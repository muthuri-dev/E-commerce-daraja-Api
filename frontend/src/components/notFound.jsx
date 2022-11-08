import { Grid, Typography } from "@mui/material";




const NotFound = () => {
    return ( 
        <>
        <Grid container sx={{justifyContent:'center'}}>
            <Grid item>
                <Typography color='error'>Page Not Found</Typography>
                <Typography color='error'>404</Typography>
            </Grid>
        </Grid>
        </>
     );
}
 
export default NotFound;