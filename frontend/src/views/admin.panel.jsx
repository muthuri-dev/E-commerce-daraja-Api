import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";


const Stock = () => {
    const[electImage, setElectImage]= useState('');
    const[electDesc, setElectDesc]= useState('');
    const[electPrice, setElectPrice]= useState('');

    const handleElectImage= function(e){
        setElectImage(e.target.value);
    }
    const handleElectDesc= function(e){
        setElectDesc(e.target.value);
    }
    const handleElectPrice= function(e){
        setElectPrice(e.target.value);
    }
    const handleElect = function(e){
        e.preventDefault();
        console.log({electImage,electDesc,electPrice});
        const electronics=({
            image:electImage,
            description:electDesc,
            price:electPrice,
        });
        axios.post('http://localhost:8080/electronics/',electronics)
        .then(function(response){
            if(response.status===200){
                alert('saved');
            }
        })
        .catch(function(err){
            console.log('electronics error: ',err);
        });
    }
    const[fashImage, setFashImage]= useState('');
    const[fashDesc, setFashDesc]= useState('');
    const[fashPrice, setFashPrice]= useState('');

    const handleFashImage = function(e){
        setFashImage(e.target.value);
    }
    const handleFashDesc = function(e){
        setFashDesc(e.target.value);
    }
    const handleFashPrice = function(e){
        setFashPrice(e.target.value);
    }
    const handleFash = function(e){
        e.preventDefault();
        console.log({fashImage,fashDesc,fashPrice});
        const fashions=({
            image:fashImage,
            description:fashDesc,
            price:fashPrice,
        });
        axios.post('http://localhost:8080/fashions/',fashions)
        .then(function(response){
            if(response.status===200){
                alert('saved');
            }
        })
        .catch(function(err){
            console.log('fashions error: ',err);
        });
    }

    const[farImage, setFarImage]= useState('');
    const[farDesc, setFarDesc]= useState('');
    const[farPrice, setFarPrice]= useState('');

    const handleFarImage= function(e){
        setFarImage(e.target.value);
    }
    const handleFarDesc= function(e){
        setFarDesc(e.target.value);
    }
    const handleFarPrice= function(e){
        setFarPrice(e.target.value);
    }
    const handleFar= function(e){
        e.preventDefault();
        console.log({farImage,farDesc,farPrice});
        const furnatures=({
            image:farImage,
            description:farDesc,
            price:farPrice,
        });
        axios.post('http://localhost:8080/furniture/',furnatures)
        .then(function(response){
            if(response.status===200){
                alert('saved');
                console.log(response);
            }
        })
        .catch(function(err){
            console.log('furnature error: ',err);
        });
    }
    return ( 
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Typography color='primary'sx={{fontFamily:'monospace',marginTop:5}}>ADIMN DASHBOARD</Typography>
                </Grid>
                <Grid item container direcrion='row'sx={{marginTop:4,justifyContent:'center'}} >
                    <Grid item>
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
                    </Grid>
                    <Grid item>
                        <Typography color='primary'sx={{marginTop:4}}>FURNITURE</Typography>
                        <form enctype="multipart/form-data">
                            <TextField
                                variant="outlined"
                                label=''
                                type='file' required
                                sx={{marginTop:4,width:300}}
                                value={farImage}
                                onChange={handleFarImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={farDesc}
                                onChange={handleFarDesc}
                            />
                            <TextField
                                variant="outlined"
                                label='Price'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={farPrice}
                                onChange={handleFarPrice}
                            />
                            <Button variant='contained' color='primary'sx={{marginTop:4}}
                                onClick={handleFar}
                            >ADD</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Stock;