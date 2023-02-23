import Collapsible from "react-collapsible";
import { useState } from "react";
import "./Purchaselist.css";
export default function Purchaselist({ Lotteryname, Drawdate }) {
  const [array, setArray] = useState([
    { id: 1, lottno: 123 },
    { id: 2, lottno: 143 },
    { id: 3, lottno: 125 },
  ]);
 
  const changetext = (index) => {
    if (document.getElementById(index).innerHTML == "Not Purchased") {
      document.getElementById(index).innerHTML = "Purchased";
    } else {
      document.getElementById(index).innerHTML = "Not Purchased";
    }
  };
  return (
    <div className="Purlist">
      <Collapsible
        trigger={
          <div className="Purlist_head">
            <label className="Purlist_head_label1">
              {Lotteryname}Kerala Bumper{" "}
            </label>
            <label>DrawDate:{Drawdate}</label>
          </div>
        }
      >
        <div className="Purlist_table">
          <table>
            <thead>
              <tr>
                <th>Lottery Number</th>
                <th>Purchase status</th>
              </tr>
            </thead>
            <tbody>
              {array.map((itm, indx) => {
                return (
                  <>
                    <tr>
                      <td>{itm.lottno}</td>
                      <td>
                        <button
                          id={itm.id}
                          onClick={(e) => {
                            changetext(itm.id);
                          }}
                        >
                          Not Purchased
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Collapsible>
    </div>
  );
}
