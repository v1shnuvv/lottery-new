import "./Lineselector.css";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import Plusbutton from "./Plusbutton";
import { GiSteampunkGoggles } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function Offerselector({
  label1,
  setValue,
  childdata,
  lineindex,
  ltryid,
  show,
}) {
  const [count, setCount] = useState(0);
  const [temparr, setTemparr] = useState([]);
  const lotterydetails = useSelector((state) => state.lotterydetails);
  const [sel_limit,setSel_limit]=useState("")
  const [showchk, setShowchk] = useState(false);
  const [selection, setSelection] = useState([]);
  const [arr, setArr] = useState([]);
  let selectionarray = [];
  const offerarray = useSelector((state) => state.offerarray);
  // const ltryid = useSelector((state) => state.ltryid);
  const ltryname = useSelector((state) => state.ltryname);
  console.log("id and name", ltryid, ltryname);
  const dispatch = useDispatch();
  const [num,setNum] = useState("");
  // var limit = 39;
  const [limit, setLimit] = useState("")

  useEffect(() => {
    //console.log("line", linearray);
    console.log("offerarray", show);
    setSel_limit(lotterydetails[0].sub_limit)
    setNum(lotterydetails[0].sub_start)
    setLimit(lotterydetails[0].sub_end)
  }, []);

  const handleClick = (e, indx) => {
    let temp = [...offerarray];
    let count = 0;
    for (const iterator of temp[lineindex]) {
      if (iterator.isselected) count++;
    }
    if (count < sel_limit) {
      temp[lineindex][indx].isselected = !temp[lineindex][indx].isselected;

      // console.log(temp[lineindex][indx].isselected);
      dispatch({ type: "setOfferArray", payload: temp });
    } else if (temp[lineindex][indx].isselected) {
      temp[lineindex][indx].isselected = !temp[lineindex][indx].isselected;

      // console.log(temp[lineindex][indx].isselected);

      dispatch({ type: "setOfferArray", payload: temp });
    }
  };

  const shuffle = () => {
    let temp = [...offerarray];
    const randomarray = [];
    let ta = [];
    let r;
    let randomnum = [];
    while (randomnum.length < sel_limit) {
      r = Math.floor(Math.random() * (limit - num)) + num;
      if (randomnum.indexOf(r) == -1) {
        randomnum.push(r);
        ta.push({ value: r, selected: true });
      }
    }
    for (const eleent of temp[lineindex]) {
      eleent.isselected = false;
    }

    for (const eleent of temp[lineindex]) {
      for (const elt of ta) {
        if (eleent.value == elt.value) {
          eleent.isselected = true;
          // test.push({ value: eleent.value, selected: true });
          //test[lineindex] = [test.push(eleent.value)];
          // setFinal({lineindex:test})
        }
      }
    }

    dispatch({ type: "setOfferArray", payload: temp });
  };
  const handlerefresh = () => {
    const tempsel = [...offerarray];
    console.log("tempsel", tempsel);
    for (const eleent of tempsel[lineindex]) {
      eleent.isselected = false;
    }
    dispatch({ type: "setOfferArray", payload: tempsel });
  };
  return show ? (
    <div className="Lineselector">
      <div className="Header">{label1}</div>
      <div className="Middle">
        <>
          {" "}
          {offerarray[lineindex].map((itm, indx) => {
            return (
              <>
                <button
                  key={itm.value}
                  onClick={(e) => {
                    handleClick(e, indx);
                  }}
                  style={{
                    backgroundColor:
                      itm.isselected === true ? "#3ea6d6" : "white",
                  }}
                >
                  {itm.value}
                </button>
              </>
            );
          })}
        </>
      </div>
      <div className="Footer">
        <button>
          {" "}
          <TbArrowsShuffle onClick={shuffle} />
        </button>
        {/* <button onClick={(e) => { childdata(e, selection, setShowchk) }} className="lineselector_confrimbtn">Confirm</button> */}
        <button>
          {" "}
          <AiOutlineClose onClick={handlerefresh} />
        </button>
      </div>
         
    </div>
  ) : (
    ""
  );
}
