import "../components/AdminUserList.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, } from "react-icons/io"
export default function AdminUserlist({ data,handlechange, sortnamea, sortnamed, sortproa, sortprod, sortdatea, sortdated,lonamedown2, lonameup2, showloname, providerup2, providerdown2, showproname, dateup2, datedown2, showdate}) {
  
  return (
    <>
      <table>
        <tbody>
          <tr className="adminuserlist_header">
          <th></th>
            {/* <th>ID</th>
            <th>Username</th> */}
            <th className="adminuserlist_header_column" onClick={e => {showloname()}}>Lottery Name
              <button id= "lonameup" onClick={e => { sortnamea(e)  }} style={{display: lonameup2}} ><IoIosArrowUp /></button>
              <button id= "lonamedown" onClick={e => { sortnamed(e) }} style={{display: lonamedown2}}><IoIosArrowDown /></button>
              
            </th>
            <th className="adminuserlist_header_column" onClick={e => {showproname()}}>Provider Name
              <button id= "providerup" onClick={e => { sortproa(e) }} style={{display: providerup2}}><IoIosArrowUp /></button>
              <button id= "providerdown" onClick={e => { sortprod(e) }} style={{display: providerdown2}}><IoIosArrowDown /></button>
            </th>
            <th className="adminuserlist_header_column" onClick={e => {showdate()}}>Lottery Draw Date
              <button id= "dateup" onClick={e => { sortdatea() }} style={{display: dateup2}}><IoIosArrowUp /></button>
              <button id= "datedown" onClick={e => { sortdated() }} style={{display: datedown2}}><IoIosArrowDown /></button>
            </th>
            <th>Lottery Result</th>
          </tr>
          {data.map((item, index) => {
            return (
              <>
                <tr key={item.no}>
                  <td>
                    <input
                      type={"checkbox"}
                      value={index}
                      onChange={(e) => {
                        handlechange(e.target.value);
                      }}
                      checked={item.ischecked}
                    />
                  </td>
                  {/* <td>{item.id}</td> */}
                  <td>{item.txtLotteryname}</td>
                  <td>{item.txtProvidername}</td>
                  <td>{item.dtLotterydrawdate}</td>
                  <td>{item.txtLotteryresult}<span></span></td>
                  {/* <td>{(JSON.parse(item.txtLotteryresult)).map((itm, idx)=>{
                    return(<>
                    {itm}
                    </>)
                  })}</td> */}
                  {/* <td>{JSON.parse(item.txtLotteryresult)}</td> */}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
