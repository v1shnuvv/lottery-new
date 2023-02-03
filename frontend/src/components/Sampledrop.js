
export default function Drop(){
    var selectQuery = [
        {
            "id": 115,
            "txtLotteryNumber": "[9,10,11,16,20]"
        },
        {
            "id": 116,
            "txtLotteryNumber": "[6,11,19,27,36]"
        },
        {
            "id": 117,
            "txtLotteryNumber": "[8,23,28,29,36]"
        },
        {
            "id": 118,
            "txtLotteryNumber": "[6,7,8,15,28]"
        }
    ]
var updateQuery = "[6,7,5,1,2]"

var newArray=[]

for (const obj of selectQuery) {
    // console.log(obj);
    for (const objlnum of JSON.parse(obj.txtLotteryNumber)) {
        // console.log(objlnum);
        for (const objresult of JSON.parse(updateQuery)) {
            // console.log(objresult);
            console.log(obj.id, objresult);
           if(objlnum== objresult){
            newArray.push(obj.id, objresult)
           }

           
        }
    }
}
console.log(newArray);


    return(
        <>
        <div>
        </div>
        </>
    )
}