import "../components/Provideredit.css";
import { AiFillEdit, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
import Input from "./Input";
import {MdArrowDropDownCircle} from "react-icons/md"
import Collapsible2 from "react-collapsible";

//install collapsible-react-component before using this component
//npm i collapsible-react-component

export default function Provideredit({handleclickPdelete, handleclickSubmit,
  setvalue1,setvalue2,setvalue3,setvalue4,setvalue5,setvalue6,setvalue7,setarray1,
  value2,value3,value4,value5,value6,value7,array1,
  arrayvalue1,arrayvalue2,arrayvalue3,arrayvalue4,arrayvalue5,arrayvalue6,arrayvalue7
}) {


  function expandCol(itm, indx) {
    let temp = [...array1];
    for (const itm of temp) {
      itm.isClicked = false;
    }
    temp[indx].isClicked = true;
    setvalue2(temp[indx][arrayvalue2]);
    setvalue3(temp[indx][arrayvalue3]);
    setvalue4(temp[indx][arrayvalue4]);
    setvalue5(temp[indx][arrayvalue5]);
    setvalue6(temp[indx][arrayvalue6]);
    setvalue7(temp[indx][arrayvalue7]);
    setvalue1(temp[indx][arrayvalue1]);
    setarray1(temp);
  }

  function close(itm, indx) {
    let temp = [...array1];
    for (const itm of temp) {
      itm.isClicked = false;
    }

    setarray1(temp);
  }

  return (
    <>
    
      <div className="provideredit_container">
      <Collapsible2 trigger={<div className="provideredit_subheader"><span><MdArrowDropDownCircle/></span><h4>Provider list</h4></div> }>
        {array1.map((itm, indx) => {
          return (
            <>
              <div className="provideredit_list">
                <label>{itm[arrayvalue2]}</label>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      expandCol(itm[arrayvalue1], indx);
                    }}
                  >
                    <AiFillEdit />
                  </button>
                </div>
              </div>

              <div className="provideredit_collapsible_content">
                <Collapsible open={itm.isClicked}>
                  <div className="provideredit_header">
                    <h2>Edit {itm[arrayvalue2]} </h2>
                    <div>
                      <button onClick={() => close(itm, indx)}>
                        <AiFillCloseCircle />
                      </button>{" "}
                      <button onClick={() => handleclickPdelete()}>
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                  <div className="provideredit_innerdiv">
                    {/* <div className="provideredit_innerinnerdiv"> */}
                      <div className="provideredit_input">
                        <Input
                          name="Provider Name"
                          value={value2}
                          onChange={(e) => {
                            setvalue2(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provideredit_input">
                        <Input
                          name="Email"
                          value={value3}
                          onChange={(e) => {
                            setvalue3(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provideredit_input">
                        <Input
                          name="Mobile number"
                          value={value4}
                          onChange={(e) => {
                            setvalue4(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provideredit_input">
                        <Input
                          name="Address"
                          value={value5}
                          onChange={(e) => {
                            setvalue5(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provideredit_input">
                        <Input
                          name="Zip code"
                          value={value6}
                          onChange={(e) => {
                            setvalue6(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provideredit_input">
                        <Input
                          name="City"
                          value={value7}
                          onChange={(e) => {
                            setvalue7(e.target.value);
                          }}
                        />
                      </div>
                      
                    
                  </div>

                  <div className="provideredit_button">
                    <button
                      onClick={(e) => {
                        handleclickSubmit(e);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </Collapsible>
              </div>
            </>
          );
        })}
        </Collapsible2>
      </div>
      
    </>
  );
}
