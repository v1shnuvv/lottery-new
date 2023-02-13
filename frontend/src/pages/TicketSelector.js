import HeaderUser from "../components/HeaderUser";
import Drawinformation from "../components/Drawresult";
import Lineselector from "../components/Lineselector";
import Offerselector from "../components/Offerselector";
import Linemessage from "../components/Linemessage";
import Footer from "../components/Footer";
import Lotterybuynow from "../components/Lotterybuynow";
import { useState, useMemo, useEffect } from "react";
import "./TicketSelector.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Checkoutbutton from "../components/Checkoutbutton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import { MdLocationCity } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { CgDetailsLess } from "react-icons/cg";
import { loadClientAuth2 } from "gapi-script";
import usestate from "usestate";
import Numberselector from "../components/Numberselector";
import config from "../config.json";

export default function TicketSelector() {
  const [column, setColumn] = useState("");
  const [startno, setStartno] = useState("");
  const [endno, setEndno] = useState("");
  const [numarray, setNumarray] = useState([]);

  const [value, setValue] = useState([]);
  const [subltry, setSubltry] = useState([]);
  const [err, setErrmsg] = useState("");
  const [maindate, setMaindate] = useState("");
  const [subdate, setSubdate] = useState("");
  const [linearry, setLinearray] = useState({ main: [], sub: [] });
  const [ltryname, setLtryname] = useState("");
  const [lotterylist, setLotterylist] = useState([]);
  const [ltryid, setltryid] = useState({ ltrid: [], ltrname: [] });
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [lotteryid, setLotteryid] = useState("");
  const [linenum, setlinenum] = useState("");
  const [linenumnew, setlinenumnew] = useState(5);
  const [main_start, setMainstart] = useState("");
  const [main_end, setMainend] = useState("");
  const [sub_start, setSubstart] = useState("");
  const [sub_end, setSubend] = useState("");
  // const [lotterydetails, setLotterydetails] = useState([]);
  const linearray = useSelector((state) => state.linearray);
  const offerarray = useSelector((state) => state.offerarray);
  const lotterydetails = useSelector((state) => state.lotterydetails);
  // console.log("ts+ld", lotterydetails);
  const dispatch = useDispatch();
  const location = useLocation();
  const usrname = localStorage.getItem("usrname");
  const [subltryid, setSubltryid] = useState("");
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(true);
  //const [isfinishd, setisfinished] = useState(false);
  const isfinishd = useSelector((state) => state.issubidexist);
  console.log("isfinished", isfinishd);
  console.log("ts", usrname);

  const columnvalue = useSelector((state) => state.iscolumnexist);
  // console.log("columnvalue", columnvalue);
  const [show2, setShow2] = useState("");
  const [trigger, setTrigger] = useState();
  // console.log("linenum",linenum)
  var temp = [];
  // useEffect(()=>{
  //   dispatch({ type: "setLineArray", payload: [] });
  // })
  let Ltr_name = "";
  const userid = localStorage.getItem("userid");
  // console.log("userid", userid);
  const cnt = localStorage.getItem("cartcount");

  // useEffect(()=>{

  //   //alert('here')
  //   let temp=[];
  //   for(let k=0;k<linenumnew;k++){
  //     temp.push(k)
  //   }
  //   setAr(temp)

  // },[linenumnew])

  setTimeout(() => {
    setTrigger(1);
  }, 1);

  useEffect(() => {
    console.log("newcol" + columnvalue);
    setShow2(columnvalue);
    console.log(show2);
    setColumn(lotterydetails[0].columnNo);
    setStartno(lotterydetails[0].strtNo);
    setEndno(lotterydetails[0].endNo);

    setlinenum(lotterydetails[0].purchase);
    setMainstart(lotterydetails[0].mina_start);
    setMainend(lotterydetails[0].main_end);
    setSubstart(lotterydetails[0].sub_start);
    setSubend(lotterydetails[0].sub_end);
    dispatch({ type: "setLineArray", payload: [] });
    let id = lotterydetails[0].sub_id;
    setSubltryid(id);

    //======================================================================================//
    const myPromise = new Promise((resolve, reject) => {
      //   alert("foo");

      setTimeout(() => {
        let finalarray = [];
        for (let k = 0; k < linenum; k++) {
          let temparray = [];
          if (column > 0) {
            console.log("insideif");
            for (let i = 0; i < column; i++) {
              let a = [];
              for (let j = startno; j < endno + 1; j++) {
                a.push({ value: j, isclicked: false });
              }
              temparray.push(a);
            }
          } else {
            console.log("inside else");
            for (let j = main_start; j <= main_end; j++) {
              let tobj = { value: j, isselected: false };
              temparray.push(tobj);
            }
          }
          finalarray.push(temparray);
        }
        // setNumarray(finalarray);
        console.log("Manu", finalarray);
        dispatch({ type: "setLineArray", payload: finalarray });
        console.log("this is line array", linearray);
      }, trigger);
    });

    //=============================================================================================//

    console.log("sublotryid=>" + isfinishd);
    if (isfinishd) {
      let t_offer = [];

      for (var i = 0; i < linenum; i++) {
        var offerarray = [];
        for (let j = sub_start; j <= sub_end; j++) {
          let offerobj = { value: j, isselected: false };
          offerarray.push(offerobj);
        }
        t_offer.push(offerarray);
      }
      //setisfinished(false);
      dispatch({ type: "setOfferArray", payload: t_offer });
    }

    console.log("offerary" + JSON.stringify(offerarray));

    let url = config.url + "drawticket";
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
        // setLotterydetails(res.data);
      })
      .catch();
    if (lotterydetails != "") {
      console.log("location.state", lotterydetails);
      setLotterylist(lotterydetails);
    } else {
      let url = config.url + "ticketselector_lotteryfetch";
      let header = {};
      let request = {};
      axios
        .post(url, request, header)
        .then((res) => {
          // console.log("list", res.data);
          // setDetails(res.data)
          setLotterylist(res.data);
        })
        .catch();
    }
    // setTimeout(() => {
    //   alert("hai")
    // }, 5000);
  }, [trigger]);

  const home = () => {
    navigate("/");
  };

  // const chkout = (id) => {

  // };
  const chkout = (id) => {

    // if (usrname === "") {
    //   navigate("/Login");
    // } else {
      if (columnvalue) {
        let url1 = config.url + "insertunitnumber";
        let header1 = {};
        const temp = [...linearray];
        const tempnew = [];

        for (const objline of temp) {
          let selectedvalues = [];
          for (const objlineinner of objline) {
            for (const obj of objlineinner) {
              if (obj.isclicked === true) {
                selectedvalues.push(obj.value);
              }
            }
          }
          tempnew.push(selectedvalues);
        }
        console.log("tttt", tempnew);
        let request1 = { uid: userid, lid: id, arr: tempnew };
        axios
          .post(url1, request1, header1)
          .then((res) => {
            console.log(res.data);
            if (res.data != "Error") {
              if (!isfinishd) {
                dispatch({ type: "setLineArray", payload: [] });
                navigate("/Checkout", {
                  state: { lid: lotteryid, subltryid: subltryid },
                });
              } else {
                setShow(!show);
                dispatch({ type: "setLineArray", payload: [] });
                dispatch({ type: "issubidexist", payload: false });
              }
            }
          })
          .catch();

        // for (const iterator of tempnew) {
        //   if(iterator.length !=""){
        //     console.log("itt",iterator)
        //     let request1={userid:2, lid:id, arr:iterator}
        //     console.log("ffff",request1);
        //     axios.post(url1, request1, header1)
        //     .then((res)=>{
        //       console.log(res.data);
        //     }).catch();
        //   }
        // }
      } else {
        // if (usrname === " ") {
        //   navigate("/Login");
        // }

        console.log("selected line", linearray);
        console.log("selected id", id);
        let url = config.url + "insertunitnumber";
        let header = {};
        const valu = [];
        const temp = [...linearray];
        for (const itrt of temp) {
          let temp = [];
          for (const t of itrt) {
            if (t.isselected) temp.push(t.value);
          }
          valu.push(temp);
        }

        // for (var i = 0; i < valu.length; i++) {
        //   if (valu[i] != "") {
        let request = { uid: userid, lid: id, arr: valu };
        console.log("req", request);
        // console.log(request);
        axios
          .post(url, request, header)
          .then((res) => {
            console.log(res.data);
            if (res.data != "Error") {
              if (!isfinishd) {
                dispatch({ type: "setLineArray", payload: [] });
                navigate("/Checkout", {
                  state: { lid: lotteryid, subltryid: subltryid },
                });
              } else {
                setShow(!show);
                dispatch({ type: "setLineArray", payload: [] });
                dispatch({ type: "issubidexist", payload: false });
              }
            }
          })
          .catch();
        //   }
        // }
        // }
      }
    // }
  };

  const offerchkout = () => {
    let url = config.url + "insertunitnumber";
    let header = {};

    const valu = [];
    const temp = [...offerarray];
    for (const itrt of temp) {
      let temp = [];
      for (const t of itrt) {
        if (t.isselected) temp.push(t.value);
      }
      valu.push(temp);
    }
    let request = { uid: userid, lid: subltryid, arr: valu };

    console.log(request);
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        if (res.data != "Error") {
          navigate("/Checkout", {
            state: { lid: lotteryid, subltryid: subltryid },
          });
          dispatch({ type: "setLineArray", payload: [] });
          setShow(!show);

          dispatch({ type: "issubidexist", payload: false });
        }
      })
      .catch();
  };

  // const childdata = (e, selection, setShowchk) => {
  //   e.preventDefault();
  //   setValue(selection);

  //   if (selection.length < 5) {
  //     setErrmsg("Need to select 5 numbers before confirming!!");
  //   } else if (selection != "") {
  //     let url = config.url+"insertunit";
  //     let request = {
  //       firstnum: selection[0],
  //       secondnum: selection[1],
  //       thirdnum: selection[2],
  //       fournum: selection[3],
  //       fifthnum: selection[4],
  //       id: id,
  //     };

  //     setShowchk(true);
  //     setErrmsg("");
  //   }
  // };
  const callfn = (e) => {
    // var x = document.getElementById("abc").label;
    // console.log("x", x);
    // setLtryname(x);
    // setltryid(e.target.value);
    console.log("here");
    console.log(e.target.value);
    let obj = JSON.parse(e.target.value);
    console.log("objid", obj.id);
    console.log(obj.value);
    setltryid(obj.id);
    setLtryname(obj.value);

    let url = config.url + "subltryfetch";
    let req = { id: obj.id };
    console.log("req", req);
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res", res.data);
        setSubltry(res.data);
      })
      .catch();
  };
  const label5click = () => {
    navigate("/");
  };
  const label7click = () => {
    console.log(localStorage.getItem("role"));
    if (localStorage.getItem("role") == 1) {
      navigate("/AdminDashboard");
    } else if (localStorage.getItem("role") == 2) {
      navigate("/UserPage");
    } else if (localStorage.getItem("role") == "") {
      navigate("/");
    }
  };
  //============================================================================//
  const shuffle = (index) => {
    let temp = [...linearray];

    for (const iterator of temp[index]) {
      let randNum = randomNumberInRange(startno, endno);
      for (const two of iterator) {
        if (two.value === randNum) {
          two.isclicked = true;
        } else {
          two.isclicked = false;
        }
      }
    }
    dispatch({ type: "setLineArray", payload: temp });
  };
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handlerefresh = (index) => {
    const temp = [...linearray];
    for (const iterator of temp[index]) {
      for (const two of iterator) {
        if (two.isclicked === true) two.isclicked = false;
      }
    }

    dispatch({ type: "setLineArray", payload: temp });
  };
  const selectclick = (value) => {
    const temp = [...linearray];
    let index = value.index;
    let cindx = value.cindx;
    let indx = value.indx;
    for (const iterator of temp[index][indx]) {
      iterator.isclicked = false;
    }
    temp[index][indx][cindx].isclicked = true;

    dispatch({ type: "setLineArray", payload: temp });
  };
  return (
    <>
      <div className="ticketselector_outer">
        {/* <label style={{color:'white'}}>Here{linenumnew}
        {ar.map((itm, indx)=>{
          return <>{indx} <br /></>
        })}
        </label> */}

        <HeaderUser
          label1={usrname}
          label3={""}
          label5={"Home"}
          label7={"Dashboard"}
          headerclick={home}
          label5click={label5click}
          label7click={label7click}
        />
        {/* <Drawinformation/> */}

        {!show ? (
          <div className="ticketslector_lotterybuynow">
            <Lotterybuynow
              details={lotterydetails}
              deadline={maindate}
              // prize={prize}
              // ticketPurchase={ticketPurchase}
              lotteryid={lotteryid}
              variable1={"id"}
              variable2={"main_ltry"}
              variable3={"txtFirstprize"}
              variable4={"drawdate"}
              variable5={"sub_ltry"}
            />
          </div>
        ) : (
          <div className="ticketslector_lotterybuynow">
            <Lotterybuynow
              details={lotterydetails}
              deadline={subdate}
              // prize={prize}
              // ticketPurchase={ticketPurchase}
              lotteryid={lotteryid}
              variable1={"Sub_id"}
              variable2={"sub_ltry"}
              variable3={"txtFirstprize"}
              variable4={"sub_drawdate"}
              variable5={"sub_ltry"}
            />
          </div>
        )}
        {/* <div>
          {linearray.map((item,index)=>{
            return(
              <>
              <Lineselector lineindex={index} label1={"Unit" + index}/>
              </>
            )
          })}
          
        </div>  */}

        <div>
          {!show2 ? (
            <>
              {!show ? (
                <>
                  <div className="ticketselector_line">
                    {linearray.map((item, index) => {
                      return (
                        <>
                          <Lineselector
                            label1={"Unit" + index}
                            setValue={setValue}
                            lineindex={index}
                            ltryid={ltryid}
                            show={!show}
                            array={linearray}
                            text={"linearray"}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Linemessage />
                  <div className="ticketselector_chkoutbtn">
                    <Checkoutbutton
                      value2={"Checkout"}
                      chkout={() => chkout(lotteryid)}
                      linenum={linenum}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="ticketselector_line">
                    {offerarray.map((item, index) => {
                      return (
                        <>
                          <Offerselector
                            label1={"Unit" + index}
                            setValue={setValue}
                            lineindex={index}
                            ltryid={ltryid}
                            show={show}
                            array={linearray}
                            text={"linearray"}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Linemessage />
                  <div className="ticketselector_chkoutbtn">
                    <Checkoutbutton
                      value2={"Checkout"}
                      chkout={() => offerchkout(subltryid)}
                      linenum={linenum}
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {!show ? (
                <>
                  <div className="ticketselector_line">
                    {linearray.map((item, index) => {
                      return (
                        <>
                          <Numberselector
                            Label1={"unit" + index}
                            index={index}
                            shuffle={shuffle}
                            handlerefresh={handlerefresh}
                            selectclick={selectclick}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Linemessage />
                  <div className="ticketselector_chkoutbtn">
                    <Checkoutbutton
                      value2={"Checkout"}
                      chkout={() => chkout(lotteryid)}
                      linenum={linenum}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="ticketselector_line">
                    {offerarray.map((item, index) => {
                      return (
                        <>
                          <Offerselector
                            label1={"Unit" + index}
                            setValue={setValue}
                            lineindex={index}
                            ltryid={ltryid}
                            show={show}
                            array={linearray}
                            text={"linearray"}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Linemessage />
                  <div className="ticketselector_chkoutbtn">
                    <Checkoutbutton
                      value2={"Checkout"}
                      chkout={() => offerchkout(subltryid)}
                      linenum={linenum}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {/* {!show2 ? (
          <>
            {show ? (
              <>
                arc
                <div className="ticketselector_line">
                  {linearray.map((item, index) => {
                    return (
                      <>
                        <Lineselector
                          label1={"Unit" + index}
                          setValue={setValue}
                          lineindex={index}
                          ltryid={ltryid}
                          show={!show}
                          array={linearray}
                          text={"linearray"}
                        />
                      </>
                    );
                  })}
                </div>
                <Linemessage />
                <div className="ticketselector_chkoutbtn">
                  <Checkoutbutton
                    value2={"Checkout"}
                    chkout={() => chkout(lotteryid)}
                    linenum={linenum}
                  />
                </div>
                hana
              </>
            ) : (
              <>
                of
                <div className="ticketselector_line">
                  {offerarray.map((item, index) => {
                    return (
                      <>
                        <Offerselector
                          label1={"Unit" + index}
                          setValue={setValue}
                          lineindex={index}
                          ltryid={ltryid}
                          show={show}
                          array={linearray}
                          text={"linearray"}
                        />
                      </>
                    );
                  })}
                </div>
                <Linemessage />
                <div className="ticketselector_chkoutbtn">
                  <Checkoutbutton
                    value2={"Checkout"}
                    chkout={() => offerchkout(subltryid)}
                    linenum={linenum}
                  />
                </div>
                fer
              </>
            )}
          </>
        ) : (
          <>
            {!show ? (
              <>
                vis
                <div className="ticketselector_line">
                  {linearray.map((item, index) => {
                    <>
                      <Numberselector
                        Label1={"Unit" + index}
                        index={index}
                        shuffle={shuffle}
                        handlerefresh={handlerefresh}
                        selectclick={selectclick}
                      />
                      <Linemessage />
                <div className="ticketselector_chkoutbtn">
                  <Checkoutbutton
                    value2={"Checkout"}
                    chkout={() => offerchkout(subltryid)}
                    linenum={linenum}
                  />
                </div>
                    </>;
                  })}
                </div>
                akh
              </>
            ) : (
              <>
                of
                <div className="ticketselector_line">
                  {offerarray.map((item, index) => {
                    return (
                      <>
                        <Offerselector
                          label1={"Unit" + index}
                          setValue={setValue}
                          lineindex={index}
                          ltryid={ltryid}
                          show={show}
                          array={linearray}
                          text={"linearray"}
                        />
                      </>
                    );
                  })}
                </div>
                <Linemessage />
                <div className="ticketselector_chkoutbtn">
                  <Checkoutbutton
                    value2={"Checkout"}
                    chkout={() => offerchkout(subltryid)}
                    linenum={linenum}
                  />
                </div>
                fer
              </>
            )}
          </>
        )} */}

        {/* <div className="ticketselector_lotteryname">
          <label> Lottery Name : </label>

          <select
          
            onChange={(e) => callfn(e)}
          >
            <option>--Select--</option>
            {lotterylist.map((itm, index) => { 
              let t='{"id":"'+itm.id+'","value":"'+itm.main_ltry+'"}';
              
              return (
                <>
                
                  <option value={t}>
                    <label>
                    
                      {itm.main_ltry}
                      {""}
                      {itm.drawdate}
                      
                      
                    </label>
                  </option>
                 
               
                
                </>
              );
            })}
          </select>
         {subltry.map((item,index)=>{
          return<>
          <label>Sub Lottery  : {item.sub_ltry}</label>
          </>
         })}
        </div> */}
        {/*        
        {!show ? (
          <div>
            <div className="ticketselector_line">
             
              {linearray.map((item, index) => {
                return show2 ? (
                  <>
                    <Numberselector
                      Label1={"Unit" + index}
                      index={index}
                      shuffle={shuffle}
                      handlerefresh={handlerefresh}
                      selectclick={selectclick}
                    />
                  </>
                ) : (
                  <>
                    <Lineselector
                      label1={"Unit" + index}
                      setValue={setValue}
                      lineindex={index}
                      ltryid={ltryid}
                      show={!show}
                      array={linearray}
                      text={"linearray"}
                    />
                  </>
                );
              })}
            </div>
            <Linemessage />
            <div className="ticketselector_chkoutbtn">
              <Checkoutbutton
                value2={"Checkout"}
                chkout={() => chkout(lotteryid)}
                linenum={linenum}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="ticketselector_line">
              {offerarray.map((item, index) => {
                return (
                  <>
                    <Offerselector
                      label1={"Unit" + index}
                      setValue={setValue}
                      lineindex={index}
                      ltryid={ltryid}
                      show={show}
                      array={linearray}
                      text={"linearray"}
                    />
                  </>
                );
              })}
            </div>
            <Linemessage />
            <div className="ticketselector_chkoutbtn">
              <Checkoutbutton
                value2={"Checkout"}
                chkout={() => offerchkout(subltryid)}
                linenum={linenum}
              />
            </div>
          </div>
        )} */}

        <div className="Ticketslector_errmsg">{err}</div>

        {/* <Linemessage />
        <div className="ticketselector_chkoutbtn">
          <Checkoutbutton
            value2={"Checkout"}
            chkout={chkout}
            linenum={linenum}
          /> 
        </div> */}

        {/* <Footer/> */}
      </div>
               
    </>
  );
}
