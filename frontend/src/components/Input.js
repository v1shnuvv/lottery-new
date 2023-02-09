import React from "react";
import "../components/Input.css";
function Input({name,onChange,value,itype,isRequired}) {
    return (
        <div className="input_wrap">
            <input type={itype} required onChange={onChange} value={value} />
            <span>{name}</span><sup>{isRequired}</sup>
            
        </div>
    )
}
export default  Input;