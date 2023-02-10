import "./List.css";

export default function List({ label1, label2, label3,label4, array,variable1,variable2,variable3, variable4}) {


  return (
    <div className="list_outer">
      <div className="list_outer_header">
        <p>{label1}</p>
        <p>{label2}</p>
        <p>{label3}</p>
        <p>{label4}</p>
      </div> 
      {array.map((item, index) => {
        return (
          <>
            <div className="list_outer_row">
              <p>{item[variable1]}</p>
              <p>{item[variable2]}</p>
              <p>{item[variable3]}</p>
              <p>{item[variable4]}</p>
            </div>
          </>
        );
      })}
    
    </div>
  );
}