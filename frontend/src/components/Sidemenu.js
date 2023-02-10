import "./Sidemenu.css";
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs"
import { TfiBriefcase } from "react-icons/tfi"
import { FiFilter, FiArrowUp, FiArrowDown } from "react-icons/fi"
import { GiPodiumWinner } from "react-icons/gi"
export default function Sidemenu({shwFilter, shwAddresult, shwAddlottery, shwAddprovider, shwPurchasesummary, shwResult, shwResultupdate}){
    const [show, setDownarrow] = useState(false)
    return (
                <div className="sidemenu_menu">
                    <div className=" sidemenu_list" onClick={e=>{shwFilter()}}>
                        <span><FiFilter color="white"/></span><label>Filter</label>
                    </div>
                    <div className="sidemenu_list">
                    <span><TfiBriefcase color="white"/></span><label onClick={() => setDownarrow(!show)}> Lottery Manager</label>
                        <button >{show ? <FiArrowUp color="white" size="20px" /> : <FiArrowDown color="white" size="20px" />}</button>
                    </div>
                    {show &&
                        <div className="sidemenu_submenu">
                            <div className="sidemenu_sublist" onClick={e=>{shwAddresult()}}>
                                <label>Add Result</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwAddlottery()}}>
                                <label>Add Lottery</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwAddprovider()}}>
                                <label>Add Provider</label>
                            </div>
                            <div className="sidemenu_sublist" onClick={e=>{shwResultupdate()}}>
                                <label>Update result</label>
                            </div>
                        </div>
                    }
                    <div className="sidemenu_list" onClick={e=>{shwPurchasesummary()}}>
                    <span><BsGraphUp color="white"/></span><label> Purchase Summary</label>
                    </div>
                    <div className="sidemenu_list" onClick={e=>{shwResult()}}>
                    <span><GiPodiumWinner color="white"/></span><label> Result</label>
                    </div>
                </div>
    )
}