import "./Drawresult.css";


export default function Drawresult({
  array1,
  array2,
  array3,
  array4,
  value1,
  value2,
}) {
  // var current = new Date();
  // const dt = current.getDate();
  // const month = current.getMonth();
  // const yr = current.getFullYear();

  console.log("gggg",array1);

  return (
    <div className="drawres_container">
      <div className="drawres_box">
        {/* <div className="drawres_header">
          <div className="drawres_header_date">
            <p>
              Today {dt}.{month + 1}.{yr}{" "}
            </p>
          </div>
        </div> */}
        <div className="drawres_body">
          <div className="drawres_body_sec_lft">
            <div className="drawres_body_sec_lft_content">
              <div className="drawres_body_sec_header">
                <h2>Total Winning Details</h2>
              </div>

              <div className="drawres_body_lft_row">
                <div className="drawres_body_sec_lft_row_header">
                  <p>Lottery Provider</p>
                  <p>Total Prize</p>
                </div>
                {array1.map((itm, index) => {
                  return (
                    <div className="drawres_body_sec_lft_row">
                      <div className="drawres_sec_lft_row_div">
                        <div className="drawres_sec_lft_row_inner_div">
                          <p>{itm.providername}</p>
                          <p>{itm.totalwinning}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="drawres_body_sec_rgt">
            <div className="drawres_body_sec_rgt_content">
              <div className="drawres_body_sec_header">
                <h2>Latest Grand Draw Results </h2>
                <label>
                  {array2[0] != undefined ? array2[0].Lotterydrawdate : ""}
                </label>
              </div>

              <div className="drawres_body_sec_rgt_num">
                <div className="drawres_rgt_numbers_div">
                  {array3.map((itm, index) => {
                    return (
                      <span className="drawres_rgt_numbers_span">{itm}</span>
                    );
                  })}
                </div>
              </div>

              <div className="drawers_body_sec_rgt_row">
                <div className="drawres_sec_rgt_row_div">
                  {array4.map((item, index) => {
                    return (
                      <div className="drawres_sec_rgt_row_inner_div">
                        <p>
                          Matching {item.key}/{array3.length}
                        </p>
                        <p>{item.value} Winners</p>
                      </div>
                    );
                  })}
                </div>

                <div className="drawres_sec_rgt_row_div">
                  <div className="drawres_sec_rgt_row_inner_div">
                    <p>Matching</p>
                    <p>{array2.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
