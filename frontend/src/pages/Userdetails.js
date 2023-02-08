import "./Userdetails.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import Footer from "../components/Footer";
import UserCollapsibleprovider from "../components/Usercollapsible";
import UserCollapsiblelotteryname from "../components/Usercollapsible";
import config from "../config.json"
export default function Userdetails() {
  const [fetchunitdetails, setFetchunitdetails] = useState([]);
  const [fetchwinningstodate, setFetchwinningstodate] = useState([]);
  const [fetchuserwinningvalidation, setFetchuserwinningvalidation] = useState(
    []
  );
  const [providerlotterynamewinnings, setProviderlotterynamewinnings] =
    useState([]);
  const [newproviderlotterynamewinnings, setNewproviderlotterynamewinnings] =
    useState([]);
  const [newfetchunitdetails, setNewfetchunitdetails] = useState([]);
  const usrname = localStorage.getItem("usrname");

  useEffect(() => {
    let url_usercollapsiblelottery = config.url+"userunitfetch";
    let request_usercollapsiblelottery = {};
    let header_usercollapsiblelottery = {};

    let url_usercollapsibleprovider1 =
      config.url+"providerlotterynamewinnings";
    let request_usercollapsibleprovider1 = {};
    let header_usercollapsibleprovider1 = {};

    let url_usercollapsibleprovider =
      config.url+"userwinningtodatefetch";
    let request_usercollapsibleprovider = {};
    let header_usercollapsibleprovider = {};

    let url_usercollapsiblelottery1 =
      config.url+"userwinningvalidationfetch";
    let request_usercollapsiblelottery1 = {};
    let header_usercollapsiblelottery1 = {};

    axios
      .post(
        url_usercollapsiblelottery,
        request_usercollapsiblelottery,
        header_usercollapsiblelottery
      )
      .then((res) => {
        var temp = [...res.data];
        for (const element of temp) {
          element.isClicked = false;
        }
        setFetchunitdetails(temp);
        console.log("nw", temp);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        url_usercollapsibleprovider,
        request_usercollapsibleprovider,
        header_usercollapsibleprovider
      )
      .then((res) => {
        var temp = [...res.data];
        for (const element of temp) {
          element.isClicked = false;
        }
        setFetchwinningstodate(temp);
        console.log("nw", temp);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        url_usercollapsiblelottery1,
        request_usercollapsiblelottery1,
        header_usercollapsiblelottery1
      )
      .then((res) => {
        console.log("fe", res.data);
        setFetchuserwinningvalidation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        url_usercollapsibleprovider1,
        request_usercollapsibleprovider1,
        header_usercollapsibleprovider1
      )
      .then((res) => {
        console.log(res.data);
        setProviderlotterynamewinnings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AdminLotteryManager");
  };

  // function opn(lname, item, index) {
  //     let temp = [...fetchunitdetails];
  //     for (const item of temp) {
  //         item.isClicked = false;
  //     }
  //     temp[index].isClicked = true;
  //     const newn = fetchuserwinningvalidation.filter((obj) => obj.txtLotteryname === lname);
  //     setNewfetchunitdetails(newn);
  //     setFetchunitdetails(temp);
  //     console.log(newfetchunitdetails);
  //     console.log(lname);

  // }

  // console.log(newfetchunitdetails);
  // function colu() {
  //     let temp = [...fetchunitdetails];
  //     for (const itm of temp) {
  //         itm.isClicked = false;
  //     }
  //     setFetchunitdetails(temp);
  // }

  // function open(pname, item, index) {
  //     let temp = [...fetchwinningstodate];
  //     for (const item of temp) {
  //         item.isClicked = false;
  //     }
  //     temp[index].isClicked = true;
  //     const newp = providerlotterynamewinnings.filter((obj) => obj.txtProvidername === pname);
  //     setNewproviderlotterynamewinnings(newp);
  //     setFetchwinningstodate(temp);
  //     console.log(newfetchunitdetails);
  //     console.log(pname);
  //     console.log(item.isClicked)
  // }

  // function colp() {
  //     let temp = [...fetchwinningstodate];
  //     for (const itm of temp) {
  //         itm.isClicked = false;
  //     }
  //     setFetchwinningstodate(temp);
  // }

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
    navigate("/TicketSelector", { state: { id: "", name: "" } });
  };
  const label4click = () => {
    navigate("/");
  };

  return (
    <div className="Userdetails_container">
      {/* <div className="Userdetails_headerUser">
        <HeaderUser
          label1={usrname}
          label2={0}
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
      </div> */}

      <UserCollapsiblelotteryname
        filteringarray={fetchuserwinningvalidation}
        opfunset1={setNewfetchunitdetails}
        opfunset2={setFetchunitdetails}
        label1={"Lottery Name"}
        label2={"Draw Date"}
        label3={"Prize won"}
        array1={fetchunitdetails}
        filterby={"txtLotteryname"}
        variable1={"txtLotteryName"}
        variable2={"DrawDate"}
        variable3={"TotalPrize"}
        label4={"Entry Date"}
        label5={"Number of Matching numbers"}
        label6={"Unit Prize"}
        array2={newfetchunitdetails}
        variable4={"EntryDate"}
        variable5={"txtMatchingcount"}
        variable6={"txtPrizemoney"}
      />

      {/* <div className="Userdetails_unitdetails">

                <div className="Userdetails_unitdetails_outer">
                    <div className="Userdetails_unitdetails_outer_header">
                        <p>{"Lotteryname"}</p>
                        <p>{"Draw Date"}</p>
                        <p>{"Prize won"}</p>
                    </div>
                    {fetchunitdetails.map((item, index) => {
                        return (
                            <>
                                <div className="Userdetails_unitdetails_outer_row" onClick={() => {
                                    fetchunitdetails[index].isClicked
                                        ? colu()
                                        : opn(item.txtLotteryName, item, index);

                                }}>
                                    <p><button
                                    ><IoIosArrowDropdown /></button>{item.txtLotteryName}</p>
                                    <p>{item.DrawDate}</p>
                                    <p>{item.TotalPrize}</p>
                                    
                                </div>
                                <div><Collapsible open={item.isClicked}>

                                    <div className="Userdetails_unitdetails_outer_row_dropdown_header">
                                        <p className="Userdetails_unitdetails_outer_row_dropdown_entrydatep">{"Entry Date"}</p>
                                        <p className="Userdetails_unitdetails_outer_row_dropdown_numbersp">{"Number of Matching numbers"}</p>
                                        <p className="Userdetails_unitdetails_outer_row_dropdown_prizep">{"Unit Prize"}</p>

                                    </div>

                                    {newfetchunitdetails.map((item, index) => {
                                        return (
                                            <>
                                                <div className="Userdetails_unitdetails_outer_row_dropdown_content">
                                                    <p className="Userdetails_unitdetails_outer_row_dropdown_entrydate">{item.EntryDate}</p>
                                                    <p className="Userdetails_unitdetails_outer_row_dropdown_numbers">{item.txtMatchingcount}</p>
                                                    <p className="Userdetails_unitdetails_outer_row_dropdown_prize">{item.txtPrizemoney}</p>
                                                </div>

                                            </>
                                        );
                                    })};

                                </Collapsible>
                                </div>
                            </>
                        );
                    })}
                    <button
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Proceed to Lottery Manager
                    </button>
                </div>


            </div> */}

      <UserCollapsibleprovider
        filteringarray={providerlotterynamewinnings}
        opfunset1={setNewproviderlotterynamewinnings}
        opfunset2={setFetchwinningstodate}
        label1={"Lottery provider"}
        label2={"Total prizes won until now"}
        array1={fetchwinningstodate}
        filterby={"txtProviderName"}
        variable1={"txtProvidername"}
        variable2={"ProviderTotal"}
        label4={"Lottery Name"}
        label5={"Entry Date"}
        label6={"Unit Prize"}
        array2={newproviderlotterynamewinnings}
        variable4={"txtLotteryName"}
        variable5={"EntryDate"}
        variable6={"TotalPrize"}
      />

      {/* <div className="Userdetails_providerandprizedetails_outer">
                <div className="Userdetails_providerandprizedetails_outer_header">
                    <p>{"Lottery provider"}</p>
                    <p>{"Total prizes won until now"}</p>
                </div>
                {fetchwinningstodate.map((item, index) => {
                    return (
                        <>
                            <div className="Userdetails_providerandprizedetails_outer_row" onClick={() => {
                                fetchwinningstodate[index].isClicked
                                    ? colp()
                                    : open(item.txtProvidername, item, index);

                            }}>

                                <p><button
                                ><IoIosArrowDropdown /></button>{item.txtProvidername}</p>
                                <p>{item.ProviderTotal}</p>
                            </div>
                            <div><Collapsible open={item.isClicked}>
                            <div className="Userdetails_providerandprizedetails_outer_row_dropdown_header">
                                    <p className="Userdetails_providerandprizedetails_outer_row_dropdown_entrydatep">{"Lottery Name"}</p>
                                    <p className="Userdetails_providerandprizedetails_outer_row_dropdown_numbersp">{"Entry Date"}</p>
                                    <p className="Userdetails_providerandprizedetails_outer_row_dropdown_prizep">{"Unit Prize"}</p>

                                </div>

                                {newproviderlotterynamewinnings.map((item, index) => {
                                    return (
                                        <>
                                            <div className="Userdetails_providerandprizedetails_outer_row_dropdown_content">
                                                <p className="Userdetails_providerandprizedetails_outer_row_dropdown_lotteryname">{item.txtLotteryName}</p>
                                                <p className="Userdetails_providerandprizedetails_outer_row_dropdown_entrydate">{item.EntryDate}</p>
                                                <p className="Userdetails_providerandprizedetails_outer_row_dropdown_prize">{item.TotalPrize}</p>
                                            </div>

                                        </>
                                    );
                                })};

                            </Collapsible>
                            </div>


                            

                        </>
                    );
                })}
                <button
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Proceed to Lottery Manager
                </button>
            </div> */}

      {/* <div className="Userdetails_footer">
        <Footer />
      </div> */}
    </div>
  );
}
