import React from "react";
import "./List.css";
export default function List1({ label1, label2, label3,label4,label5, array,variable1,variable2,variable3, variable4, variable5}) {
  // const array2= JSON.parse(array.lotterynumber)
  // console.log("bdsh",array[0].lotterynumber)
  
  return (
    <div className="list_outer">
      <div className="list_outer_header">
        <p>{label1}</p>
        <p>{label2}</p>
        <p>{label3}</p>
        <p>{label4}</p>
        <p>{label5}</p>
      </div> 
    

      {array.map((item, index) => {
        return (
          <>
            <div className="list_outer_row">
              <p>{item[variable1]}</p>
              <p>{item[variable2]}</p>
              <p>
              <span className="list2_lotterynumber">
                {/* {item[variable3]} */}
              {JSON.parse(array[index].lotterynumber).map((itm,indx)=>{
                return(<p>{itm}</p>)
              })}
              </span>
              </p>
              <p>{item[variable4]}</p>
              <p>{item[variable5]}</p>
            </div>
          </>
        );
      })}
    
    </div>
  );
}