import "./LotteryManager.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";

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
import AddLott from "../components/AddLott";
import AddProvider from "../components/AddProvider";
import ProviderInfo from "../components/ProviderInfo";
export default function LotteryManager() {
  const navigate = useNavigate();
  const uname=localStorage.getItem("usrname")
  const [unitdetails, setUnitdetails] = useState([]);
  const [unitsold, setUnitsold] = useState([]);
  const [unitpending, setUnitpending] = useState([]);
  const [lotteryresult, setLotteryresult] = useState([]);
  const [latestlotteryresult, setLatestLotteryresult] = useState([]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    console.log("hi");

    let url_unitsold = "http://localhost:8080/Unitsold";
    let request_unitsold = {};
    let header_unitsold = {};

    let url_unitpending = "http://localhost:8080/Unitpending";
    let request_unitpending = {};
    let header_unitpending = {};

    let url_winners = "http://localhost:8080/winners";
    let request_winners = {};
    let header_winners = {};

    let url_drawlist = "http://localhost:8080/lotterydrawresult";
    let req_drawlist = {};
    let header_drawlist = {};

    let url_drawresult = "http://localhost:8080/latestlotterydrawresult";
    let req_drawresult = {};
    let header_drawresult = {};

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
        setWinner(res.data.winners);
        console.log("winner" + res.data);
      })
      .catch();
    axios
      .post(url_drawlist, req_drawlist, header_drawlist)
      .then((res) => {
        // console.log("hiadminlottery");
        console.log(res.data);
        setLotteryresult(res.data);
        console.log("lotteryresult", res.data);
      })
      .catch();
    axios
      .post(url_drawresult, req_drawresult, header_drawresult)
      .then((res) => {
        // console.log("hiadmnlottery");
        setLatestLotteryresult(res.data);
        console.log("latestlotteryresult", res.data);
      })
      .catch();
  }, []);

  const LogIn = () => {
    navigate("/Login");
  };
  const handleLotteryAdd = () => {};
  const label4click=(e)=>{
 
    navigate("/")
  }
  const label5click=()=>{
    navigate("/AdminDashboard")
  }
  const label7click=()=>{
    navigate("/LotteryManager")
    
  }
  const label6click=()=>{
    navigate("/AdminUnit")
  }
  const label8click=()=>{
    navigate("/TicketSelector", { state: { id: "", name: "" } })
  }
  return (
    <div className="AdminLotteryManager_outer">
      <div className="AdminLotteryManager_headerUser">
        {" "}
        <HeaderUser
          label1={uname}
          label2={0}
          label3={"My Cart"}
          label4={"Home"}
          label5={"Dashboard"}
          label6={"Summary"}
          label7={"Lottery Manager"}
          label8={"Buy Now"}
          label4click={label4click}
          label5click={label5click}
          label7click={label7click}
          label6click={label6click}
          label8click={label8click}
        />
      </div>
       <div className="LotteryManager_row1">
        <div className="LotteryManager_col1"><AddLott/></div>
        <div className="LotteryManager_col2"> <ProviderInfo/></div>
   
       </div>+
      {/* <div className="LotteryManager_row">
       
      <AddLott/>
      <ProviderInfo/>
      </div> */}
      {/* <div className="AdminLotteryManager_row">
        <div className="AdminLotteryManager_tables">
          <div className="AdminLotteryManager_row_col"> */}
           
           
          {/* </div>
          
        </div>
      </div> */}
      

      
{/* 
      <div className="AdminLotteryManager_footer">
        <Footer />
      </div> */}
    </div>
  );
}
