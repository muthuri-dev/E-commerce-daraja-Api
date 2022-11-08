import { Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

import {  CardActions, CardMedia, IconButton } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { useContext } from "react";
import { GetContext } from "../contexts/getApi.context";

import Footer from './footer';
import { CartContext } from "../contexts/cart.context";

const Body = () => {

    //getting the contexts;
    const{electronics,fashions,furnitures}= useContext(GetContext);

    //importing cart context;
    const{addToCart}= useContext(CartContext);

    return ( 
        <>
            <Grid container direction='column' sx={{marginTop:12}}>
            <Grid item container sx={{display:'flex', justifyContent:'center'}}>
                <Grid item >
                <Card elevation={5} sx={{width:'auto',height:200, marginBottom:4,marginRight:5,backgroundImage:"url('https://dignity.co.ke/wp-content/uploads/2022/09/home-sofa1-e1662973151949.jpg')",backgroundSize:'cover'}}>
                    <CardHeader title='High Quality Furniture'/>
                    <CardContent>
                        <Typography sx={{color:'white'}}>Get quality and life lasting products for your pocket</Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item>
                <Card elevation={5} sx={{width:'auto',height:200,backgroundImage:"url('https://media.istockphoto.com/id/111885949/photo/women-boutique-dress-shopping-in-paris-france.jpg?s=612x612&w=0&k=20&c=elwmT9Ha_lasak1fdcWf_dTqt3Xzm1P3ersXjgwTbpE=')",backgroundSize:'cover'}}>
                    <CardHeader title='Dress with us'/>
                    <CardContent>
                        <Typography sx={{color:'white'}}>Get your dress taste here in our store at friendly prices</Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant='outlined' sx={{margin:5}}>All Products</Button>
            </Grid>
            <Grid item container 
            sx={{display:'flex',justifyContent:'center'}}>
                <Grid item>
                {electronics && electronics.map(function(electronic){
                       const blob = new Blob([Int8Array.from(electronic.image.data.data)], {type: electronic.image.contentType });

                       const image = window.URL.createObjectURL(blob);

                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:2}} key={electronic.id}>
                             <CardMedia
                             component="img"
                             height="150"
                             image={image}
                             alt="image null"
                             sx={{margin:1,objectFit:'contain'}}
                             />   
                            <CardContent>
                                <Typography>{electronic.description}</Typography>
                                <Typography>Ksh.{electronic.price}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                               <IconButton onClick={(item)=>addToCart(electronic)}>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )
                    })}
                    {!electronics && <Typography>Loading...</Typography>}
                </Grid>
                <Grid item>
                {furnitures && furnitures.map((furniture)=>{
                        const blob = new Blob([Int8Array.from(furniture.image.data.data)], {type: furniture.image.contentType });

                        const image = window.URL.createObjectURL(blob);
                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:3}} key={furniture.id}>
                             <CardMedia
                             component='img'
                             height="150"
                             image={image}
                             alt='null'
                             sx={{margin:1,objectFit:'contain'}}
                             />   
                            <CardContent>
                                <Typography>{furniture.description}</Typography>
                                <Typography>Ksh.{furniture.price}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton onClick={(item)=>addToCart(furniture)} >
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )}
                    )}
                        {!furnitures && <Typography>Loading...</Typography>}
                </Grid>
                <Grid item>
                {fashions && fashions.map((fashion)=>{
                        const blob = new Blob([Int8Array.from(fashion.image.data.data)], {type: fashion.image.contentType });

                        const image = window.URL.createObjectURL(blob);
                        return(
                            <Card elevation={5} spaceing={2} sx={{width:250,height:300,margin:3}} key={fashion.id}>
                             <CardMedia
                             component="img"
                             height="150"
                             image={image}
                             alt="image null"
                             sx={{margin:1,objectFit:'contain'}}
                             />     
                            <CardContent>
                                <Typography>{fashion.description}</Typography>
                                <Typography>Ksh.{fashion.price}</Typography>
                            </CardContent>
                            <CardActions >
                            <IconButton onClick={(item)=>addToCart(fashion)}>
                                   <AddShoppingCartOutlinedIcon/>
                               </IconButton>
                            </CardActions>
                        </Card>
                        )
                    }
                    )}
                    {!fashions && <Typography>Loading...</Typography>}
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
        </>
     );
}
 
export default Body;