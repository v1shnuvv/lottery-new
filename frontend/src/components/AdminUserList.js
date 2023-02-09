import "../components/AdminUserList.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
export default function AdminUserlist({
  data,
  handlechange,
  sortnamea,
  sortnamed,
  sortproa,
  sortprod,
  sortdatea,
  sortdated,
  lonamedown2,
  lonameup2,
  showloname,
  providerup2,
  providerdown2,
  showproname,
  dateup2,
  datedown2,
  showdate,
}) {
  return (
    <>
      <div className="adminuserlist_container">
        
          <div className="adminuserlist_header">
            <div className="adminuserlist_header_column_cb"></div>
            
            <div className="adminuserlist_header_column">
              <label>Lottery Name</label>
              <button
                id="lonameup"
                onClick={(e) => {
                  sortnamea(e);
                }}
                style={{ display: lonameup2 }}
              >
                <IoIosArrowUp />
              </button>
              <button
                id="lonamedown"
                onClick={(e) => {
                  sortnamed(e);
                }}
                style={{ display: lonamedown2 }}
              >
                <IoIosArrowDown />
              </button>
            </div>
            <div className="adminuserlist_header_column">
              <label>Provider Name</label>
              <button
                id="providerup"
                onClick={(e) => {
                  sortproa(e);
                }}
                style={{ display: providerup2 }}
              >
                <IoIosArrowUp />
              </button>
              <button
                id="providerdown"
                onClick={(e) => {
                  sortprod(e);
                }}
                style={{ display: providerdown2 }}
              >
                <IoIosArrowDown />
              </button>
            </div>
            <div className="adminuserlist_header_column">
              <label>Lottery Draw Date</label>
              <button
                id="dateup"
                onClick={(e) => {
                  sortdatea();
                }}
                style={{ display: dateup2 }}
              >
                <IoIosArrowUp />
              </button>
              <button
                id="datedown"
                onClick={(e) => {
                  sortdated();
                }}
                style={{ display: datedown2 }}
              >
                <IoIosArrowDown />
              </button>
            </div>
            <div className="adminuserlist_header_column">
            <label>Lottery Result</label>
            </div>
            
          </div>
        <div className="adminuserlist_body">
          {data.map((item, index) => {
            return (
              
                <div key={item.no} className="adminuserlist_body_row">
                  <div className="adminuserlist_body_column_cb">
                    <input
                      type={"checkbox"}
                      value={index}
                      onChange={(e) => {
                        handlechange(e.target.value);
                      }}
                      checked={item.ischecked}
                    />
                  </div>
                  {/* <td>{item.id}</td> */}
                  <div className="adminuserlist_body_column">{item.txtLotteryname}</div>
                  <div className="adminuserlist_body_column">{item.txtProvidername}</div>
                  <div className="adminuserlist_body_column">{item.dtLotterydrawdate}</div>
                  <div className="adminuserlist_body_column">
                    {item.txtLotteryresult}
                    <span></span>
                  </div>
                  {/* <td>{(JSON.parse(item.txtLotteryresult)).map((itm, idx)=>{
                    return(<>
                    {itm}
                    </>)
                  })}</td> */}
                  {/* <td>{JSON.parse(item.txtLotteryresult)}</td> */}
                </div>
             
            );
          })}
         
         </div>
        
      </div>
    </>
  );
}