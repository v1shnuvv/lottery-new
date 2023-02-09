import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";
import Unitlist from "../components/Unitlist";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import AdminUserList from "../components/AdminUserList";
import Filterbox from "../components/Filterbox";
import "./AdminUnitlist.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import config from '../config.json'

export default function AdminUnitlist() {
  const navigate = useNavigate();
  const uname = localStorage.getItem("usrname");
  const [unitdetails, setUnitdetails] = useState([]);
  const [searchdate, setSearchdate] = useState([]);

  const [userarray, setUserarray] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [providername, setProvidername] = useState("");
  const [Lotteryname, setLotteryname] = useState("");
  const [purchasedate1, setPurchasedate1] = useState("");
  // const [purchasedate2, setPurchasedate2] = useState("");
  const [drawdate, setDrawdate] = useState("");
  const [selectall, setSelectall] = useState(false);
  const [mainshow, setMainshow] = useState(false);
//adminuserlist
  const [lonameup2, setLonameup2] = useState("block");
  const [lonamedown2, setLonamedown2] = useState("none");
  const [providerup2, setProviderup2] = useState("block");
  const [providerdown2, setProviderdown2] = useState("none");
  const [dateup2, setDateup2] = useState("block");
  const [datedown2, setDatedown2] = useState("none")
  const _ = require("lodash");
 


  useEffect(() => {
    let url = config.url+"userlistforadmin";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("arrayhere", res.data);
        var temp = [...res.data];
        console.log("array", temp);

        for (const item of temp) {
          item.ischecked = false;
        }
        console.log("newarray", temp);
        setUserarray(temp);
        setUserdata(temp);
      })
      .catch();
  }, []);

  //==============handleclickbutton for Filterbox=============//

  const filterhandleclick = () => {
    setMainshow(mainshow ? false : true);
    setUserarray(userdata);
    setLotteryname(""); 
    setProvidername("");//
    setDrawdate("");
    // setPurchasedate1("");//
  };
  console.log("li/p", Lotteryname);
  //=================Filterbox=======================//

  const handleclickfilter = () => {
    
    let templottery= userarray.filter((item) =>
      item.txtLotteryname.toLowerCase().includes(Lotteryname.toLowerCase())
    );
    let tempprovider = userarray.filter((item) =>
      item.txtProvidername.toLowerCase().includes(providername.toLowerCase())
    );
    let tempCompLotPro = userarray.filter((item)=>
    item.txtLotteryname.toLowerCase().includes(Lotteryname.toLowerCase()) &&
    item.txtProvidername.toLowerCase().includes(providername.toLowerCase())
    )
    console.log("rp", tempCompLotPro);
    
    // let newsample = userarray.filter(
    //   (item) =>
    //     item.txtProvidername.toLowerCase().includes(providername.toLowerCase()) &&
    //     item.txtLotteryname.toLowerCase().includes(Lotteryname.toLowerCase())
    // );
    // let ddate = userarray.filter((item) => item.lotterydrawdate === drawdate);
    // console.log("dd", ddate);

    // let pdate = userarray.filter((item) => item.purchasedate === purchasedate1);
    // console.log("pd", pdate);

    // console.log("new", newsample);
    // console.log("lotteryname", sample);
    // console.log("username", temp);
    // console.log("myname", username);
    // console.log("mylott", Lotteryname);
    // console.log("purdate",purchasedate1)
    if (Lotteryname.length>0 && providername.length==0){
      setUserarray(templottery);
    } else if (providername.length>0 && Lotteryname.length==0) {
      setUserarray(tempprovider);
    } else if(Lotteryname.length>0 && providername.length>0 ){
      setUserarray(tempCompLotPro)
    }
    else {
    }
    setMainshow(false);
    console.log(mainshow);
    console.log("tp",tempprovider);
    console.log("tl",templottery);
    console.log("pr", providername.length, Lotteryname.length);
  };

  //=================searchbar===================//

  const setSerach = (value) => {
    let temp = userdata.filter(
      (item) =>
        item.txtLotteryname.toLowerCase().includes(value.toLowerCase()) ||
        item.txtProvidername.toLowerCase().includes(value.toLowerCase()) 
    );

    setUserarray(temp);
    console.log({ value });
    console.log(value);
    console.log("temp", temp);
  };

  //=======================selectall checkbox================//

  const handlechanging = (value) => {
    setSelectall(false);
    console.log("helloooooo", value);
    let temp = [...userarray];
    if (temp[value].ischecked == false) {
      temp[value].ischecked = true;
    } else {
      temp[value].ischecked = false;
    }
    setUserarray(temp);
    console.log("hh", temp[value]);
  };

  const handlechange = () => {
    setSelectall(selectall ? false : true);
    var temp = [...userarray];
    if (selectall === false) {
      for (const item of temp) {
        // if (item.ischecked == false) {
        //   item.ischecked = true;
        //   console.log("hello iam");
        // } else {
        //   item.ischecked = false;
        // }
        item.ischecked = true;
      }
    } else {
      for (const item of temp) {
        item.ischecked = false;
      }
    }
    setUserarray(temp);
  };

