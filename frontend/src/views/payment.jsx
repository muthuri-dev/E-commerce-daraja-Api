import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const[amount, setAmount]= useState('');
    const[phone, setPhone]= useState('');

    const handleAmount= (event)=>{
        setAmount(event.target.value);
    }
    const handlePhone= (event)=>{
        setPhone(event.target.value);
    }
    const handleMpesa= (event)=>{
        const mpesaPost=({
            amount:amount,
            phone:phone
        })
        axios.post('https://damaris-ecommerce.herokuapp.com/shop/stk',mpesaPost)
        .then((response)=>{
            if(response.status===200){
                console.log(response);
                alert('payment successful');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return ( 
        <div>
            <Typography color='secondary'
            sx={{textDecoration:'underline'}}
            >Pay Through M-pesa</Typography>

            <form>
                <TextField
                label='Amount'
                variant='outlined'
                sx={{marginTop:3,width:300}}
                onChange={handleAmount}
                value={amount}
                />
                <TextField
                label='Phone Number'
                variant='outlined'
                sx={{marginTop:3,width:300}}
                onChange={handlePhone}
                value={phone}
                />
                <Button onClick={handleMpesa} variant='contained' color='success'
                sx={{marginTop:3,width:150}}
                >Pay Now</Button>
            </form>
        </div>
     );
}
 
export default Payment;