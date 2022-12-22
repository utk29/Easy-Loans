import { createContext, useState } from "react";

export const User = createContext('');


export const UserDetails = (props) =>{
const [data, setData] = useState({
    userName:'',
    id:'',
    email:''
})

const userData = (e) =>{
    setData(e);
    sessionStorage.setItem("user",JSON.stringify(e));
}
return(
    <User.Provider value={{data,userData}}>
        {props.children}
    </User.Provider>
)
}