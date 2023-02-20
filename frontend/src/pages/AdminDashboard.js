import "./AdminDashboard.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";
import Uservalidationfetch_Admin from "../components/Uservalidationfetch_Admin";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import config from "../config.json";
import axios from "axios";
import { useEffect } from "react";
import Result from "../components/Drawresult";
import AddLott from "../components/AddLott";
import AddLottery from "../components/AddLottery";
import AddLotterycalc from "../components/AddLotterycalc";
import AddLotterycom from "../components/AddLotterycom";
import Checkoutbutton from "../components/Checkoutbutton"; 
import Winners from "../components/Winners"; 
import { BsCloudMoonFill } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import Totalwinningvalidation from "../components/Totalwinningvalidation";
import Uservalidationfetch from "../components/Uservalidationfetch_Admin";
import ListNew from "../components/ListNew";
import Sidemenu from "../components/Sidemenu";
import AdminUnitlist from "./AdminUnitlist";
import Providerinfo from "../components/ProviderInfo";
import ResultUpdate from "../components/ResultUpdate";
import Resultpublish from "../components/Resultpublish";
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
  const [listarray, setListarray] = useState([]);
  const [listsample, setListsample] = useState([]);
  console.log("listarray", listarray);
  //component show----->
  const [shw, setShw] = useState([
    { shwme: "block" },
    { shwme: "none" },
    { shwme: "none" },
    { shwme: "none" },
    { shwme: "none" },
    { shwme: "none" },
    { shwme: "none" },
    { shwme: "none" },
  ]);
  console.log("investi", shw[0].shwme);
  const handleclick1 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[0].shwme = "block";
    setShw(temp);
  };
  const handleclick2 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[6].shwme = "block";
    setShw(temp);
  };
  const handleclick3 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[2].shwme = "block";
    setShw(temp);
  };
  const handleclick4 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[3].shwme = "block";
    setShw(temp);
  };
  const handleclick5 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[4].shwme = "block";
    setShw(temp);
  };
  const handleclick6 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[5].shwme = "block";
    setShw(temp);
  };
  const handleclick7 = () => {
    let temp = [...shw];
    for (const item of temp) {
      item.shwme = "none";
    }
    temp[7].shwme = "block";
    setShw(temp);
  };

  //-----<
  useEffect(() => {
    let url_unitsold = config.url + "Unitsold";
    let request_unitsold = {};
    let header_unitsold = {};

    let url_unitpending = config.url + "Unitpending";
    let request_unitpending = {};
    let header_unitpending = {};

    let url_winners = config.url + "winners";
    let request_winners = {};
    let header_winners = {};

    //drawresult//uservalidationfetch----->
    // let url_drawlist = config.url+"upcominglotterydraws";
    let url_drawlist = config.url + "providerprizelist";
    let req_drawlist = {};
    let header_drawlist = {};

    let url_drawresult = config.url + "latestdrawunits";
    let req_drawresult = {};
    let header_drawresult = {};
    //-----<
    //totalwinningvalidation----->
    let url_totalwinningvalidation = config.url + "totallotterywinnigtodate";
    let req_totalwinningvalidation = {};
    let header_totalwinningvalidation = {};
    let url_totalwinningvalidation1 = config.url + "totalwinnigtodate";
    let req_totalwinningvalidation1 = {};
    let header_totalwinningvalidation1 = {};
    //-----<
    let url_all = config.url + "admindash_fetchall";
    let request_all = {};
    let header_all = {};
    let url_admin = config.url + "admindash_adminpurchase";
    let request_admin = {};
    let header_admin = {};
    // //uservalidationfetch----->
    // let url_uservalidation = config.url+"latestdrawunits";
    // let req_uservalidation = {};
    // let header_uservalidation = {};
    // //-----<
    // let url = config.url+"drawticket";
    // let request = {};
    // let header = {};
    // axios
    //   .post(url, request, header)
    //   .then((res) => {
    //     console.log("draw", res.data);
    //     setMaindate(res.data[0].drawdate);
    //     setSubdate(res.data[0].sub_drawdate);
    //     // setLotteryname(res.data[0].txtLotteryname);
    //     // setPrize(res.data[0].txtLotteryprize);
    //     setLotteryid(res.data[0].id);
    //     setLotterydetails(res.data);
    //   })
    //   .catch();
    // axios
    //   .post(url_unitsold, request_unitsold, header_unitsold)
    //   .then((res) => {
    //     console.log("unitsold", res.data);
    //     setUnitsold(res.data);
    //   })
    //   .catch();
    // axios
    //   .post(url_unitpending, request_unitpending, header_unitpending)
    //   .then((res) => {
    //     console.log("unitpending", res.data);
    //     setUnitpending(res.data);
    //   })
    //   .catch();

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
        console.log("hello", res.data);
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
        setListsample(res.data);
      })
      .catch();
  }, []);
  const LogIn = () => {
    navigate("/Login");
  };
  const handleLotteryAdd = () => {};
  const label5click = (e) => {
    navigate("/");
  };
  // const label5click = () => {
  //   navigate("/AdminDashboard");
  // };
  // const label7click = () => {
  //   navigate("/LotteryManager");
  // };
  // const label6click = () => {
  //   navigate("/AdminUnit");
  // };
  const label7click = () => {
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
          label5={"Home"}
          // label5={"Dashboard"}
          // label6={"Summary"}
          // label7={"Lottery Manager"}
          label7={"Buy Now"}
          label5click={label5click}
          // label5click={label5click}
          // label7click={label7click}
          // label6click={label6click}
          label7click={label7click}
        />
      </div>
      <div className="AdminDashboard_main">
        <div className="AdminDashboard_main_col_left">
          <Sidemenu
            shwFilter={handleclick1}
            shwAddresult={handleclick2}
            shwAddlottery={handleclick3}
            shwAddprovider={handleclick4}
            shwPurchasesummary={handleclick5}
            shwResult={handleclick6}
            shwResultupdate={handleclick7}
          />
        </div>
        <div className="AdminDashboard_main_col_right">
          <div className="AdminDashboard_row" style={{ display: shw[0].shwme }}>
            <AdminUnitlist />
          </div>
          <div className="AdminDashboard_row" style={{ display: shw[6].shwme }}>
            <ResultUpdate />
          </div>
          <div className="AdminDashboard_row" style={{ display: shw[2].shwme }}>
            <AddLott />
          </div>
          <div className="AdminDashboard_row" style={{ display: shw[3].shwme }}>
            <Providerinfo />
          </div>
          <div className="AdminDashboard_row" style={{ display: shw[7].shwme }}>
            <Resultpublish />
          </div>

          <div className="AdminDashboard_row" style={{ display: shw[4].shwme }}>
            {/* <div className="AdminDashboard_tables"> */}
            {/* <div className="AdminDashboard_row_col" > */}

            {/* <Unitsold
        label1={"Lottery"}
        label2={"Drawdate"}
        label3={"Units Sold"}
        array={unitsold}
        variable1={"Lotterymaster"}
        variable2={"DrawDate"}
        variable3={"UnitSold"}
      /> */}
            <ListNew
              listsample={listsample}
              label1={"Lottery"}
              label2={"Provider"}
              label3={"Units Sold"}
              label4={"Units to purchase"}
              label5={"Units purchased"}
              label6={"Balance"}
              variable1={"txtLotteryname"}
              variable2={"txtProvidername"}
              variable3={"unitsold"}
              variable4={"adminticket"}
              variable5={"adminsold"}
              array={unitlist}
              array1={listarray}
            />
          </div>

          <div className="AdminDashboard_row" style={{ display: shw[5].shwme }}>
            <Result
              array1={lotteryresult}
              array2={latestlotteryresult}
              array3={latestDrawNum}
              array4={matchinNum}
              value1={"txtLotteryname"}
              value2={"txtCost"}
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
          {/* </div> */}
          {/* </div> */}

          <div className="AdminDashboard_row" style={{ display: "none" }}>
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
