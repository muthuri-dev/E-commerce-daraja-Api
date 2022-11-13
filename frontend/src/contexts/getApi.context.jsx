import { createContext,useState,useEffect } from "react";
import axios from "axios";

//initializing create context and exporting;
export const GetContext= createContext();


const GetContextProvider = (props) => {

    //electronics state;
    const[electronics, setElectronics]=useState([]);


    //fetching electronics;
    useEffect(()=>{
        const url='https://damaris-ecommerce.herokuapp.com/shop/electronics';
        axios.get(url)
            .then(response=>setElectronics(response.data.data))
            .catch(error=>console.log(error.message));
    },[]);

    return (  
        <>
        <GetContext.Provider value={{electronics}}>
            {props.children}
        </GetContext.Provider>
        </>
    );
}
 
export default GetContextProvider;