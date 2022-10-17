import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const Furnature = () => {
    const[furnitures, setFurnitures]= useState([]);
    useEffect(function(){
        axios.get('http://localhost:8080/furnitures/')
        .then(function(response){
            if(response.status===200){
                setFurnitures(response.data.data);
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
                    <Typography color="primary" variant='h6'>FURNITURES STORE</Typography>
                </Grid>
                <Grid item container sx={{justifyContent:'center',marginTop:5}}>
                    {furnitures && furnitures.map((furniture)=>(
                        <Card elevation={5} spaceing={2} sx={{width:250,height:300}}>
                            <CardContent>
                                <Typography>{furniture.description}</Typography>
                                <Typography>{furniture.image}</Typography>
                                <Typography>{furniture.price}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                    ))}
                    {!furnitures && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Furnature;