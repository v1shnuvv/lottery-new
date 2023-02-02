import "./Lineselector.css";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import Plusbutton from "./Plusbutton";
import { GiSteampunkGoggles } from "react-icons/gi";

import { MdSportsTennis } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function Lineselector({
  label1,
  setValue,
  childdata,
  lineindex,
  ltryid,
}) {
  const [count, setCount] = useState(0);
  const [temparr, setTemparr] = useState([]);
  const [show, setShow] = useState(true);
  const [showchk, setShowchk] = useState(false);
  const [selection, setSelection] = useState([]);
  const [arr, setArr] = useState([]);
  let selectionarray = [];
  const lotterydetails = useSelector((state) => state.lotterydetails);
  console.log("ls+ld",lotterydetails)
  const linearray = useSelector((state) => state.linearray);
  const offerarray = useSelector((state) => state.offerarray);
  const ltryname = useSelector((state) => state.ltryname);
  const dispatch = useDispatch();
  const [num,setNum]  = useState("");//startnum
  const [limit,setLimit]= useState("");
  const [numberlimit,setNumberlimit]=useState("")
  useEffect(() => {
    console.log("line", linearray);
    console.log("offerarray", offerarray);
    setNum(lotterydetails[0].mina_start)
    setLimit(lotterydetails[0].main_end)
    setNumberlimit(lotterydetails[0].main_limit)
  }, []);
  // useMemo(() => {
  //   for (var i = num; i <= limit; i++) {
  //     selectionarray.push([{ value: i, selected: false }])
  //     // selectionarray=[...selectionarray,[{ value: i, selected: false }]]
  //   }
  //   console.log(selectionarray)
  //   setArr(selectionarray)
  // }, [])
  const handleClick = (e, indx) => {
    let temp = [...linearray];
    let count = 0;
    for (const iterator of temp[lineindex]) {
      if (iterator.isselected) count++;
    }
    if (count < numberlimit) {
      temp[lineindex][indx].isselected = !temp[lineindex][indx].isselected;
      // console.log(temp[lineindex][indx].isselected);
      dispatch({ type: "setLineArray", payload: temp });
    } else if (temp[lineindex][indx].isselected) {
      temp[lineindex][indx].isselected = !temp[lineindex][indx].isselected;
      // console.log(temp[lineindex][indx].isselected);
      dispatch({ type: "setLineArray", payload: temp });
    }
  };
  const shuffle = () => {
    let temp = [...linearray];
    const randomarray = [];
    let ta = [];
    let r;
    let randomnum = [];
    while (randomnum.length < numberlimit) {
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
    dispatch({ type: "setLineArray", payload: temp });
  };
  const handlerefresh = () => {
    const tempsel = [...linearray];
    console.log("tempsel", tempsel);
    for (const eleent of tempsel[lineindex]) {
      eleent.isselected = false;
    }
    dispatch({ type: "setLineArray", payload: tempsel });
  };
  return (
    <div className="Lineselector">
      <Plusbutton
        show={show}
        setShow={setShow}
        showchk={showchk}
        setShowchk={setShowchk}
      />
      <div className="Header">{label1}</div>
      <div className="Middle">
        <>
          {linearray[lineindex].map((itm, indx) => {
            return (
              <>
                <button
                  key={itm.value}
                  onClick={(e) => {
                    handleClick(e, indx);
                  }}
                  style={{
                    backgroundColor:
                      itm.isselected === true ? "#3EA6D6" : "white",
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
  );
}
