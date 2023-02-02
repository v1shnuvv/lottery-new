import "../components/AdminUserList.css";
export default function AdminUserlist({ data,handlechange, loname}) {
  
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th></th>
            {/* <th>ID</th>
            <th>Username</th> */}
            <th >Lottery Name</th>
            <th>Provider Name</th>
            <th>Lottery Draw Date</th>
            <th>Lottery Result</th>
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
