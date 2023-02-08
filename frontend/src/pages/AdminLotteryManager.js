import "./AdminLotteryManager.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar"; 
import config from "../config.json"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Result from "../components/Drawresult";
import AddLottery from "../components/AddLottery";
import AddLotterycalc from "../components/AddLotterycalc";
import AddLotterycom from "../components/AddLotterycom";
import Checkoutbutton from "../components/Checkoutbutton";
import Unitsold from "../components/Unitsold";
import Winners from "../components/Winners";
import Unitpending from "../components/Unitpending";
import { BsCloudMoonFill } from "react-icons/bs";
export default function AdminLotteryManager() {
  const navigate = useNavigate();

  const [unitdetails, setUnitdetails] = useState([]);
  const [unitsold, setUnitsold] = useState([]);
  const [unitpending, setUnitpending] = useState([]);
  const [winner, setWinner] = useState("");
  //drawresult----->
  const [lotteryresult, setLotteryresult] = useState([]);
  const [latestlotteryresult, setLatestLotteryresult] = useState([]);
  const [latestDrawNum, setLatestDrawNum] = useState([]);
  const [matchinNum, setMatchingNum] = useState([]);
//-----<

  useEffect(() => {
    console.log("hi");

    let url_unitsold = config.url+"Unitsold";
    let request_unitsold = {};
    let header_unitsold = {};

    let url_unitpending = config.url+"Unitpending";
    let request_unitpending = {};
    let header_unitpending = {};

    let url_winners = config.url+"winners";
    let request_winners = {};
    let header_winners = {};

//drawresult//uservalidationfetch----->
let url_drawlist = config.url+"upcominglotterydraws";
let req_drawlist = {};
let header_drawlist = {};

let url_drawresult = config.url+"latestdrawunits";
let req_drawresult = {};
let header_drawresult = {};
//-----<

    axios
      .post(url_unitsold, request_unitsold, header_unitsold)
      .then((res) => {
        console.log("unitsold", res.data);
        setUnitsold(res.data);
      })
      .catch();
    axios
      .post(url_unitpending, request_unitpending, header_unitpending)
      .then((res) => {
        console.log("unitpending", res.data);
        setUnitpending(res.data);
      })
      .catch();

    axios
      .post(url_winners, request_winners, header_winners)
      .then((res) => {
        setWinner(res.data[0].winners);
        console.log("winner" + res.data[0].winners);
      })
      .catch();
//drawresult----->
axios
.post(url_drawlist, req_drawlist, header_drawlist)
.then((res) => {
  setLotteryresult(res.data);
  console.log(res.data);
})
.catch();
axios
.post(url_drawresult, req_drawresult, header_drawresult)
.then((res) => {
  setLatestLotteryresult(res.data);
})
.catch();

axios
.post(url_drawresult, req_drawresult, header_drawresult)
.then((res) => {
  setLatestDrawNum(JSON.parse(res.data[0].txtLotteryresult));
})
.catch();

axios
.post(url_drawresult, req_drawresult, header_drawresult)
.then((res) => {
  var temp = [...res.data];
  let result = temp.map((a) => a.txtMatchingcount);
  const counts = {};
  for (const iterator of result) {
    if (counts[iterator] == undefined) counts[iterator] = 1;
    else counts[iterator]++;
  }
  const newobj = Object.entries(counts).map(([key, value]) => ({
    key,
    value,
  }));
  setMatchingNum(newobj);
})
.catch();
//-----<
  }, []);

  const LogIn = () => {
    navigate("/Login");
  };
  const handleLotteryAdd = () => {};

  return (
    <div className="AdminLotteryManager_outer">
      <div className="AdminLotteryManager_headerUser">
        {" "}
        <HeaderUser
          label1={"uname"}
          label2={0}
          label3={"My Cart"}
          label4={"Dashboard"}
          label5={"Summary"}
          label6={"Lottery Manager"}
          label7={"Buy Now"}
          Loginclick={LogIn}
        />
      </div>
      <div className="AdminLotteryManager_row">
        <Result array1={lotteryresult}
        array2={latestlotteryresult}
        array3={latestDrawNum}
        array4={matchinNum}
        value1={'txtLotteryname'}
        value2={"txtCost"} />
      </div>
      <div className="AdminLotteryManager_row">
        <div className="AdminLotteryManager_tables">
          <div className="AdminLotteryManager_row_col">
            <Unitsold
              label1={"Lottery"}
              label2={"Drawdate"}
              label3={"Units Sold"}
              array={unitsold}
            />
          </div>
          <div className="AdminLotteryManager_row_col">
            <Unitpending
              label1={"Lottery"}
              label2={"Units Confirmed"}
              label3={"Units Pending"}
              array={unitpending}
            />
          </div>
        </div>
      </div>
      <div className="AdminLotteryManager_row">
        <Winners value1={winner} />
      </div>

      {/* <div className="AdminLotteryManager_lottery">
        <div className="AdminLotteryManager_lottery_btn">
          <Checkoutbutton value2={"Add Lottery"} />
        </div>
        <AddLottery />
        <AddLotterycom />
        <AddLotterycalc />
      </div> */}

      <div className="AdminLotteryManager_footer">
        <Footer />
      </div>
    </div>
  );
}
