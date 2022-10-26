
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';



const Fashions = () => {
    const[fashions, setFashions]= useState([]);

    const addCart= function(e){
        console.log('clicked');
    }
    
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
                    <Typography color="primary" variant='h6'
                    sx={{marginTop:10}}
                    >FASHION STORE</Typography>
                </Grid>
                <Grid item container sx={{justifyContent:'center',marginTop:5}}>
                    {fashions && fashions.map((fashion)=>{
                        const blob = new Blob([Int8Array.from(fashion.image.data.data)], {type: fashion.image.contentType });

                        const image = window.URL.createObjectURL(blob);
                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:3}} addCart={addCart}>
                             <CardMedia
                             component="img"
                             height="150"
                             image={image}
                             alt="image null"
                             sx={{margin:1,objectFit:'contain'}}
                             />     
                            <CardContent>
                                <Typography>{fashion.description}</Typography>
                                <Typography>{fashion.price}</Typography>
                            </CardContent>
                            <CardActions >
                            <IconButton onClick={addCart}>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )
                    }
                    )}
                    {!fashions && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Fashions;