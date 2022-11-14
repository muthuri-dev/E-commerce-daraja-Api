

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Axios from "axios";

const Dashboard = () => {

    const formData= new FormData();

    
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
        Axios.post('https://damaris-ecommerce.herokuapp.com/shop/electronics/',formData)
        .then((response)=>{
            if(response.status===200){
                alert('product added');
            }
        })
        .catch(error=>console.log(error.message));

        setElectronic(null);
        setElectrDescription('');
        setElectrPrice('');
    }

    return ( 
        <div>
             <Grid container direction='column'>
                <Grid item>
                    <Typography color='primary'sx={{fontFamily:'monospace',marginTop:5}}>ADIMN DASHBOARD</Typography>
                </Grid>
                <Grid item container direcrion='row'sx={{marginTop:4,justifyContent:'center'}} >
                    <Grid item>
                        <Typography color='primary'sx={{marginTop:4,fontFamily:'monospace'}}>FASHIONS</Typography>
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
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Dashboard;