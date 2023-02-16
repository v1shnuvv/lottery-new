import "../components/Uservalidationfetch_Admin.css"; 
export default function Uservalidationfetch({array1}) {
  return (
    <>
      <div className="uservalidationfetch_container">
        <div className="uservalidationfetch_innercontainer1">
          <h2>Latest draw results</h2><span className="uservalidationfetch_innercontainerspan"></span>
        </div>
        <div className="uservalidationfetch_innercontainer2">
          {/* <List
            label1={"Username"}
            label2={"Matching number"}
            label3="Prize Money"
            label4={"Lottery Name"}
            array={array1}
            variable1={"txtFname"}
            variable2={"txtMatchingcount"}
            variable3={"txtPrizemoney"}
            variable4={"txtLotteryname"}
          /> */}
        </div>
      </div>
    </>
  );
}