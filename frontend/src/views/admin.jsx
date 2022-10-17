import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Admin = () => {
    const navigate= useNavigate();
    const[email, setEmail]= useState('');
    const [password, setPassword] =useState('');

    const handleEmail= function(e){
        setEmail(e.target.value);
    }
    const handlePassword= function(e){
        setPassword(e.target.value);
    }
    const handleSubmit = function(e){
        e.preventDefault();
        console.log({email, password});
        const admin=({
            email:email,
            password:password,
        })
        axios.post('http://localhost:8080/login/',admin)
        .then(function(response){
            if(response.status===200){
                alert('Successful');
                navigate('/dash');
            }else{
                alert('Invalid email and password');
            }
        })
        .catch(function(err){
            console.log('response error: ',err);
        })
    }
    return (
        <div>
            <Grid container direction='column' sx={{display:'flex',alignItems:'center'}}>
                <Grid items>
                    <Box>
                        <Typography sx={{fontFamily:'monospace',marginTop:4}}>Admin Login</Typography>
                        <form>
                            <TextField variant="outlined" label='email'
                            type='email' value={email}onChange={handleEmail}
                            sx={{marginTop:6, width:350}}
                            />
                            <TextField variant="outlined" label='Password'
                            type='password' value={password}onChange={handlePassword}
                            sx={{marginTop:6,width:350}}
                            />
                            <Button variant='outlined'sx={{marginTop:6,width:150}}
                            onClick={handleSubmit}
                            >SUBMIT</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
      );
}
 
export default Admin;