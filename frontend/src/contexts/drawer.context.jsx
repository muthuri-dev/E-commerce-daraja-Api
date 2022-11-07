import { createContext, useState } from "react";

//initializing context and exporting ;
export const DrawerContext=createContext();


const DrawerContextProvider = (props) => {

    //drawer state;
    const[drawer, setDrawer]=useState(false);

    //drawer open function
    const openDrawer=()=>{
        setDrawer(true);
    }

    return ( 
        <>
        <DrawerContext.Provider value={{openDrawer,drawer}}>
            {props.children}
        </DrawerContext.Provider>
        </>
     );
}
 
export default DrawerContextProvider;