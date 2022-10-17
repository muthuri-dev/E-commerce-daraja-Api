import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
    const[image, setImage]=useState(null);
    const[description, setDescription]= useState(null);
    const [price, setPrice]=useState(null);

    const handleImage= function(e){
        setImage({image:e.target.files[0]})
     }
    const handleDesc= function(e){
        setDescription(e.target.value);
    }
    const handlePrice= function(e){
        setPrice(e.target.value);
    }
    const handleSubmit= function(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);
        formData.append('description',description);
        formData.append('price',price);
        console.log([...formData]);
    }
    return ( 
        <div>
             <Grid container direction='column'>
                <Grid item>
                    <Typography color='primary'sx={{fontFamily:'monospace',marginTop:5}}>ADIMN DASHBOARD</Typography>
                </Grid>
                <Grid item container direcrion='row'sx={{marginTop:4,justifyContent:'center'}} >
                    {/*<Grid item>
                        <Typography color='primary'sx={{marginTop:4}}>COMPUTERS & ELECTRONICS</Typography>
                        <form>
                            <TextField
                                variant="outlined"
                                label=''
                                type='file'required
                                sx={{marginTop:4,width:300}}
                                value={electImage}
                                onChange={handleElectImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text'required
                                sx={{marginTop:4,width:300}}
                                value={electDesc}
                                onChange={handleElectDesc}
                            />
                            <TextField
                                variant="outlined"
                                label='Price'
                                type='text'required
                                sx={{marginTop:4,width:300}}
                                value={electPrice}
                                onChange={handleElectPrice}
                            />
                            <Button variant='contained' color='primary'sx={{marginTop:4}}
                                onClick={handleElect}
                            >ADD</Button>
                        </form>
                    </Grid>
                    <Grid item>
                        <Typography color='primary'sx={{marginTop:4}}>FASHION</Typography>
                        <form>
                            <TextField
                                variant="outlined"
                                label=''
                                type='file'required
                                sx={{marginTop:4,width:300}}
                                value={fashImage}
                                onChange={handleFashImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={fashDesc}
                                onChange={handleFashDesc}
                            />
                            <TextField
                                variant="outlined"
                                label='Price'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={fashPrice}
                                onChange={handleFashPrice}
                            />
                            <Button variant='outlined' color='primary'sx={{marginTop:4}}
                                onClick={handleFash}
                            >ADD</Button>
                        </form>
    </Grid>*/}
                    <Grid item>
                        <Typography color='primary'sx={{marginTop:4}}>FURNITURE</Typography>
                        <form >
                            <TextField
                                variant="outlined"
                                label=''
                                type='file' required 
                                sx={{marginTop:4,width:300}}
                                value={image}
                                onChange={handleImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={description}
                                onChange={handleDesc}
                            />
                            <TextField
                                variant="outlined"
                                label='Price'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={price}
                                onChange={handlePrice}
                            />
                            <Button variant='contained' color='primary'sx={{marginTop:4}}
                                onClick={handleSubmit}
                            >ADD</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Dashboard;