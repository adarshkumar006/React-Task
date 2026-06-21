import { useState} from "react";
const DateState=()=>{

    let [date,setDate]=useState(new Date());
    setInterval(()=>{
        setDate(new Date());
    },1000)
    return (
        <div align='center'>
            <h2>Time:{date.toLocaleTimeString()}</h2>

        </div>
    )
}
export default DateState;