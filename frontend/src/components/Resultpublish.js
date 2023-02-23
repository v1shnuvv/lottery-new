import "./Resultpublish.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";
export default function ResultUpdate() {
  const [resulttoupdate, setResulttoupdate] = useState([]);
  const [unitlisttocompare, setUnitlisttocompare] = useState([])
  const [ componentrefresh, setComponentrefresh]  = useState(false)
  const finalarr=[]
  useEffect(() => {
    let url = config.url + "resulttopublishlist";
    let request = {};
    let header = {};
    axios
      .post(url, request, header)
      .then((res) => {
       
        setResulttoupdate(res.data);
      })
      .catch();
  }, [componentrefresh]);
  const handleclickGetlist = (lotteryid) => {
    
    // alert(lotteryid)
    let url1 = config.url + "unittocompare";
    let request1 = { lotteryid: lotteryid };
    let header1 = {};

    let url2 = config.url + "updatewinningunit";
    let request2 = { finalarr: finalarr};
    let header2 = {};

    
    axios
      .post(url1, request1, header1)
      .then((res) => {
        setUnitlisttocompare(res.data)
        console.log("u",res.data);
      })
      .catch();

      const temp = []
    for (const obj of unitlisttocompare) {
        const matchingnum=[]
        for (const elemofresult of JSON.parse(obj.lotteryresult)) {
            
            for (const elemofselected of JSON.parse(obj.selectednumber)) {
                if(elemofresult==elemofselected){
                    matchingnum.push(elemofselected)
                }
            }
        }
        if(matchingnum!=""){
            temp.push({ unitid: obj.unitid, lid: obj.lotid, matchno: matchingnum, first: obj.firstp,
            second: obj.secondp, third: obj.thirdp, fourth: obj.fourthp, fifth: obj.fifthp, sixth: obj.sixthp, resultlen: JSON.parse(obj.lotteryresult).length  })
        }
        
    }
    console.log("matching number",temp);
    for (const itr of temp) {
        let a = itr.resultlen
        let b = itr.matchno.length
        if((a-b +1)==1){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.first, lotid: itr.lid, matchnum: itr.matchno})
        }else if((a-b +1)==2){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.second, lotid: itr.lid, matchnum: itr.matchno})
        }else if((a-b +1)==3){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.third, lotid: itr.lid, matchnum: itr.matchno})
        }else if((a-b +1)==4){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.fourth, lotid: itr.lid, matchnum: itr.matchno})
        }else if((a-b +1)==5){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.fifth, lotid: itr.lid, matchnum: itr.matchno})
        }else if((a-b +1)==6){
            finalarr.push({unitid: itr.unitid, matchno: b, prize: itr.sixth, lotid: itr.lid, matchnum: itr.matchno})
        }
    }
    console.log("1",finalarr);
    axios
      .post(url2, request2, header2)
      .then((res) => {
        if(res.data!="Error"){
            alert("Result published")
            // window.location.reload()
        }
        console.log("success",res.data)
        
      })
      .catch();

    console.log("2",finalarr);
  };

  return (
    <>
      {/* <div className="Resupdate_outer"> */}
      {/* <div className="resupdate_container"> */}
      <div className="respublish_conttable">
        <div className="respublish_row_header">
          <div className="respublish_hcol">
            <label>Provider Name</label>
          </div>
          <div className="respublish_hcol">
            <label>Lottery Name</label>
          </div>
          <div className="respublish_hcol">
            <label>Draw Date</label>
          </div>
          <div className="respublish_hcolb">
            <label></label>
          </div>
        </div>

        <div className="respublish_row">
          {resulttoupdate.map((itm, indx) => {
            return (
              <>
                <div className="respublish_row_inner">
                  <div className="respublish_row_col">
                    <label>{itm.lotteryname}</label>
                  </div>
                  <div className="respublish_row_col">
                    <label>{itm.providername}</label>
                  </div>
                  <div className="respublish_row_col">
                    <label>{itm.lotteryresult}</label>
                  </div>
                  <div className="respublish_row_colb">
                    <span id="pmsg"></span>
                    <button id="pbutton"
                      onClick={(e) => {
                        handleclickGetlist(itm.lotteryid) ; document.getElementById("pbutton").innerHTML="confirm"
                      }}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      

    </>
  );
}
