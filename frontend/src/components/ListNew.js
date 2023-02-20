import "./List.css";
import { useNavigate } from "react-router-dom";
export default function ListNew({listsample, label1, label2, label3,label4,label5,label6, array,variable1,variable2,variable3, variable4, variable5,array1}) {
  console.log("newhhh"+listsample)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AdminLotteryManager");
  };
  console.log("list",array);
  return (
    <div className="list_outer">
      <div className="list_outer_header">
        <p>{label1}</p>
        <p>{label2}</p>
        <p>{label3}</p>
        <p>{label4}</p>
        <p>{label5}</p>
        <p>{label6}</p>
      </div> 
      {array.map((item, index) => {
        return (
          <>
            <div className="list_outer_row">
              <p>{item[variable1]}</p>
              <p>{item[variable2]}</p>
              <p>{item[variable3]}</p>
              <p>{item[variable4]}</p>
              
              {listsample.map((itm,indx)=>{
                {if(item[variable1]==itm[variable1] && item[variable2]==itm[variable2]) {
                       return<>
                      <p>{item[variable4]-itm[variable5]}</p>
                      
                       </>
                }}
              })}
              
            </div>
          </>
        );
      })}
    
    </div>
  );
}