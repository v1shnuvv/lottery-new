import "../components/Totalwinningvalidation.css";

import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
import { MdArrowDropDownCircle } from "react-icons/md";

//install react-collapsible before using this component
//npm i react-collapsible

export default function Totalwinningvalidation({
 setTotalwinning, totallotterywinning, setNewarray,
  array1,
  array2,
}) {
  function expand(pid, itm, index) {
    let temp = [...array1];
    for (const itm of temp) {
      itm.isClicked = false;
    }
    temp[index].isClicked = true;
    const newn = totallotterywinning.filter((obj) => obj.refProvider === pid);
    setNewarray(newn);
    setTotalwinning(temp);
  }
  function colp() {
    let temp = [...array1];
    for (const itm of temp) {
      itm.isClicked = false;
    }
    setTotalwinning(temp);
  }
  return (
    <>
      <div className="totalwinning_container">
        <div className="totalwinning_header">
          {" "}
          <h4>Total winning todate</h4>
        </div>
        <div className="totalwinning_subheader">
          <h4>Provider name</h4>
          <h4>Total winning</h4>
        </div>

        {array1.map((itm, index) => {
          return (
            <>
              <div
                className="totalwinning_providerlist"
                onClick={() => {
                  array1[index].isClicked
                    ? colp()
                    : expand(itm.refProvider, itm, index);
                }}
              >
                <div className="totalwinning_providerlist_inner">
                  <span>
                    <MdArrowDropDownCircle />
                  </span>
                  {itm.txtProvidername}
                </div>
                <div>{itm.totalPrizemoney}</div>
              </div>

              <Collapsible open={itm.isClicked}>
                {array2.map((itminner, indexinner) => {
                  return (
                    <>
                      <div className="totalwinning_lotterylist">
                        <div>{itminner.txtLotteryname}</div>
                        <div>{itminner.totalPrizemoney}</div>
                      </div>
                    </>
                  );
                })}
              </Collapsible>
            </>
          );
        })}
      </div>
    </>
  );
}
