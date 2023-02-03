import "./Numberselector.css";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import { useSelector } from "react-redux";
export default function Numberselector({
  Label1,
  // numarray,
  handlerefresh,
  selectclick,
  index,
  shuffle
}) {
  const linearray = useSelector((state) => state.linearray);
  console.log("herehere",linearray);
  return (
    <div className="Numselector">
      <div className="Numselector_Header">{Label1}</div>
      <div className="Numselector_Middle">
        <div style={{ display: "flex"}}>
          {linearray[index].map((itm, indx) => {
            return (
              <div
                style={{
                  display: "flex",
                  // marginLeft: 5,
                  flexDirection: "column",
                  padding: 5
                }}
              >
                {itm.map((citem, cindx) => {
                  return citem.isclicked ? (
                    <>
                      <button
                        style={{ backgroundColor: "#3EA6D6" }}
                        onClick={(e) => {
                          selectclick({index,indx,cindx});
                        }}
                      >
                        {citem.value}
                      </button>
                      <br />
                    </>
                  ) : (
                    <>
                      <button
                        onClick={(e) => {
                          selectclick({index,indx,cindx});
                        }}
                      >
                        {citem.value}
                      </button>
                      <br />
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Numselector_Footer">
        <button>
          <TbArrowsShuffle onClick={(e)=>shuffle(index)} />
        </button>
        <button>
          <AiOutlineClose onClick={(e)=>handlerefresh(index)} />
        </button>
      </div>
    </div>
  );
}
