import "./UserPage.css";
import axios from "axios";
import HeaderUser from "../components/HeaderUser";
import LotteryUnits from "../components/LotteryUnits";
import Option from "../components/Option";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import Collapsible from "react-collapsible";
import { GrAddCircle } from "react-icons/gr";
import { useState } from "react";
import Userdetails from "./Userdetails";
import { useEffect } from "react";
import config from "../config.json";
import List1 from "../components/List1";
import List2 from "../components/List2";
function UserPage() { 
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [maindate, setMaindate] = useState("");
  const [subdate, setSubdate] = useState("");
  const [lotterydetails, setLotterydetails] = useState([]);
  const [lotteryid, setLotteryid] = useState("");
  const [userlotterydetails, setUserlotterydeatils] = useState([]);
  const [userwinnigdetails, setUserwinnigdetails]=useState([])
  const [userresult, setUserresult] = useState([]);
  const [unitcount, setUnitcount] = useState("")
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    let url = config.url + "drawticket";
    let request = {};
    let header = {};

    let urluserld = config.url + "userlotterydetails";
    let requestuserld = {userid: userid};
    let headeruserld = {};

    let urluserwindetails = config.url + "userwinningdetails";
    let requestuserwindetails = {userid: userid};
    let headeruserwindetails = {};

    let urlunitcount = config.url + "header_countunit";
    let requestunitcount = {id: userid};
    let headerunitcount = {};


    
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("draw", res.data);
        setMaindate(res.data[0].drawdate);
        setSubdate(res.data[0].sub_drawdate);
        // setLotteryname(res.data[0].txtLotteryname);
        // setPrize(res.data[0].txtLotteryprize);
        setLotteryid(res.data[0].id);
        setLotterydetails(res.data);
      })
      .catch();

    axios
      .post(urluserld, requestuserld, headeruserld)
      .then((res) => {
        
        setUserlotterydeatils(res.data);
      })
      .catch();

      axios
      .post(urluserwindetails, requestuserwindetails, headeruserwindetails)
      .then((res) => {
        console.log("userwinnig", res.data);
        setUserwinnigdetails(res.data)
         
      })
      .catch();

    let url1 = config.url + "userunitfetch";
    let req1 = {
      userid: 5,
      provid: 3,
      lotteryname: "Kerala lottery",
    };
    let header1 = {};

    axios
      .post(url1, req1, header1)
      .then((res) => {
        console.log("result", userresult);
        setUserresult(res.data);
        console.log("k", userresult[0].txtLotteryname);
      })
      .catch();

      axios
      .post(urlunitcount, requestunitcount, headerunitcount)
      .then((res) => {
        setUnitcount(res.data[0].count);
        console.log("unitcount",res.data[0].count);
      })
      .catch();

  }, []);

  const usrname = localStorage.getItem("usrname");
  const mycart = () => {
    navigate("/Login");
  };
  const buynow = () => {
    navigate("/TicketSelector");
  };
  const profile = () => {
    navigate("/Userprofile");
  };
  const label5click = () => {
    navigate("/UserPage");
  };
  const label7click = () => {
    // navigate("/LotteryManager")
  };
  const label6click = () => {
    navigate("/Userprofile");
  };
  const label8click = () => {
    navigate("/TicketSelector", { state: { lotterydetails: lotterydetails } });
  };
  const label4click = () => {
    navigate("/");
  };

  return (
    <div className="userpage_outer">
      <div className="userpage_headerUser">
        {" "}
        <HeaderUser
          label1={usrname}
          label2={unitcount}
          label3={"My Cart"}
          label4={"Home"}
          label5={"Dashboard"}
          label6={"Profile"}
          label7={"About Us"}
          label8={"Buy Now"}
          label4click={label4click}
          label5click={label5click}
          label7click={label7click}
          label6click={label6click}
          label8click={label8click}
        />
      </div>
      <div className="userpage_row_container">
        <div className="userpage_row">
          <List1 label1={"Lottery Name"} 
          label2={"Provider Name"}
          label3={"Lottery Number"}
         label4={"Purchased Date"}
         label5={"Draw Date"}
         variable1={"lotteryname"}
         variable2={"providername"}
         variable3={"lotterynumber"}
         variable5={"drawdate"}
         variable4={"purchaseddate"}
          array={userlotterydetails} />
        </div>
        <div className="userpage_row">
          <List2 label1={"Lottery Name"} 
          label2={"Prize money"}
         label3={"No.of Matching"}
         label4={"Draw Date"}
         variable1={"lotteryname"}
         variable2={"prizemoney"}
         variable3={"matchingcount"}
         variable4={"drawdate"}
          array={userwinnigdetails} />
        </div>
        {/* <div className="userpage_row">
          <List1
            label1={"Lottery Name"}
            label2={"Prize won"}
            label3="Provider Name"
            label4="Prizes Won Until Now"
            variable1={"txtLotteryname"}
            variable2={"txtPrizemoney"}
            variable3={"txtProvidername"}
            variable4={"TotalPrize"}
            array={userresult}
          />
        </div> */}
      </div>
      {/* <div className="userpage_col1"> */}
      {/* <Userdetails/> */}
      {/* <div className="userpage_lottunits">
        <Timer />
        </div> */}

      {/* <div className="userpage_col_tab">
        <Collapsible
          trigger={
            <div className="userpage_col_tab_icon">
              <GrAddCircle />
              <label>Lottery info</label>
            </div>
          }
        >
          <List array={array} />
        </Collapsible>
      </div> */}
      {/* </div> */}
      {/* <div className="userpage_list"> */}
      {/* <List label1={"Lotteryname"} label2={"Numbers"} label3={"status"} /> */}
      {/* </div> */}
      {/* <div className="userpage_option">
        {" "}
        <Option />
      </div> */}
      <div className="userpage_footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default UserPage;
