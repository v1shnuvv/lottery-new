import "../components/ProviderInfo.css"
import Provideradd from "./Provideradd";
import Provideredit from "./Provideredit";
import axios from "axios";
import Collapsible from "react-collapsible";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import config from "../config.json"
export default function Providerinfo() {
//provideredit----->
const [providereditid, setProvidereditid] = useState("");
const [providereditname, setProvidereditname] = useState("");
const [providereditemail, setProvidereditemail] = useState("");
const [providereditnumber, setProvidereditnumber] = useState("");
const [providereditaddress, setProvidereditaddress] = useState("");
const [providereditzip, setProvidereditzip] = useState("");
const [providereditstate, setProvidereditstate] = useState("");
const [providerarray, setProviderarray] = useState([]);
//-----<

//provideradd----->
const [providername, setProvidername] = useState("");
const [provideremail, setProvideremail] = useState("");
const [providermobile, setProvidermobile] = useState("");
const [provideraddress, setProvideraddress] = useState("");
const [providerzip, setProviderzip] = useState("");
const [providerstate, setProviderstate] = useState("");
const [state, setState] = useState([])

//-----<

//provideredit----->
function handleclickPdelete() {
  let url_provideredit4 = config.url+"deleteprovider";
  let req_provideredit4 = { providereditid: providereditid };
  let header_provideredit4 = {};
  axios
    .post(url_provideredit4, req_provideredit4, header_provideredit4)
    .then((res) => {})
    .catch();
  window.location.reload();
}
const handleclickSubmit = (e) => {
  let url_provideredit3 = config.url+"editprovider";
  let req_provideredit3 = {
    providereditid: providereditid,
    providereditname: providereditname,
    providereditemail: providereditemail,
    providereditnumber: providereditnumber,
    providereditaddress: providereditaddress,
    providereditzip: providereditzip,
    providereditcity: providereditstate,
  };
  let header_provideredit3 = {};
  axios
    .post(url_provideredit3, req_provideredit3, header_provideredit3)
    .then((res) => {
      console.log(res.data);
    })
    .catch();
    window.location.reload();
};
//-----<
//provideradd----->
const handleAddprovider=()=>{
  let url_provideradd = config.url+"addprovider";
  let req_provideradd = {
    providername:providername,
    provideremail:provideremail,
    providermobile:providermobile,
    provideraddress:provideraddress,
    providerzipcode:providerzip,
    providercity:providerstate
  }
  let header_provideradd = {}
  if(provideremail=="" || providermobile=="" || provideraddress=="" || providerzip=="" ){document.getElementById("errmsg").innerHTML="Enter all fields"}else{
    axios.post(url_provideradd, req_provideradd, header_provideradd).then((res)=>{
      console.log(res.data)
      if(res.data.affectedRows==1){
        alert("Provider added")
        window.location.reload();
          }
  
    }).catch(); 
  }
  
}
//-----<



useEffect(()=>{
//provideredit----->
let url_provideredit2 = config.url+"viewprovider";
let req_provideredit2 = {};
let header_provideredit2 = {};
//-----<
let url_provideradd1 = config.url+"fetchstate";
let req_provideradd1 = {};
let header_provideradd1 = {};

//provideredit----->
axios
  .post(url_provideredit2, req_provideredit2, header_provideredit2)
  .then((res) => {
 
    var temp = [...res.data];
    for (const element of temp) {
      element.isClicked = false;
    }
    setProviderarray(temp);
    console.log("nw", temp);
  })
  .catch();
//-----<
axios
  .post(url_provideradd1, req_provideradd1, header_provideradd1)
  .then((res) => {
    setState(res.data)
    console.log("state",res.data);
  })
  .catch();


},[])
  return (
    <>
      <div className="providerinfo_container">
        {/* <Collapsible
          trigger={
            <div className="providerinfo_header">
              <span>
                <MdArrowDropDownCircle />
              </span>
              <h4>Provider info</h4>
            </div>
          }
        > */}

          <Provideredit 
          handleclickPdelete={handleclickPdelete}
          handleclickSubmit={handleclickSubmit}
          setvalue1={setProvidereditid}
          setvalue2={setProvidereditname}
          setvalue3={setProvidereditemail}
          setvalue4={setProvidereditnumber}
          setvalue5={setProvidereditaddress}
          setvalue6={setProvidereditzip}
          setvalue7={setProvidereditstate}
          setarray1={setProviderarray}
          // value1={}
          value2={providereditname}
          value3={providereditemail}
          value4={providereditnumber}
          value5={providereditaddress}
          value6={providereditzip}
          value7={providereditstate}
          array1={providerarray}
          arrayvalue1={"id"}
          arrayvalue2={"txtProvidername"}
          arrayvalue3={"txtEmail"}
          arrayvalue4={"txtContactnumber"}
          arrayvalue5={"txtRegisteredaddress"}
          arrayvalue6={"txtZipcode"}
          arrayvalue7={"refState"}
          

          />
          <Provideradd 
          handleAddprovider={handleAddprovider}
          setvalue1={setProvidername}
          setvalue2={setProvideremail}
          setvalue3={setProvidermobile}
          setvalue4={setProvideraddress}
          setvalue5={setProviderzip}
          setvalue6={setProviderstate}
          statearray={state}
          
          />
          
        {/* </Collapsible> */}
       
      </div>
    </>
  );
}
