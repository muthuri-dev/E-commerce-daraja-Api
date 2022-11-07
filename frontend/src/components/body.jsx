import { Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

import { useContext } from "react";
import { GetContext } from "../contexts/getApi.context";

const Body = () => {

    //getting the contexts;
    const{electronics,fashions,furnitures}= useContext(GetContext);
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
                <Button variant='outlined' sx={{margin:5,justifyContent:'start',display:'flex'}}>All Products</Button>
            </Grid>
            <Grid item container>
                <Grid item>
                    {electronics && electronics.map(electronic=>(
                       <Card elevation={5} key={electronic.id} >
                            <CardContent>{electronic.price}</CardContent>
                       </Card>
                    ))}
                </Grid>
                <Grid item>
                        {furnitures &&  furnitures.map(furniture=>(
                            <Card elevation={5}>
                                <CardContent key={furniture.id}>{furniture.price}</CardContent>
                            </Card>
                        ))}
                </Grid>
                <Grid item>
                        {fashions && fashions.map(fashion=>(
                            <Card elevation={5}>
                                <CardContent key={fashion.id}>{fashion.price}</CardContent>
                            </Card>
                        ))}
                </Grid>
            </Grid>
        </Grid>
        </>
     );
}
 
export default Body;