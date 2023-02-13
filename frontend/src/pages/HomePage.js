import "./HomePage.css";

import HeaderUser from "../components/HeaderUser";
import Sliderswipe from "../components/Sliderswipe";
import Animation from "../components/Animation";
import Option from "../components/Option";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Timer from "../components/Timer";
import { useDispatch, useSelector } from "react-redux";
import TicketSelector from "./TicketSelector";
import { GiConsoleController } from "react-icons/gi";

import config from "../config.json";

function HomePage() {
  const lotterydetails = useSelector((state) => state.lotterydetails);
  console.log("hp", lotterydetails);
  const navigate = useNavigate();
  const [lotteryname, setLotteryname] = useState("");
  const [date, setDate] = useState("");
  const [prize, setPrize] = useState("");
  const [lotteryid, setLotteryid] = useState("");
  const [count, setCount] = useState("");
  var uname = localStorage.getItem("uname");
  const userid = localStorage.getItem("userid");
  const usrname = localStorage.getItem("usrname");
  // const [lotterydetails,setLotterydetails]=useState([])
  console.log(userid);
  console.log("dt", date);
  // const ltryid = useSelector((state) => state.ltryid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "issubidexist", payload: false });
    dispatch({ type: "iscolumnexist", payload: false });
    let url = config.url + "drawticket";
    let request = {};
    let header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("draw", res.data);
        dispatch({ type: "setLotterydetails", payload: res.data });
        setDate(res.data[0].drawdate);
        setLotteryname(res.data[0].txtLotteryname);
        setPrize(res.data[0].txtLotteryprize);
        setLotteryid(res.data[0].id);
        // setLotterydetails(res.data);

        var t = false;
        for (const iterator of res.data) {
          if (iterator.sub_id != null) {
            console.log("itrt_sub_id", iterator.sub_id);
            t = true;
            dispatch({ type: "issubidexist", payload: t });
          }
        }
        var k = false;
        for (const iterator of res.data) {
          console.log("itr_clmno", iterator.columnNo);
          if (iterator.columnNo != 0) {
            k = true;
            dispatch({ type: "iscolumnexist", payload: k });
          }
        }
      })

      .catch();

    let url_cart = config.url + "header_countunit";
    let header_cart = {};
    let request_cart = { id: userid };
    axios
      .post(url_cart, request_cart, header_cart)
      .then((res) => {
        console.log(res.data[0].count);
        if ((userid = "")) {
          setCount(0);
          localStorage.setItem("cartcount", count);
        } else {
          setCount(res.data[0].count);
          localStorage.setItem("cartcount", count);
        }
      })
      .catch();
  }, []);

  const buynowclick = (e) => {};
  const registerclick = (e) => {};
  const label6click = (e) => {
    if (usrname === "") {
      navigate("/Login");
    } else {
      navigate("/TicketSelector");
    }
    // { state: {lotterydetails:lotterydetails } }
  };
  const label7click = () => {
    navigate("/Login");
  };
  const label8click = () => {
    navigate("/Signup");
  };
  const ticketPurchase = () => {
    console.log("lotterydetails", lotterydetails);

    if (usrname === "") {
      navigate("/Login");
    } else {
      navigate("/TicketSelector");
    }
  };
  return (
    <div className="lottery_outer">
      <div className="lottery_headerUser">
        <HeaderUser
          label1={usrname}
          label2={count}
          label3={"Cart"}
          label4={"Home"}
          label5={"Learn"}
          label6={"Buy Now"}
          label7={"Login"}
          label8={"Register"}
          label1click={""}
          label4click={buynowclick}
          label5click={registerclick}
          label6click={label6click}
          label7click={label7click}
          label8click={label8click}
        />
      </div>
      {count}
      <div className="lottery_sliderswipe">
        <Sliderswipe />
      </div>
      <div className="lottery_lottunits">
        <Timer
          details={lotterydetails}
          deadline={date}
          prize={prize}
          ticketPurchase={ticketPurchase}
          lotteryid={lotteryid}
          variable1={"id"}
          variable2={"main_ltry"}
          variable3={"txtLotteryprize"}
          variable4={"drawdate"}
          variable5={"sub_ltry"}
        />
      </div>
      {/* <div className='lottery_lottunits'><LotteryUnits details={lotteryname} date={date}/></div> */}
      <div className="lottery_animation">
        <Animation />
      </div>
      <div className="lottery_option">
        <Option />
      </div>
      <div className="lottery_footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
