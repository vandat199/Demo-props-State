import { useState } from "react";
import { Children } from "react";
import Child from "./Childrent";
export default function Parent() {
    const [name,setName] = useState("")
    const handleChange = (Text) =>{
        setName(Text)
    }
    return (
        <>
            <h4>Hello : {name}</h4>
            <Child handleChange = {handleChange} name = {name} />
        </>
    )
}