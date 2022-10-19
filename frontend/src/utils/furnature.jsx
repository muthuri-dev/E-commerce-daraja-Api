import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const Furnitures = () => {
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
                    {furnitures && furnitures.map((furniture)=>{
                        const blob = new Blob([Int8Array.from(furniture.image.data.data)], {type: furniture.image.contentType });

                        const image = window.URL.createObjectURL(blob);
                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:3}}>
                             <CardMedia
                             component='img'
                             height="150"
                             image={image}
                             alt='null'
                             sx={{margin:1,objectFit:'contain'}}
                             />   
                            <CardContent>
                                <Typography>{furniture.description}</Typography>
                                <Typography>{furniture.price}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )
                    }
                        
                       
                    )}
                    {!furnitures && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Furnitures;