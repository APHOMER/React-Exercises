// import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";


export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);
    
    const updateName = (e) => {
        setName(e.target.value);
    }
    // const updateVolume = (e) => {
    //     setVolume(e.target.value)
    // }
    const updateVolume = (e, newVal) => {
        setVolume(newVal);
    }

    return (
        <div>
            <h1>The New Name is: {name}.</h1>
            <TextField 
                id="outlined-basic" 
                placeholder="Name" 
                label="Nick Name" 
                variant="outlined" 
                onChange={updateName}
                value={name}
            />

            <h1>The Volume level is: {volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={updateVolume}/>
        </div>
    );
}






