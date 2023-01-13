import "./winners.css";
import axios from "axios";
import pic from "../images/dad-img.png";
import { useEffect,useState } from "react";
export default function Winners({value1}) {

  return (
    <div className="Winner">
      <div className="Winners_raw">
        <div className="Winners_raw_column1">
          <label className="Winners_raw_column1_label1">
            <h2>Total Winners to Date</h2>
          </label>
          <label className="Winners_raw_column1_label2">
            {value1}
            
          </label>
        </div>

        <div className="Winners_raw_column2">
          <img src={pic} alt={"dadandson"} />
        </div>
      </div>
    </div>
  );
}
