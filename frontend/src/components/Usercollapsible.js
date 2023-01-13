import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
import "./Usercollapsible.css"
import { useState } from "react";
export default function List({ filteringarray, newopfunarray, opfunset1, opfunset2,  label1, label2, label3, label4, label5, label6, array1, array2, filterby, variable1,variable2,variable3, variable4, variable5, variable6, opn, colu}) {
    const navigate = useNavigate(); 
    const handleClick = () => {
      navigate("/AdminLotteryManager");
    };

    
    function opn(lname, item, index) {
        let temp = [...array1];
        for (const item of temp) {
            item.isClicked = false;
        }
        temp[index].isClicked = true;
        const newn = filteringarray.filter((obj) => obj.filterby === lname);
        opfunset1(newn);
        opfunset2(temp);
        console.log(newopfunarray);
        console.log("ln",lname);
        console.log("nn",newn)
        console.log("fa", filteringarray)
        console.log("fil",filterby)

    }

    function colu() {
        let temp = [...array1];
        for (const itm of temp) {
            itm.isClicked = false;
        }
        opfunset2(temp);
    }

    return(

        <div className="Userdetails_unitdetails">

            <div className="Userdetails_unitdetails_outer">
                <div className="Userdetails_unitdetails_outer_header">
                    <p>{label1}</p>
                    <p>{label2}</p>
                    <p>{label3}</p>
                </div>
                {array1.map((item, index) => {
                    return (
                        <>
                            <div className="Userdetails_unitdetails_outer_row" onClick={() => {
                                array1[index].isClicked
                                    ? colu()
                                    : opn(item[filterby], item, index);

                            }}>
                                <p><button
                                ><IoIosArrowDropdown /></button>{item[variable1]}</p>
                                <p>{item[variable2]}</p>
                                <p>{item[variable3]}</p>
                                {/* <td><span>{item[value4]}</span></td> */}
                            </div>
                            <div><Collapsible open={item.isClicked}>

                                <div className="Userdetails_unitdetails_outer_row_dropdown_header">
                                    <p className="Userdetails_unitdetails_outer_row_dropdown_entrydatep">{label4}</p>
                                    <p className="Userdetails_unitdetails_outer_row_dropdown_numbersp">{label5}</p>
                                    <p className="Userdetails_unitdetails_outer_row_dropdown_prizep">{label6}</p>

                                </div>

                                {array2.map((item, index) => {
                                    return (
                                        <>
                                            <div className="Userdetails_unitdetails_outer_row_dropdown_content">
                                                <p className="Userdetails_unitdetails_outer_row_dropdown_entrydate">{item[variable4]}</p>
                                                <p className="Userdetails_unitdetails_outer_row_dropdown_numbers">{item[variable5]}</p>
                                                <p className="Userdetails_unitdetails_outer_row_dropdown_prize">{item[variable6]}</p>
                                            </div>

                                        </>
                                    );
                                })};

                            </Collapsible>
                            </div>
                        </>
                    );
                })}
                
            </div>

        </div>

    );

}
