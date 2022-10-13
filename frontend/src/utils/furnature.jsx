import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";


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
            <Grid container>
                <Grid item>
                    {furnitures && furnitures.map((furniture)=>(
                        <Card elevation={5}>
                            <CardContent>{furniture.description}</CardContent>
                        </Card>
                    ))}
                    {!furnitures && <Typography sx={{fontFamily:'monospace'}}>Loading Data ...</Typography>}
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Furnature;