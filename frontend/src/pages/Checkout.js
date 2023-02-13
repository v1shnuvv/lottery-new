import Header from "../components/HeaderUser";
import "./Checkout.css";
import Footer from "../components/Footer";
import CartHeader from "../components/Cartheader";
import Cartitems from "../components/Cartitems";
import Checkoutclick from "../components/Checkoutcomponent";
import config from "../config.json";
import CheckoutTotal from "../components/Checkouttotal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
export default function Checkout({ linenum }) {
  const linearray = useSelector((state) => state.linearray);
  const navigate = useNavigate();
  const [reload, setReload] = useState(true);
  const usrname = localStorage.getItem("usrname");
  console.log("usrname", usrname);
  const location = useLocation();
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  const userid = localStorage.getItem("userid");
  const [unitcount, setUnitcount] = useState("")
  useEffect(() => {
    console.log(location.state.subltryid);
    let url = config.url + "purchasedloryfetch";
    let request = { userid: userid };
    let header = {};

    let urlunitcount = config.url + "header_countunit";
    let requestunitcount = {id: userid};
    let headerunitcount = {};
    axios
      .post(urlunitcount, requestunitcount, headerunitcount)
      .then((res) => {
        setUnitcount(res.data[0].count);
        console.log("unitcount",res.data[0].count);
      })
      .catch();

    axios
      .post(url, request, header)
      .then((res) => {
        console.log("Array chkout", res.data);
        setArray(res.data);
      })
      .catch();
  }, [reload]);
  const chkout = () => {
    let url = config.url + "insertunit";
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
    let request = { uid: userid, lid: 3, arr: valu };
    console.log(request);
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        if (res.data != "Error") {
          dispatch({ type: "setLineArray", payload: [] });
        }
      })
      .catch();
  };

  const handleDeleteClick = (id) => {
    // const tempsel = [...linearray];
    // console.log("tempsel",tempsel)
    // for (const eleent of tempsel[indx]) {

    //   eleent.isselected = false;
    // }
    //  dispatch({ type: "setLineArray", payload: tempsel });
    //alert(id)
    let url = config.url + "unitdelete";
    let request = { id: id };
    let header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        setReload(!reload);
        // Setarray(res.data);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //  console.log(valu)

  //  console.log(request)
  //  axios.post(url,request,header).then((res)=>{
  //   console.log(res.data)
  //  }).catch()

  return (
    <>
      <div className="Checkout_Main">
        <div className="Checkout_header">
          <Header 
          label2={unitcount}/>
        </div>

        <div className="Checkout_cartheader">
          <CartHeader />
        </div>
        <div className="Checkout_cartitems">
          <Cartitems
            label1={location.state.lname}
            array={array}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
        {/* <div className="Checkout_total">
          <CheckoutTotal />
        </div> */}
        <div className="Checkout_click" onClick={chkout}>
          <Checkoutclick chkout={chkout} />
        </div>

        <Footer />
      </div>
    </>
  );
}
