import "./AdminDashboard.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";
import Uservalidationfetch_Admin from "../components/Uservalidationfetch_Admin";
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
import Unitsold from "../components/List";
import Winners from "../components/Winners";
import Unitpending from "../components/List";
import { BsCloudMoonFill } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import Totalwinningvalidation from "../components/Totalwinningvalidation";
import Uservalidationfetch from "../components/Uservalidationfetch_Admin";
import List from "../components/List";
import Sidemenu from "../components/Sidemenu";
function Dashboard() {
  const navigate = useNavigate();

  const [unitdetails, setUnitdetails] = useState([]);
  const [unitsold, setUnitsold] = useState([]);
  const [unitpending, setUnitpending] = useState([]);
  const [winner, setWinner] = useState("");
  const usrname = localStorage.getItem("usrname");
  console.log("usrname", usrname);
  const [value, setValue] = useState("false");

  //drawresult----->
  const [lotteryresult, setLotteryresult] = useState([]);
  const [latestlotteryresult, setLatestLotteryresult] = useState([]);
  const [latestDrawNum, setLatestDrawNum] = useState([]);
  const [matchinNum, setMatchingNum] = useState([]);
  //-----<
  //totalwinningvalidation----->
  const [totallotterywinning, setTotallotterywinning] = useState([]);
  const [totalwinning, setTotalwinning] = useState([]);
  const [newarray, setNewarray] = useState([]);
  //-----<
  //uservalidationfetch----->
  const [latestunits, setLatestunits] = useState([]);
  //-----<

  const [maindate, setMaindate] = useState("");
  const [subdate, setSubdate] = useState("");
  const [lotterydetails, setLotterydetails] = useState([]);
  const [lotteryid, setLotteryid] = useState("");

  const [unitlist, setUnitlist] = useState([]);
  const [adminpurchase, setAdminpurchase] = useState([]);

  useEffect(() => {
    let url_unitsold = "http://localhost:8080/Unitsold";
    let request_unitsold = {};
    let header_unitsold = {};

    let url_unitpending = "http://localhost:8080/Unitpending";
    let request_unitpending = {};
    let header_unitpending = {};

    let url_winners = "http://localhost:8080/winners";
    let request_winners = {};
    let header_winners = {};

    //drawresult//uservalidationfetch----->
    let url_drawlist = "http://localhost:8080/upcominglotterydraws";
    let req_drawlist = {};
    let header_drawlist = {};

    let url_drawresult = "http://localhost:8080/latestdrawunits";
    let req_drawresult = {};
    let header_drawresult = {};
    //-----<
    //totalwinningvalidation----->
    let url_totalwinningvalidation =
      "http://localhost:8080/totallotterywinnigtodate";
    let req_totalwinningvalidation = {};
    let header_totalwinningvalidation = {};
    let url_totalwinningvalidation1 = "http://localhost:8080/totalwinnigtodate";
    let req_totalwinningvalidation1 = {};
    let header_totalwinningvalidation1 = {};
    //-----<
    let url_all = "http://localhost:8080/admindash_fetchall";
    let request_all = {};
    let header_all = {};
    let url_admin = "http://localhost:8080/admindash_adminpurchase";
    let request_admin = {};
    let header_admin = {};
    // //uservalidationfetch----->
    // let url_uservalidation = "http://localhost:8080/latestdrawunits";
    // let req_uservalidation = {};
    // let header_uservalidation = {};
    // //-----<
    let url = "http://localhost:8080/drawticket";
    let request = {};
    let header = {};
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

    // axios
    //   .post(url_drawresult, req_drawresult, header_drawresult)
    //   .then((res) => {
    //     setLatestDrawNum(JSON.parse(res.data[0].txtLotteryresult));
    //   })
    //   .catch();

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
    //totalwinningvalidation----->
    axios
      .post(
        url_totalwinningvalidation,
        req_totalwinningvalidation,
        header_totalwinningvalidation
      )
      .then((res) => {
        setTotallotterywinning(res.data);
        console.log("slw", res.data);
      })
      .catch();
    axios
      .post(
        url_totalwinningvalidation1,
        req_totalwinningvalidation1,
        header_totalwinningvalidation1
      )
      .then((res) => {
        console.log("wini", res.data);
        var temp = [...res.data];
        for (const element of temp) {
          element.isClicked = false;
        }
        setTotalwinning(temp);
      })
      .catch();
    //-----<
    //uservalidationfetch----->
    axios
      .post(url_drawresult, req_drawresult, header_drawresult)
      .then((res) => {
        setLatestunits(res.data);
        console.log("th", res.data);
      })
      .catch();
    //-----<
    axios
      .post(url_all, request_all, header_all)
      .then((res) => {
        console.log("all", res.data);
        setUnitlist(res.data);
      })
      .catch();
    //------<
    axios
      .post(url_admin, request_admin, header_admin)
      .then((res) => {
        console.log("Admin", res.data);
        setAdminpurchase(res.data);
      })
      .catch();
  }, []);

  const LogIn = () => {
    navigate("/Login");
  };
  const handleLotteryAdd = () => {};
  const label4click = (e) => {
    navigate("/");
  };
  const label5click = () => {
    navigate("/AdminDashboard");
  };
  const label7click = () => {
    navigate("/LotteryManager");
  };
  const label6click = () => {
    navigate("/AdminUnit");
  };
  const label8click = () => {
    navigate("/TicketSelector", { state: { lotterydetails: lotterydetails } });
  };
  return (
    <div className="AdminDashboard_outer">
      <div className="AdminDashboard_headerUser">
        {" "}
        <HeaderUser
          label1={usrname}
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
      <div className="AdminDashboard_main">
        <div className="AdminDashboard_main_col_left">
          <Sidemenu/>
        </div>
        <div className="AdminDashboard_main_col_right">
          <div className="AdminDashboard_row">
            <Result
              array1={lotteryresult}
              array2={latestlotteryresult}
              array3={latestDrawNum}
              array4={matchinNum}
              value1={"txtLotteryname"}
              value2={"txtCost"}
            />
          </div>
          <div className="AdminDashboard_row">
            <div className="AdminDashboard_tables">
              <div className="AdminDashboard_row_col">
                <label>Unit sold</label>
                {/* <Unitsold
        label1={"Lottery"}
        label2={"Drawdate"}
        label3={"Units Sold"}
        array={unitsold}
        variable1={"Lotterymaster"}
        variable2={"DrawDate"}
        variable3={"UnitSold"}
      /> */}
                <List
                  label1={"Lottery"}
                  label2={"Provider"}
                  label3={"Units Sold"}
                  label4={"Units admin to purchase"}
                  label5={"Units pending to purchase"}
                  variable1={"txtLotteryname"}
                  variable2={"txtProvidername"}
                  variable3={"unitsold"}
                  variable4={"adminticket"}
                  variable5={"adminsold"}
                  array={unitlist}
                  array1={adminpurchase}
                />
              </div>
              {/* <div className="AdminDashboard_row_col">
      <label>Unit pending</label>
      <Unitpending
        label1={"Lottery"}
        label2={"Units Confirmed"}
        label3={"Units Pending"}
        array={unitsold}
        variable1={"Lotterymaster"}
        variable2={"UnitConfirmed"}
        variable3={"UnitPending"}
      />
    </div> */}
            </div>
          </div>

          <div className="AdminDashboard_row">
            <div className="AdminDashboard_tables">
              <div className="AdminDashboard_row_col">
                <Totalwinningvalidation
                  setTotalwinning={setTotalwinning}
                  totallotterywinning={totallotterywinning}
                  setNewarray={setNewarray}
                  array1={totalwinning}
                  array2={newarray}
                />
              </div>
              <div className="AdminDashboard_row_col">
                <Uservalidationfetch_Admin array1={latestunits} />
              </div>
            </div>
            {/* <Winners value1={winner} /> */}
          </div>

          {/* <div className="AdminDashboard_lottery">
  <div className="AdminDashboard_lottery_btn">
    <Checkoutbutton value2={"Add Lottery"} />
  </div>
  <AddLottery />
  <AddLotterycom />
  <AddLotterycalc />
</div> */}
        </div>
      </div>

      <div className="AdminDashboard_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
