import "../components/Provideradd.css";
import Collapsible from "react-collapsible";
import Input from "./Input";
import { MdArrowDropDownCircle } from "react-icons/md";

//install react-collapsible before using this component
//npm i react-collapsible

export default function Provideradd({
  handleAddprovider,
  setvalue1,
  setvalue2,
  setvalue3,
  setvalue4,
  setvalue5,
  setvalue6,
  statearray,
}) {
  return (
    <>
      <div className="provideradd_container">
        <Collapsible
          trigger={
            <div>
              <div className="provideradd_header">
                <span>
                  <MdArrowDropDownCircle />
                </span>
                <h4>Add new provider</h4>
              </div>
            </div>
          }
        >
          <div className="provideradd_grid">
            <div className="provideradd_input">
              <Input
                name="Provider Name"
                onChange={(e) => {
                  setvalue1(e.target.value);
                }}
              />
            </div>
            <div className="provideradd_input">
              <Input
                name="Email"
                onChange={(e) => {
                  setvalue2(e.target.value);
                }}
              />
            </div>
            <div className="provideradd_input">
              <Input
                name="Mobile Number"
                itype="tel"
                onChange={(e) => {
                  setvalue3(e.target.value);
                }}
              />
            </div>
            
            <div className="provideradd_input">
              <Input
                name="Address"
                onChange={(e) => {
                  setvalue4(e.target.value);
                }}
              />
            </div>
            <div className="provideradd_input">
              <Input
                name="Zip code"
                onChange={(e) => {
                  setvalue5(e.target.value);
                }}
              />
            </div>
            <div className="provideradd_input">
              {/* <Input
              name="State"
              onChange={(e) => {
                setvalue6(e.target.value);
              }}
            /> */}
              <select
                onChange={(e) => {
                  setvalue6(e.target.value);
                }}
              >
                <option disabled selected hidden>
                  Select state
                </option>
                {statearray.map((itm, indx) => {
                  return <option value={itm.id}>{itm.txtStatename}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="provideradd_button">
            <div id="errmsg"></div><br/>
            
            <button
              onClick={(e) => {
                handleAddprovider(e);
              }}
            >
              Add
            </button>
          </div>
        </Collapsible>
      </div>
    </>
  );
}
