export default function Drop() {
  const lotMaster = [{ id: 1, lotname: "Friday", result: "[1,2,3,4,5]" }];

  const tblUnit = [
    { id: 1, lotnumber: "[2,6,7,8,9]" },
    { id: 2, lotnumber: "[2,3,7,8,9]" },
    { id: 3, lotnumber: "[1,2,3,4,5]" },
  ];

for (const iterator of lotMaster) {
    // console.log(iterator.result);
}


const arr1 = [1,2,3,4,5]
const arr2 = [{res: [1,2,6,7,8]}, {res: [1,2,3,4,5]}]
const temp=[]
for (const elemof1 of arr1) {
    for (const elemof2 of arr2) {
        // console.log(elemof2.res);
        for (const elemof3 of elemof2.res) {
            console.log(elemof3);
        }
        
    }
}
// if(elemof1==elemof2){
//     temp.push(elemof1)
    
// }
console.log(temp);

  return (
    <>
      <div>
        <h1>Towards greater</h1>
        {lotMaster[0].result}
      </div>
    </>
  );
}
