
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const Electronics = () => {
    const[electronics, setElectronics]= useState([]);
    useEffect(function(){
        axios.get('http://localhost:8080/electronics/')
        .then(function(response){
            if(response.status===200){
                setElectronics(response.data.data);
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
                    <Typography color="primary" variant='h6'>ELECTRONICS AND COMPUTERS STORE</Typography>
                </Grid>
                <Grid item container sx={{justifyContent:'center',marginTop:5}}>
                    {electronics && electronics.map(function(electronic){
                       const blob = new Blob([Int8Array.from(electronic.image.data.data)], {type: electronic.image.contentType });

                       const image = window.URL.createObjectURL(blob);

                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:2}}>
                             <CardMedia
                             component="img"
                             height="150"
                             image={image}
                             alt="image null"
                             sx={{margin:1,objectFit:'contain'}}
                             />   
                            <CardContent>
                                <Typography>{electronic.description}</Typography>
                                <Typography>{electronic.price}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                               <IconButton>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )
                    })}
                    {!electronics && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Electronics;