import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Axios from "axios";

const Dashboard = () => {

    const formData= new FormData();

    //furnitures
    const[image, setImage]=useState(null);
    const[description, setDescription]= useState('');
    const [price, setPrice]=useState('');

    const handleImage= function(e){
        if(e.target.files && e.target.files.length>0){
            setImage(e.target.files[0]);
        }else return null;
     }
    const handleDesc= function(e){
        setDescription(e.target.value);
    }
    const handlePrice= function(e){
        setPrice(e.target.value);
    }
    const handleSubmit= function(e){
        e.preventDefault();
        formData.append('image',image);
        formData.append('description',description);
        formData.append('price',price);
        console.log([...formData]);

        Axios.post('http://localhost:8080/furniture',formData)
        
             setImage(null);
            setDescription('');
            setPrice('');
    }
    //electronics

    const[electronic, setElectronic]=useState(null);
    const[electrDescription, setElectrDescription]= useState('');
    const [electrprice, setElectrPrice]=useState('');

    const handleElectrImage= function(event){
        if(event.target.files && event.target.files.length>0){
            setElectronic(event.target.files[0]);
        }else return null;
     }
    const handleElectrDesc= function(event){
        setElectrDescription(event.target.value);
    }
    const handleElectrPrice= function(event){
        setElectrPrice(event.target.value);
    }
    const handleElectrSubmit= function(e){
        e.preventDefault();
        formData.append('image',electronic);
        formData.append('description',electrDescription);
        formData.append('price',electrprice);
        console.log([...formData]);
        Axios.post('http://localhost:8080/electronics/',formData);

        setElectronic(null);
        setElectrDescription('');
        setElectrPrice('');
    }

    //Fashion
    const[fashion, setFashion]=useState(null);
    const[fashDescription, setFashDescription]= useState('');
    const [fashPrice, setFashPrice]=useState('');

    const handleFashImage= function(event){
        if(event.target.files && event.target.files.length>0){
            setFashion(event.target.files[0]);
        }else return null;
     }
    const handleFashDesc= function(event){
        setFashDescription(event.target.value);
    }
    const handleFashPrice= function(event){
        setFashPrice(event.target.value);
    }
    const handleFashSubmit= function(event){
        event.preventDefault();
        formData.append('image',fashion);
        formData.append('description',fashDescription);
        formData.append('price',fashPrice);
        console.log([...formData]);

        Axios.post('http://localhost:8080/fashions/',formData);

        setFashion(null);
        setFashDescription('');
        setFashPrice('');
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
                                onChange={handleElectrImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text'required
                                sx={{marginTop:4,width:300}}
                                value={electrDescription}
                                onChange={handleElectrDesc}
                            />
                            <TextField
                                variant="outlined"
                                label='Price'
                                type='text'required
                                sx={{marginTop:4,width:300}}
                                value={electrprice}
                                onChange={handleElectrPrice}
                            />
                            <Button variant='contained' color='primary'sx={{marginTop:4}}
                                onClick={handleElectrSubmit}
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
                                onChange={handleFashImage}
                            />
                            <TextField
                                variant="outlined"
                                label='Description'
                                type='text' required
                                sx={{marginTop:4,width:300}}
                                value={fashDescription}
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
                                onClick={handleFashSubmit}
                            >ADD</Button>
                        </form>
                    </Grid>
                    <Grid item>
                        <Typography color='primary'sx={{marginTop:4}}>FURNITURE</Typography>
                        <form >
                            <TextField
                                variant="outlined"
                                label=''
                                type='file' required 
                                sx={{marginTop:4,width:300}}
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