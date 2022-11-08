import { createContext,useState,useEffect } from "react";
import axios from "axios";

//initializing create context and exporting;
export const GetContext= createContext();


const GetContextProvider = (props) => {

    //electronics state;
    const[electronics, setElectronics]=useState([]);

    //fashions state;
    const[fashions, setFashions] =useState([]);

    //furnitures state;
    const[furnitures, setFurnitures]= useState([]);

    //fetching electronics;
    useEffect(()=>{
        const url='https://damaris-ecommerce.herokuapp.com/shop/electronics';
        axios.get(url)
            .then(response=>setElectronics(response.data.data))
            .catch(error=>console.log(error.message));
    },[]);

    //fetching fashions;
    useEffect(()=>{
        const url='https://damaris-ecommerce.herokuapp.com/shop/fashions';
        axios.get(url)
            .then(response=>setFashions(response.data.data))
            .catch(error=>console.log(error.message));
    },[]);

    //fetching furnitures;
    useEffect(()=>{
        const url='https://damaris-ecommerce.herokuapp.com/shop/furniture';
        axios.get(url)
            .then(response=>setFurnitures(response.data.data))
            .catch(error=>console.log(error.message));
    })

    return (  
        <>
        <GetContext.Provider value={{electronics,fashions,furnitures}}>
            {props.children}
        </GetContext.Provider>
        </>
    );
}
 
export default GetContextProvider;