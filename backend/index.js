var express = require("express");
var app = express();
var mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());
const otpGenerator = require("otp-generator");
var nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sqladmin",
  database: "lotterydump",
});

con.connect(function (err) {
  if (err) res.send(err);
  // console.log("Connected");
});

app.post("/uservalidate", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  //console.log(req.body);
  let sql =
    "select id,txtFname,refUserRole from tblusers where txtUemail='" +
    username +
    "' and txtUpassword='" +
    password +
    "';";
  // console.log("sql", sql);
  con.query(sql, (err, result) => {
    if (result != "") {
      // console.log(result);
      res.send(result);
    } else {
      // console.log(result);

      res.send("User doesn't exist");
    }
  });
});

app.post("/insertuser", (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let uname = req.body.uname;
  let password = req.body.password;

  let sql =
    "insert into tblusers (txtFname,txtLname,txtUpassword,txtUemail) values('" +
    fname +
    "','" +
    lname +
    "','" +
    password +
    "','" +
    uname +
    "')";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/otpgenerate", async (req, res) => {
  let id = req.body.newid;
  let email = "";
  // console.log(id);
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  let sql = await ("update tblusers set txtOtp='" +
    otp +
    "' where id ='" +
    id +
    "';");
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //console.log("sql", sql);
  });
  let sql1 = await ("select txtUemail,txtOtp from tblusers where id='" +
    id +
    "';");
  con.query(sql1, (err, result) => {
    res.send(result);
  });
});
app.post("/sendmail", (req, res) => {
  let otp = req.body.otp;
  let email = req.body.email;
  // console.log("email ois", req.body);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "archanacs154@gmail.com",
      pass: "ixeebzxtnirvxogh",
    },
  });

  var mailOptions = {
    from: "archanacs154@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: "Your OTP is " + otp,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log("Message sent: %s", info.messageId);
    //  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send(otp);
  });
});