//adminuserlist


const sortnamea =(e) => {
  let sortnamea = _.orderBy(userarray, ['txtLotteryname' ], ['asc']);
  console.log("sortnamea",sortnamea);
  console.log("doc",document.getElementById("lonameup").style.display);
  setUserarray(sortnamea);
  setLonamedown2("block")
  setLonameup2("none")
  console.log(lonamedown2)
}

const sortnamed =(e) => {
  let sortnamed = _.orderBy(userarray, ['txtLotteryname' ], ['desc']);
  console.log("sortnamed",sortnamed);
  setLonamedown2("none")
  setLonameup2("block")
  setUserarray(sortnamed);
}

const sortproa =() => {
  let sortproa = _.orderBy(userarray, ['txtProvidername' ], ['asc']);
  console.log("sortproa",sortproa);
  setProviderdown2("block")
  setProviderup2("none")
  setUserarray(sortproa);
}

const sortprod =() => {
  let sortprod = _.orderBy(userarray, ['txtProvidername' ], ['desc']);
  console.log("sortprod",sortprod);
  setProviderdown2("none")
  setProviderup2("block")
  setUserarray(sortprod);
}

const sortdatea =() => {
  let sortdatea = _.orderBy(userarray, ['dtLotterydrawdate' ], ['asc']);
  console.log("sortdatea",sortdatea);
  setDatedown2("block")
  setDateup2("none")
  setUserarray(sortdatea);
}

const sortdated =() => {
  let sortdated = _.orderBy(userarray, ['dtLotterydrawdate' ], ['desc']);
  console.log("sortdated",sortdated);
  setDatedown2("none")
  setDateup2("block")
  setUserarray(sortdated);
}

  //================================================================================//

  //   const LogIn = () => {
  //     navigate("/Login");
  //   };
  //   const DeleteFunc = () => {
  //     let url = config.url+"unitdelete";
  //     let request = { id: 1 };
  //     let header = {};
  //     axios
  //       .post(url, request, header)
  //       .then((res) => {
  //         console.log("unitlist", res.data);
  //         setUnitdetails(res.data);
  //       })
  //       .catch();
  //   };
  //   const label1click = () => {
  //     navigate("/Userprofile");
  //   };
  //   const label4click = (e) => {
  //     navigate("/");
  //   };
  //   const label5click = () => {
  //     navigate("/AdminDashboard");
  //   };
  //   const label7click = () => {
  //     navigate("/LotteryManager");
  //   };
  //   const label6click = () => {
  //     navigate("/AdminUnit");
  //   };
  //   const label8click = () => {
  //     navigate("/TicketSelector", { state: { id: "", name: "" } });
  //   };
  //   const search_date = (d) => {
  //     console.log(d);
  //     let url = config.url+"search_date";
  //     let request = { date: d };
  //     console.log("req", request);
  //     let header = {};
  //     axios
  //       .post(url, request, header)
  //       .then((res) => {
  //         console.log("datesearch", res.data);
  //         setSearchdate(res.data);
  //       })
  //       .catch();
  //   };
  const label4click = () => {
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
  return (
    <div className="AdminUnitlist_outer">
      {/* <div className="AdminUnitlist_headerUser">
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
        />
        
      </div> */}
      <div className="AdminUnitlist_filterbar">
        <Filterbar
          //   DeleteFunc={DeleteFunc}
          //   search_date={search_date}
          setSerach={setSerach}
          handleclick={filterhandleclick}
          handleselectall={handlechange}
          value={selectall}
        />
      </div>
      <div className="AdminUnitlist_filterbox">
        <Filterbox
          showfilter={mainshow}
          setLotteryname={setLotteryname}
          setProvidername={setProvidername}
          // setPurchasedate1={setPurchasedate1}
          // setPurchasedate2={setPurchasedate2}
          setDrawdate={setDrawdate} //
          handleclickfilter={handleclickfilter}
        />
      </div>

      <div className="AdminUnitlist_unitlist">
        <div className="AdminUnitlist_unitlist_item">
          <AdminUserList data={userarray} handlechange={handlechanging} sortnamea={sortnamea} sortnamed={sortnamed} sortproa={sortproa} sortprod={sortprod} sortdatea={sortdatea} sortdated={sortdated} lonamedown2={lonamedown2} lonameup2={lonameup2}  providerup2={providerup2} providerdown2={providerdown2}  dateup2={dateup2} datedown2={datedown2} />
        </div>
      </div>
    
      {/* <div className="AdminUnitlist_footer">
        <Footer />

      </div> */}
    </div>
  );
}
// export default AdminUnitlist;