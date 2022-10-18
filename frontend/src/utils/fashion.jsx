
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const Furnature = () => {
    const[fashions, setFashions]= useState([]);
    useEffect(function(){
        axios.get('http://localhost:8080/fashions/')
        .then(function(response){
            if(response.status===200){
                setFashions(response.data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    },[]);

    return (  
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Typography color="primary" variant='h6'>FASHION STORE</Typography>
                </Grid>
                <Grid item container sx={{justifyContent:'center',marginTop:5}}>
                    {fashions && fashions.map((fashion)=>(
                        <Card elevation={5} spaceing={2} sx={{width:250,height:300}}>
                            <CardContent>
                                <Typography>{fashion.description}</Typography>
                                <img src={fashion.image} alt={fashion.price} />
                                <Typography>{fashion.price}</Typography>
                            </CardContent>
                            <CardActions >
                            <IconButton>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                    ))}
                    {!fashions && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Furnature;