app.post("/verify", (req, res) => {
  let otp = req.body.otp;
  let id = req.body.id;
  let sql = "select txtOtp from tblusers where id='" + id + "'; ";
  con.query(sql, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

app.post("/confirmuser", (req, res) => {
  let id = req.body.id;
  let sql = "update tblusers set txtDeleteflag=1 where id='" + id + "';";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/drawticket", (req, res) => {
  let sql =
    "SELECT  tm.id, tm.txtLotteryname AS main_ltry, tb.id AS sub_id, tm.txtLotterytype as lottype, tm.txtPurchaseLimit AS purchase, tm.txtSelectionLimit AS main_limit, tb.txtSelectionLimit AS sub_limit, tb.txtLotteryname AS sub_ltry, tm.txtFirstprize, tm.txtStartRange AS mina_start, tm.txtEndRange AS main_end, tb.txtStartRange AS sub_start, tb.txtEndRange AS sub_end, DATE_FORMAT(tm.dtLotterydrawdate, '%Y-%m-%d') AS drawdate, DATE_FORMAT(tb.dtLotterydrawdate, '%Y-%m-%d') AS sub_drawdate, tm.txtNoOfCol AS columnNo, tm.txtNoOfRow AS rowNo, tm.txtColStartAt AS strtNo, tm.txtColEndAt AS endNo FROM (SELECT  * FROM     tbllotterymaster tm WHERE tm.txtLotterytype=0 &&     tm.dtLotterydrawdate > NOW() ORDER BY tm.dtLotterydrawdate , tm.id LIMIT 1) tm     LEFT JOIN tbllotterymaster tb ON tm.txtSubLottery = tb.id";
  con.query(sql, (err, result) => {
    res.send(result);
    //  console.log(result);
  });
});

app.post("/unitcheckout", (req, res) => {
  let id = req.body.id;
  let sql =
    "SELECT tblunit.id as id ,tbllotterymaster.txtLotteryname as Lotteryname,DATE_FORMAT(tbllotterymaster.dtLotterydrawdate,'%M- %d-%Y')as Drawdate,tblunit.txtFirstchoicenumber as Firstnumber,tblunit.txtSecondchoicenumber as Secondnumber,tblunit.txtThirdchoicenumber as Thirdnumber,tblunit.txtFourthchoicenumber as Fourthnumber,tblunit.txtFifthoicenumber as Fifthnumber,tbllotterymaster.txtCost as Price FROM tbllotterymaster JOIN tblunit on tbllotterymaster.id=tblunit.refLotterymaster JOIN tblusers on tblusers.id=tblunit.refUser where tblusers.id='" +
    id +
    "' and tblunit.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
app.post("/unitdelete", (req, res) => {
  let sql = "UPDATE tblunit SET txtDeleteflag=3 where id=" + req.body.id + ";";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
    // console.log(sql);
  });
});
app.post("/checkouttotal", (req, res) => {
  let sql =
    "SELECT tblunit.id as id,sum(tbllotterymaster.txtCost) as Totalcost FROM tbllotterymaster JOIN tblunit on tbllotterymaster.id=tblunit.refLotterymaster JOIN tblusers on tblusers.id=tblunit.refUser where tblusers.id=1 and tblunit.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/Unitsold", (req, res) => {
  let sql =
    "select ustable.Lotterymaster,ustable.DrawDate as DrawDate,ustable.UnitSold,uctable.UnitConfirmed,(ustable.UnitSold-uctable.UnitConfirmed) as UnitPending from (SELECT lm.txtLotteryname AS Lotterymaster,DATE_FORMAT(lm.dtLotterydrawdate, '%M-%d-%Y') AS DrawDate,COUNT(ut.id) AS UnitConfirmed FROM tbllotterymaster lm  JOIN tblunit ut ON ut.refLotterymaster = lm.id where ut.txtUpdateflag = 1 AND ut.txtDeleteflag = 0 GROUP BY lm.txtLotteryname ORDER BY drawdate ASC) as uctable join (SELECT lm.txtLotteryname AS Lotterymaster,DATE_FORMAT(lm.dtLotterydrawdate, '%M-%d-%Y') AS DrawDate,COUNT(ut.id) AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id where ut.txtDeleteflag = 0 GROUP BY lm.txtLotteryname ORDER BY drawdate ASC) as ustable group by ustable.Lotterymaster";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
app.post("/Unitlist", (req, res) => {
  let sql =
    "SELECT tblunit.id AS Unitid,CONCAT(tblusers.txtFname ,' ',tblusers.txtLname) AS Name,tblusers.txtUemail as Email,tblunit.txtFirstchoicenumber AS Firstnumber,tblunit.txtSecondchoicenumber AS Secondnumber,tblunit.txtThirdchoicenumber AS Thirdnumber,tblunit.txtFourthchoicenumber AS Fourthnumber,tblunit.txtFifthoicenumber AS Fifthnumber,tbllotterymaster.txtLotteryname as Lotteryname,DATE_FORMAT(tblunit.txtPurchaseddate, '%M %d %Y') as datepurchased,tblunit.txtDeleteflag as deleted,tblunit.txtUpdateflag as Status,tblunit.txtUpdatedBy,tblunit.dtUpdatedOn FROM tbllotterymaster JOIN tblunit ON tbllotterymaster.id = tblunit.refLotterymaster JOIN tblusers ON tblunit.refUser = tblusers.id where tblunit.txtUpdateflag=0 and tblunit.txtDeleteflag=0 order by datepurchased desc";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/Unitpasstolottery", (req, res) => {
  let sql = "UPDATE tblunit SET dtUpdatedOn = 1 WHERE tblunit.id=1";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});
// app.post("/addlottery", (req, res) => {
//   let lotteryname = req.body.lotteryname;
//   let drawdate = req.body.drawdate;
//   let lotteryprize = req.body.lotteryprize;
//   let ticketcost = req.body.ticketcost;
//   let userid = req.body.userid;

//   console.log(req.body);
//   let sql =
//     "insert into tbllotterymaster (txtLotteryname,dtLotterydrawdate,txtLotteryprize,txtCost,txtCreatedBy,txtCreatedOn) values('" +
//     lotteryname +
//     "','" +
//     drawdate +
//     "'," +
//     lotteryprize +
//     "," +
//     ticketcost +
//     ",'admin',curdate())";

//   con.query(sql, (err, result) => {
//     if (err)  res.send(err);
//     console.log(result);
//     res.send(result);
//   });
// });

app.post("/lotteryfetch", (req, res) => {
  // console.log(req.body);
  let sql =
    "select id, txtLotteryname as lotteryname ,date_format(dtLotterydrawdate,'%y-%m-%d') as drawdate,txtLotteryprize as Prizemoney ,txtUpdatedBy,dtUpdatedOn,txtDeleteflag  from tbllotterymaster where txtDeleteflag =0";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    //console.log(result);
    res.send(result);
  });
});
app.post("/lotterydelete", (req, res) => {
  let id = req.body.id;
  // let userid = req.body.userid;
  // console.log(req.body);
  let sql =
    "UPDATE tbllotterymaster SET txtDeleteflag = 1,txtUpdatedBy = 'admin',dtUpdatedOn = CURDATE() WHERE tbllotterymaster.id = '" +
    id +
    "'";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/addnewbank", (req, res) => {
  let acctowner = req.body.acctowner;
  let accno = req.body.accno;
  let bankname = req.body.bankname;
  let branch = req.body.branch;
  let ifsc = req.body.ifsc;
  let buserid = req.body.buserid;
  var sql =
    "insert into tblbankdetails (txtAccountowner, txtAccountnumber,txtBankname, txtBranch, txtIfsc, refUser) values ('" +
    acctowner +
    "', '" +
    accno +
    "', '" +
    bankname +
    "', '" +
    branch +
    "', '" +
    ifsc +
    "', '" +
    buserid +
    "');";
  // console.log(sql);
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

// app.post("/viewbank", (req, res) => {
//   var sql =
//     "SELECT txtBankname FROM tblbankdetails where refUser=1;";
//   console.log(sql);
//   con.query(sql, function (err, result) {
//     if (err)  res.send(err);
//     console.log(result);
//     res.send(result);
//   });
// });

app.post("/Lotterylist", (req, res) => {
  let sql =
    "SELECT lm.txtLotteryname AS Lotterymaster, COUNT(ut.id)  AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id GROUP BY lm.txtLotteryname HAVING Unitsold > 1";

  con.query(sql, (err, result) => {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});

/* ******************************************** API for adding unit selected ******************************************************** */
// app.post("/insertunit", (req, res) => {
//   var fnum=req.body.firstnum;
//   console.log(req.body);
//   var secnum=req.body.secondnum;
//   var thirdnum=req.body.thirdnum;
//   var fournum=req.body.fournum;
//   var fivenum=req.body.fifthnum;
//   var id=req.body.id;

//   let sql =
//     "insert into  tblunit(txtFirstchoicenumber,txtSecondchoicenumber,txtThirdchoicenumber,txtFourthchoicenumber,txtFifthoicenumber,refUser,refLotterymaster,txtPurchaseddate,txtDeleteflag)values('"+fnum+"','"+secnum+"','"+thirdnum+"','"+fournum+"','"+fivenum+"','"+id+"',1,CURDATE(),0);";
//   con.query(sql, (err, result) => {
//     // console.log(sql)
//     if (err)  res.send(err);
//     console.log(result);
//     res.send(result);
//   });
// });

app.post("/insertunit", (req, res) => {
  let arr = req.body.arr;
  // let val = JSON.stringify(arr);
  // console.log("val", val);
  let uid = req.body.uid;
  let lid = req.body.lid;

  var sql =
    "insert into tblunit(refUser,refLotterymaster,txtLotteryNumber) values ";
  let first = true;
  for (const obj of arr) {
    if (first) sql += " ('" + uid + "', '" + lid + "', '" + obj + "') ";
    else sql += " ,('" + uid + "', '" + lid + "', '" + obj + "') ";
  }
  res.send(sql);

  for (const obj of arr) {
    if (obj.length > 0) {
      let val = JSON.stringify(obj);
      var sql =
        "insert into tblunit(refUser,refLotterymaster,txtLotteryNumber) values ('" +
        uid +
        "','" +
        lid +
        "','" +
        val +
        "')";
      // console.log(sql);
      con.query(sql, function (err, result) {
        if (err) res.send("Error");
        //  console.log("Number of records inserted: " + result.affectedRows);
        res.send(result);
      });
    }
  }
});

app.post("/insertunitnumber", (req, res) => {
  let arr = req.body.arr;
  // let val = JSON.stringify(arr);
  // console.log("val", val);
  let uid = req.body.uid;
  let lid = req.body.lid;

  var sql =
    "insert into tblunit(refUser,refLotterymaster,txtLotteryNumber) values ";
  let first = true;
  for (const obj of arr) {
    if (obj.length > 0) {
      if (first) {
        sql += " ('" + uid + "', '" + lid + "', '[" + obj + "]') ";
        first = false;
      } else {
        sql += " ,('" + uid + "', '" + lid + "', '[" + obj + "]') ";
      }
    }
  }
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

//--------------winner------------------//

app.post("/winners", (req, res) => {
  var sql = "select count(id) as winners from tblunit;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//---------------ticketlist---------------//

app.post("/tickets", (req, res) => {
  var iduser = req.body.userid;
  var sql =
    "select count(id) as number from tblunit where txtPurchaseddate=curdate() && refUser='" +
    iduser +
    "';";
  // console.log(sql);
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//------------------userprofileedit---------------//

app.post("/profile", (req, res) => {
  let userid = req.body.userid;
  var sql =
    "select tu.txtFname,tu.txtLname,tu.txtUemail,tu.txtaddress,td.txtDistrict,tc.txtCountryname,ts.txtStatename from tblusers tu left join tbldistrict td on td.id=tu.refDistrict left join tblstate ts on ts.id=td.refStateid left join tblcountry tc on tc.id=ts.refCountryid where tu.id='" +
    userid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //console.log("sql to fetch profile", sql);
    //  console.log(result);
    res.send(result);
  });
});

app.post("/fetchcity", (req, res) => {
  var sql = "SELECT TD.id,TD.txtDistrict FROM tbldistrict TD;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    res.send(result);
  });
});

app.post("/profileupdate", (req, res) => {
  let userid = req.body.userid;
  let mobile = req.body.phone;
  let address = req.body.useraddress;
  let city = req.body.city;
  var sql =
    "update tblusers set txtUphoneno ='" +
    mobile +
    "',txtaddress='" +
    address +
    "',refDistrict='" +
    city +
    "' where tblusers.id='" +
    userid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//-----------------userpasswordedit--------------//

app.post("/updatepassword", (req, res) => {
  let userid = req.body.userid;
  let newpassword = req.body.password;
  var sql =
    "update tblusers set txtUpassword='" +
    newpassword +
    "' where tblusers.id='" +
    userid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
app.post("/showpassword", (req, res) => {
  let userid = req.body.userid;
  var sql =
    "select TU.id,TU.txtUpassword from tblusers TU where  TU.id='" +
    userid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

/* ***************************************************Filter bar API'S****************************************************************** */

app.post("/search_date", (req, res) => {
  let date = req.body.date;
  let sql =
    "select txtFirstchoicenumber,txtSecondchoicenumber,txtThirdchoicenumber,txtFourthchoicenumber,txtFifthoicenumber from tblunit where txtPurchaseddate='" +
    date +
    "'";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

/********************************************************************** by Vishu Provider Page ************************************************************************************************************* */

app.post("/fetchstate", (req, res) => {
  var sql = "select ts.id, ts.txtStatename from tblstate ts";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/viewprovider", (req, res) => {
  var sql =
    "SELECT id, txtProvidername,txtEmail,txtContactnumber,txtRegisteredaddress,txtZipcode,refState FROM tblprovider where txtDeleteflag =0;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/editprovider", (req, res) => {
  let providereditid = req.body.providereditid;
  let providereditname = req.body.providereditname;
  let providereditemail = req.body.providereditemail;
  let providereditnumber = req.body.providereditnumber;
  let providereditaddress = req.body.providereditaddress;
  let providereditzip = req.body.providereditzip;
  let providereditcity = req.body.providereditcity;
  var sql =
    "UPDATE tblprovider SET txtProvidername = '" +
    providereditname +
    "', txtEmail = '" +
    providereditemail +
    "', txtContactnumber = '" +
    providereditnumber +
    "', txtRegisteredaddress = '" +
    providereditaddress +
    "', txtZipcode = '" +
    providereditzip +
    "', refState = '" +
    providereditcity +
    "' WHERE id='" +
    providereditid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/deleteprovider", (req, res) => {
  let providereditid = req.body.providereditid;
  var sql =
    "update tblprovider set txtDeleteflag = 1 where id = '" +
    providereditid +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/addprovider", (req, res) => {
  let providername = req.body.providername;
  let provideremail = req.body.provideremail;
  let providermobile = req.body.providermobile;
  let provideraddress = req.body.provideraddress;
  let providerzipcode = req.body.providerzipcode;
  let providercity = req.body.providercity;

  var sql =
    "INSERT INTO tblprovider (txtProvidername, txtEmail, txtContactnumber, txtRegisteredaddress, txtZipcode, refState) VALUES ('" +
    providername +
    "', '" +
    provideremail +
    "', '" +
    providermobile +
    "', '" +
    provideraddress +
    "', '" +
    providerzipcode +
    "', '" +
    providercity +
    "');";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

/***********************************************************************By Vidya  Add lottery ********************************************************************************** */

app.post("/addlottery", function (req, res) {
  let lotteryname = req.body.lotteryname;
  let lotterytype = req.body.lotterytype;
  let lotterydate = req.body.lotterydate;
  let lotterycost = req.body.lotterycost;
  let unitsaleamount = req.body.unitsaleamount;
  let adminchargeperunit = req.body.adminchargeperunit;
  let lotterystart = req.body.lotterystart;
  let lotteryend = req.body.lotteryend;
  let lotteryselection = req.body.lotteryselection;
  let lotterypurchase = req.body.lotterypurchase;
  let lotterysub = req.body.lotterysub;
  let agentcommission = req.body.agentcommission;
  let tax = req.body.tax;
  let commissionrate = req.body.commissionrate;
  let otherdeduct1 = req.body.otherdeduct1;
  let charitypercent = req.body.charitypercent;
  let otherdeduct2 = req.body.otherdeduct2;
  let refProvider = req.body.refProvider;
  let puramount = req.body.puramount;
  let noofCol = req.body.noofCol;
  let noofRow = req.body.noofRow;
  let colstartNo = req.body.colstartNo;
  let first = req.body.first;
  let second = req.body.second;
  let third = req.body.third;
  let fourth = req.body.fourth;
  let fifth = req.body.fifth;
  let sixth = req.body.sixth;
  let colendNo = req.body.colendNo;
  let id = req.body.id;
  var sql =
    "insert into tbllotterymaster (txtLotteryname,txtLotterytype,refProvider, dtLotterydrawdate, txtCost, txtPurchasedamount, txtUnitSaleAmount, txtAdminChargeperUnit, txtSubLottery, txtStartRange, txtEndRange, txtSelectionLimit, txtPurchaseLimit, txtNoOfCol, txtNoOfRow, txtColStartAt, txtColEndAt, txtAgentCommission, txtTax, txtCommissionrate, txtOtherDeduct1, txtOtherDeduct2, txtCharitypercent, txtFirstprize, txtSecondprize, txtThirdprize, txtFourthprize, txtFifthprize, txtSixthprize) values ('" +
    lotteryname +
    "','" +
    lotterytype +
    "','" +
    refProvider +
    "','" +
    lotterydate +
    "','" +
    lotterycost +
    "','" +
    puramount +
    "','" +
    unitsaleamount +
    "','" +
    adminchargeperunit +
    "','" +
    lotterysub +
    "','" +
    lotterystart +
    "','" +
    lotteryend +
    "','" +
    lotteryselection +
    "','" +
    lotterypurchase +
    "','" +
    noofCol +
    "','" +
    noofRow +
    "','" +
    colstartNo +
    "','" +
    colendNo +
    "','" +
    agentcommission +
    "','" +
    tax +
    "','" +
    commissionrate +
    "','" +
    otherdeduct1 +
    "','" +
    otherdeduct2 +
    "','" +
    charitypercent +
    "','" +
    first +
    "','" +
    second +
    "','" +
    third +
    "','" +
    fourth +
    "','" +
    fifth +
    "','" +
    sixth +
    "')";
  con.query(sql, function (err, result) {
    if (err) res.send("Error");
    //  console.log(result);
    // console.log("ji", sql);
    res.send(result);
  });
  // var sql1="insert into  tblresultmaster set refLotterymaster = LAST_INSERT_ID('"+id+"')";
  // con.query(sql1,function(err,result){
  //     if (err)  res.send(err);
  //     console.log(result);
  //     console.log("j",sql1)
  //     res.send(result);
  // })
});

//--------------------ADD LOTTERY--------------------- //
// app.post("/addlottery", function (req, res) {
//   let lotteryname = req.body.lotteryname;
//   let lotterydate = req.body.lotterydate;
//   let lotterycost = req.body.lotterycost;
//   let unitsaleamount = req.body.unitsaleamount;
//   let adminchargeperunit = req.body.adminchargeperunit;
//   let lotterystart = req.body.lotterystart;
//   let lotteryend = req.body.lotteryend;
//   let lotteryselection = req.body.lotteryselection;
//   let lotterypurchase = req.body.lotterypurchase;
//   let lotterysub = req.body.lotterysub;
//   let agentcommission = req.body.agentcommission;
//   let tax = req.body.tax;
//   let commissionrate = req.body.commissionrate
//   let otherdeduct1 = req.body.otherdeduct1;
//   let charitypercent = req.body.charitypercent;
//   let otherdeduct2 = req.body.otherdeduct2;
//   let refProvider = req.body.refProvider;
//   let id=req.body.id;
//   var sql ="insert into tbllotterymaster(txtLotteryname,dtLotterydrawdate,txtCost,txtUnitSaleAmount,txtAdminChargeperUnit,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery,txtAgentCommission,txtTax ,txtOtherDeduct1 ,txtOtherDeduct2,txtCommissionrate,txtCharitypercent,refProvider) values('" + lotteryname + "','" + lotterydate + "','" + lotterycost + "','" + unitsaleamount + "','" + adminchargeperunit + "','" + lotterystart + "','" + lotteryend + "','" + lotteryselection + "','" + lotterypurchase + "','" + lotterysub + "','" + agentcommission + "','" + tax + "','" + otherdeduct1 + "','" + otherdeduct2 + "','" + commissionrate + "','" + charitypercent + "','" + refProvider + "' );";
//   var sql1="insert into  tblresultmaster set refLotterymaster = LAST_INSERT_ID('"+id+"')";
//   con.query(sql, function (err, result) {
//       if (err)  res.send(err);
//       console.log(result);
//       console.log("ji",sql)
//       res.send(result);
//   });
//   con.query(sql1,function(err,result){
//       if (err)  res.send(err);
//       console.log(result);
//       console.log("j",sql1)
//       res.send(result);
//   })
// });

//--------------------ADD LOTTERY PROVIDER----------------------//
app.post("/addlotteryproviderfetch", function (req, res) {
  var sql = "SELECT id, txtProvidername FROM tblprovider;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
//--------------------ADD LOTTERY EXISTING----------------------//
app.post("/addlotteryexist", function (req, res) {
  let refProvider = req.body.refProvider;
  var sql =
    "select id,txtLotteryname from tbllotterymaster where refProvider='" +
    refProvider +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});

//--------------------ADD LOTTERY EXISTING DETAILS--------------------- //

app.post("/addlotterydetails", function (req, res) {
  let id = req.body.id;
  var sql =
    "select date_format(dtLotterydrawdate, '%Y-%m-%d' )as drawdate,txtLotterytype,txtFirstprize, txtSecondprize, txtThirdprize, txtFourthprize, txtFifthprize, txtSixthprize, txtCost,txtStartRange,txtEndRange,txtSelectionLimit,txtPurchaseLimit,txtSubLottery, txtAdminChargeperUnit, txtUnitSaleAmount, txtAgentCommission, txtTax, txtCommissionrate, txtOtherDeduct1, txtOtherDeduct2 ,txtCharitypercent, txtPurchasedamount from tbllotterymaster where id = '" +
    id +
    "'";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//-------------------------EDIT LOTTERY--------------------------//

app.post("/editlottery", function (req, res) {
  let id = req.body.id;
  let drawdate = req.body.drawdate;
  let puramount = req.body.puramount;
  let unitsaleamount = req.body.unitsaleamount;
  let adminchargeperunit = req.body.adminchargeperunit;
  let lotterytype = req.body.lotterytype;
  let commissionrate = req.body.commissionrate;
  let agentcommission = req.body.agentcommission;
  let tax = req.body.tax;
  let otherdeduct1 = req.body.otherdeduct1;
  let otherdeduct2 = req.body.otherdeduct2;
  let charitypercent = req.body.charitypercent;
  let first = req.body.first;
  let second = req.body.second;
  let third = req.body.third;
  let fourth = req.body.fourth;
  let fifth = req.body.fifth;
  let sixth = req.body.sixth;
  let cost = req.body.cost;
  let start = req.body.start;
  let end = req.body.end;
  let selection = req.body.selection;
  let purchase = req.body.purchase;
  let sublottery = req.body.lotterysub;
  var sql =
    "UPDATE tbllotterymaster SET dtLotterydrawdate='" +
    drawdate +
    "',txtCost='" +
    cost +
    "',txtPurchasedamount='" +
    puramount +
    "' ,txtStartRange='" +
    start +
    "',txtEndRange='" +
    end +
    "',txtSelectionLimit='" +
    selection +
    "',txtPurchaseLimit='" +
    purchase +
    "',txtSubLottery='" +
    sublottery +
    "' ,txtUnitSaleAmount='" +
    unitsaleamount +
    "',txtAdminChargeperUnit='" +
    adminchargeperunit +
    "',txtLotterytype='" +
    lotterytype +
    "',txtCommissionrate='" +
    commissionrate +
    "',txtAgentCommission='" +
    agentcommission +
    "',txtTax='" +
    tax +
    "',txtOtherDeduct1='" +
    otherdeduct1 +
    "',txtOtherDeduct2='" +
    otherdeduct2 +
    "',txtCharitypercent='" +
    charitypercent +
    "',txtFirstprize='" +
    first +
    "',txtSecondprize='" +
    second +
    "',txtThirdprize='" +
    third +
    "',txtFourthprize='" +
    fourth +
    "',txtFifthprize='" +
    fifth +
    "',txtSixthprize='" +
    sixth +
    "' WHERE id = '" +
    id +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//------------------------SUB LOTTERY--------------------------//

app.post("/sublottery", function (req, res) {
  let id = req.body.id;
  let sublottery = req.body.sublottery;
  var sql =
    "UPDATE tbllotterymaster SET txtRaffleid='1',txtSubLottery='" +
    sublottery +
    "' WHERE id = '" +
    id +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//-------------------------SUBLOTTERY LIST-------------------//

app.post("/sublotterylist", function (req, res) {
  let provider = req.body.providerid;
  var sql =
    "select tlm.id,tlm.txtLotteryname from tbllotterymaster tlm join tblprovider tp on tlm.refProvider=tp.id where tp.id='" +
    provider +
    "' && tlm.txtLotterytype=1;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    res.send(result);
    console.log("ttt", result);
  });
});

//-----------------------LOTTERY LIST------------------------//
app.post("/lotterylist", function (req, res) {
  var sql =
    "select txtLotteryname,dtLotterydrawdate,txtLotteryprize,txtCost from tbllotterymaster;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//-----------------------LOTTERY EXILE------------------------//
app.post("/lotteryexile", function (req, res) {
  var sql =
    "select txtLotteryname,dtLotterydrawdate from tbllotterymaster where dtLotterydrawdate < now();";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

/****************************************************By visakh Filter bar search *************************************************************************************** */

//------------userinfoforadmin--------------//

// app.post("/userlistforadmin", (req, res) => {
//   var sql =
//     "select TUR.id,concat(TUR.txtFname,TUR.txtLname) as name,TUR.txtaddress,TLM.txtLotteryname,date_format(dtLotterydrawdate,'%Y-%m-%d') as lotterydrawdate,date_format(txtPurchaseddate,'%Y-%m-%d') as purchasedate from tblunit TU  join tblusers TUR on TU.refUser=TUR.id  join tbllotterymaster TLM on TU.refLotterymaster=TLM.id;";
//   con.query(sql, function (err, result) {
//     if (err)  res.send(err);
//     console.log(result);
//     res.send(result);
//   });
// });

app.post("/userlistforadmin", (req, res) => {
  var sql =
    "SELECT ifnull(txtLotteryname, 'null') as txtLotteryname, ifnull(txtProvidername, 'null') as txtProvidername, ifnull(date_format(dtLotterydrawdate,'%Y-%m-%d'), 'null')  as dtLotterydrawdate, ifnull(txtLotteryresult, 'Result not published') as txtLotteryresult FROM tbllotterymaster left join tblprovider on tbllotterymaster.refProvider=tblprovider.id";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

//-------------------<resultupdate<<----------------------------------------
app.post("/RaffleBothInsert", (req, res) => {
  let winl = req.body.winl;
  let winr = req.body.winr;
  let sql = "update tbllotterymaster set ";
  // let sql2= "SELECT id, txtLotteryNumber FROM tblunit where refLotterymaster='"+winl.lid+"'"
  let condition = "";
  if (winl.lid != "") {
    condition += " txtLotteryresult='" + winl.resultl + "' ";
    if (winr.rid != "")
      condition +=
        " txtRaffleid='" + winr.resultr + "'  where id ='" + winr.rid + "'";
    else condition += " where id ='" + winl.lid + "' ";
  }
  if (winr.rid != "") {
    condition +=
      " txtRaffleid='" + winr.resultr + "'  where id ='" + winr.rid + "'";
  }
  sql += condition;
  // var promisedResult = await new Promise ((resolve, reject)=>{
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    console.log(sql);
    res.send(result);
  });
  // })
  // var promisedResult1 = await new Promise ((resolve, reject)=>{
  //   con.query(sql2, (err, result) => {
  //     if (err)  res.send(err);
  //     console.log("second",result);
  //     resolve(result);
  //   })
  // })
  // console.log(winl.resultl);
  //   var selectQuery = [
  //     {
  //         "id": 115,
  //         "txtLotteryNumber": "[9,10,11,16,20]"
  //     },
  //     {
  //         "id": 116,
  //         "txtLotteryNumber": "[6,11,19,27,36]"
  //     },
  //     {
  //         "id": 117,
  //         "txtLotteryNumber": "[8,23,28,29,36]"
  //     },
  //     {
  //         "id": 118,
  //         "txtLotteryNumber": "[6,7,8,15,28]"
  //     }
  // ]
});

app.post("/sampleee", (req, res) => {
  let sql =
    "SELECT id, txtLotteryNumber FROM tblunit where refLotterymaster=25";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
app.post("/Lotteryprovdresultfetch", (req, res) => {
  let sql =
    "SELECT pr.txtProvidername AS Providername, lm.id as lotteryid, lm.txtLotteryname AS Lotteryname,  DATE_FORMAT(lm.dtLotterydrawdate, ' %Y - %m - %d ') AS DrawDate, lm.txtLotteryresult as Winningnumber, lm.txtRaffleid as Raffleid FROM tblprovider pr LEFT JOIN tbllotterymaster lm ON lm.refProvider = pr.id where  (lm.txtLotteryresult is null or lm.txtRaffleid is null) or (lm.txtLotteryresult is null and lm.txtRaffleid is null)";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
//----------------------userpage----------------
app.post("/userunitfetch", (req, res) => {
  let lname = req.body.lotteryname;
  let uid = req.body.userid;
  let pid = req.body.provid;
  var sql =
    "SELECT l.txtLotteryname,SUM(txtPrizemoney) as TotalPrize,txtPrizemoney,p.txtProvidername FROM tblprovider p JOIN tbllotterymaster l ON p.id = l.refProvider JOIN tblresultmap r ON l.id = r.refLotterymasterid JOIN tblunit u ON u.id = r.refUnitid WHERE u.refUser = '" +
    uid +
    "' and p.id='" +
    pid +
    "' group by l.txtLotteryname='" +
    lname +
    "';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    console.log(result);
    res.send(result);
  });
});

app.post("/userlotterydetails", (req, res) => {
  let userid = req.body.userid;
  var sql =
    "select DATE_FORMAT(tu.txtPurchaseddate, '%Y-%m-%d') as purchaseddate, tu.txtLotteryNumber as lotterynumber, lm.txtLotteryname as lotteryname, tp.txtProvidername as providername, date_format(lm.dtLotterydrawdate, '%Y-%m-%d') as drawdate from tblunit tu left join tbllotterymaster lm on tu.refLotterymaster= lm.id left join tblprovider tp on lm.refProvider=tp.id where tu.refUser= '" +
    userid +
    "' and lm.dtLotterydrawdate > curdate() and tu.txtDeleteflag=0";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    console.log(result);
    res.send(result);
  });
});

app.post("/userwinningdetails", (req, res) => {
  let userid = req.body.userid;
  var sql =
    "SELECT tr.txtMatchingcount as matchingcount, tr.txtPrizemoney as prizemoney, tu.txtLotteryNumber as lotterynumber, tl.txtLotteryname as lotteryname, date_format(tl.dtLotterydrawdate, '%Y-%m-%d') as drawdate FROM tblresultmap tr left join tblunit tu on tr.refUnitid = tu.id left join tbllotterymaster tl on tr.refLotterymasterid= tl.id where tu.refUser= '" +
    userid +
    "' and tu.txtDeleteflag=0";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    console.log(result);
    res.send(result);
  });
});
//-------------------------resultpublish----------------------------------------------//
app.post("/resulttopublishlist", (req, res) => {
  let sql =
    "SELECT tl.txtLotteryname as lotteryname, tp.txtProvidername as providername, tl.id as lotteryid, tl.txtLotteryresult as lotteryresult FROM tbllotterymaster tl left join tblprovider tp on tl.refProvider = tp.id  where tl.dtLotterydrawdate > curdate()";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/unittocompare", (req, res) => {
  let lotteryid = req.body.lotteryid;
  let sql =
    "SELECT tu.id as unitid, tu.txtLotteryNumber as selectednumber, tl.txtLotteryresult as lotteryresult, tl.id as lotid, tl.txtFirstprize as firstp, tl.txtSecondprize as secondp, tl.txtThirdprize as thirdp, tl.txtFourthprize as fourthp, tl.txtFifthprize as fifthp, tl.txtSixthprize as sixthp FROM tblunit tu left join tbllotterymaster tl on tu.refLotterymaster=tl.id where tl.id= '" +
    lotteryid +
    "' and tu.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});
app.post("/updatewinningunit", (req, res) => {
  let finalarr = req.body.finalarr;
  let first = true;
  var sql =
    "insert into tblresultmap (refUnitid, txtMatchingcount, txtPrizemoney, refLotterymasterid) values ";
  for (const row of finalarr) {
    if (first) {
      sql +=
        "('" +
        row.unitid +
        "','" +
        row.matchno +
        "','" +
        row.prize +
        "','" +
        row.lotid +
        "')";
      first = false;
    } else {
      sql +=
        " ,('" +
        row.unitid +
        "','" +
        row.matchno +
        "','" +
        row.prize +
        "','" +
        row.lotid +
        "')";
    }
  }
  con.query(sql, (err, result) => {
    if (err) res.send("Error");
    res.send(result);
    console.log("sqqql", sql);
  });
});

/*********************************************************Archana =- Ticket Selector      ********************************************************************************************************************* */

app.post("/ticketselector_lotteryfetch", (req, res) => {
  let sql =
    "select tm.id ,tm .txtLotteryname as main_ltry ,tb.id as sub_id,tb.txtLotteryname as sub_ltry ,date_format(tm.dtLotterydrawdate ,'%Y-%m-%d') as drawdate from tbllotterymaster tm left join tbllotterymaster tb on tm.txtSubLottery=tb.id;";
  con.query(sql, (err, result) => {
    res.send(result);
    // console.log(result);
  });
});

/****************************************************Archana Cart count *************************************************** */

app.post("/header_countunit", (req, res) => {
  let id = req.body.id;

  let sql =
    "select count(id) as count from tblunit where refuser='" +
    id +
    "' and txtDeleteflag=0";
  con.query(sql, (err, result) => {
    // console.log(sql);
    res.send(result);
  });
});

/*********************************************Vishnu  winning uptodate ***************************************/
app.post("/totalwinnigtodate", (req, res) => {
  var sql =
    "SELECT txtProvidername, txtLotteryname, refProvider, sum(txtPrizemoney) as totalPrizemoney FROM tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id group by refProvider ";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
// API for Totalwinningvalidation COMPONENT

app.post("/totallotterywinnigtodate", (req, res) => {
  var sql =
    "SELECT txtProvidername, txtLotteryname, txtPrizemoney, refProvider, sum(txtPrizemoney) AS totalPrizemoney FROM tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id group by txtLotteryname order by refProvider asc";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
//API for Totalwinningvalidation COMPONENT

app.post("/upcominglotterydraws", (req, res) => {
  var sql =
    "select id, txtLotteryname, txtCost ,date_format(dtLotterydrawdate,'%y-%m-%d') as drawdate,date_format(curdate(),'%y-%m-%d') as Today from tbllotterymaster where dtLotterydrawdate>curdate() order by drawdate";
  //  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});
app.post("/providerprizelist", (req, res) => {
  var sql =
    "SELECT tp.txtProvidername as providername, sum(tr.txtPrizemoney) as totalwinning FROM tblresultmap tr left join tbllotterymaster lm on tr.refLotterymasterid=lm.id left join tblprovider tp on lm.refProvider=tp.id group by tp.txtProvidername";
  console.log("sql",sql);
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    res.send(result);
    console.log("hhh",result);
  });
});
app.post("/latestdrawunits", (req, res) => {
  var sql =
    "select txtMatchingcount, txtPrizemoney, txtLotteryNumber, txtFname, txtLname, txtLotteryname, DATE_FORMAT(dtLotterydrawdate, '%d %b %Y') AS Lotterydrawdate, txtLotteryresult from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tblusers on tblunit.refUser = tblusers.id join tbllotterymaster on tblresultmap.refLotterymasterid = tbllotterymaster.id where txtMatchingcount != 0 && dtLotterydrawdate = ( select dtLotterydrawdate from tbllotterymaster where dtLotterydrawdate < now() order by dtLotterydrawdate desc limit 1)";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
}); //changed on  12th jan 23 drawresult

// test api

app.post("/tst", (req, res) => {
  var sql =
    "SELECT     txtProvidername,  txtLotteryname,  refProvider,SUM(txtPrizemoney) AS totalPrizemoney   FROM  tblresultmap m   JOIN  tblunit u ON m.refUnitid = u.id         JOIN  tbllotterymaster s ON u.refLotterymaster = s.id  JOIN  tblprovider p ON s.refProvider = p.id  group by p.id";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});

app.post("/subltryfetch", (req, res) => {
  let id = req.body.id;
  var sql =
    "SELECT tm.id ,tm .txtLotteryname as main_ltry ,tb.id as sub_id,tb.txtLotteryname as sub_ltry ,tm.txtFirstprize, date_format( tm.dtLotterydrawdate,'%Y-%m-%d') as drawdate  from tbllotterymaster tm left join tbllotterymaster tb on tm.txtSubLottery=tb.id WHERE tm.id='" +
    id +
    "'";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});

//moses------>

// app.post("/userunitfetch", (req, res) => {
//   let fetchid = req.body.fetchid;
//   var sql =
//     "select tblresultmap.id as resultid, tbllotterymaster.txtLotteryName, date_format(tbllotterymaster.dtLotterydrawdate, '%Y-%m-%d') as DrawDate, tblusers.id as userid, sum(tblresultmap.txtPrizemoney) as TotalPrize, tblprovider.txtProvidername from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tblusers on tblunit.refUser = tblusers.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id where tblusers.id='3' group by tbllotterymaster.txtLotteryname; ";
//   con.query(sql, function (err, result) {
//     if (err) res.send(err);
//     // console.log(result);
//     res.send(result);
//   });
// });
app.post("/userwinningtodatefetch", (req, res) => {
  var sql =
    "select tblresultmap.id, tblprovider.txtProvidername, tblusers.id as userid, sum(tblresultmap.txtPrizemoney) as ProviderTotal from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblusers on tblunit.refUser = tblusers.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id where tblusers.id='3' group by tblprovider.txtProvidername";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    //  console.log(result);
    res.send(result);
  });
});

app.post("/userwinningvalidationfetch", (req, res) => {
  var sql =
    "select tblresultmap.id, tbllotterymaster.txtLotteryname, date_format(tbllotterymaster.txtCreatedOn, '%Y-%m-%d') as EntryDate, tblusers.id, tblresultmap.txtMatchingcount, tblresultmap.txtPrizemoney from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblusers on tblunit.refUser = tblusers.id where tblusers.id='3' ;";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
app.post("/providerlotterynamewinnings", (req, res) => {
  var sql =
    "select tblresultmap.id as resultid, tbllotterymaster.txtLotteryName, date_format(tbllotterymaster.txtCreatedOn, '%Y-%m-%d') as EntryDate, tblusers.id as userid, tblresultmap.txtPrizemoney as TotalPrize, tblprovider.txtProvidername from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tblusers on tblunit.refUser = tblusers.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id where tblusers.id='3';";
  con.query(sql, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.send(result);
  });
});
//-------<
//unitsold-->
app.post("/admindash_fetchall", (req, res) => {
  let sql =
    "SELECT lm.txtLotteryname,tp.txtProvidername,lm.txtCost,COUNT(tu.refUser) AS unitsold,COUNT(tu.refUser) AS purchase,COUNT(tu.refUser) * lm.txtCost AS totalcost,lm.txtCost + lm.txtAdminChargeperUnit AS total,(COUNT(tu.refUser) * lm.txtCost) - (lm.txtCost + lm.txtAdminChargeperUnit) AS balance,((COUNT(tu.refUser) * lm.txtCost) - (lm.txtCost + lm.txtAdminChargeperUnit)) / lm.txtCost AS adminticket FROM tblunit tu LEFT JOIN  tblusers tusr ON tu.refUser = tusr.id LEFT JOIN tbllotterymaster lm ON tu.refLotterymaster = lm.id LEFT JOIN tblprovider tp ON tp.id = lm.refProvider WHERE tusr.refUserRole = 2 GROUP BY refLotterymaster; ";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    res.send(result);

    console.log(result);
  });
});
app.post("/admindash_adminpurchase", (req, res) => {
  let sql =
    "SELECT lm.txtLotteryname,tp.txtProvidername,COUNT(tu.refUser) AS adminsold FROM tblunit tu left JOIN tblusers tusr ON tu.refUser = tusr.id left JOIN tbllotterymaster lm ON tu.refLotterymaster = lm.id left JOIN tblprovider tp ON tp.id = lm.refProvider WHERE tusr.refUserRole = 1 GROUP BY refLotterymaster";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    res.send(result);
    // console.log(result);
  });
});
//--<
app.post("/purchasedloryfetch", (req, res) => {
  let userid = req.body.userid;
  let sql =
    "select tu.id ,tm.txtLotteryname,tu.txtLotteryNumber from tblunit tu left join tbllotterymaster tm on tu.refLotterymaster=tm.id where tu.refUser='" +
    userid +
    "' and tu.txtDeleteflag=0 and tu.txtPurchaseddate < tm.dtLotterydrawdate;";
  // res.send(sql)
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});
app.listen(8000, () => {
  console.log("listening on port");
});
