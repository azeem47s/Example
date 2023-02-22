import db1 from "../config/Database.js";
export const getAllTransaction = async (req, res) => {
    let q3 = `select *  from transact`;
  let data = await db1.query(q3);
  //  console.log("select distinct standard from students");
  res.send(data);
    
}

export const getAtp = async (req, res) => {

  console.log('salman');
  
}
 
export const getTransactionById = async (req, res) => {
    let q3 = `select *  from transact where id='${req.params.id}'`;
    let data = await db1.query(q3);
    //  console.log("select distinct standard from students");
  //console.log(data);
    res.send(data);
}
 
export const createTransaction = async (req, res) => {

  console.log(req.body.ttype)
let ttype1='';
if(req.body.ttype=='Credit'){
  ttype1='credit';
}
else{
  ttype1='debit';
}

   let q3 = `insert into transact (date,description,${ttype1},balance,account,bcode,status) 
   value('${req.body.date}','${req.body.description}','${req.body.amount}','${req.body.rbal}','${req.body.account}','${req.body.bcode}','${req.body.status}')`;
    let re = await db1.query(q3);
    //console.log(re.insert_id);
    if (re.insert_id)
    {
      let q4=`update bacc set balance='${req.body.rbal}' where id='${req.body.bcode}'`
      let re = await db1.query(q4);
      res.send(`Transaction Successfull`);
    }
    else{
      res.send(`Transaction Failed`);
      
    }
  //console.log('salman123')
   // res.send(`${re.insert_id}`);   
}
 
export const updateTransaction = async (req, res) => {
  let q3 = `update transact set date='${req.body.date}',description='${req.body.description}',credit='${req.body.credit}',debit='${req.body.debit}',balance='${req.body.balance}',account='${req.body.account}',status='${req.body.status}' where id=${req.params.id}`;
  let re = await db1.query(q3);
  //console.log('salman');
  //   //res.send(`${re.insert_id}`)  

  res.send(`${re.insert_id}`);
}
 
 
export const deleteTransaction = async (req, res) => {
  let q1=`select * from transact where id='${req.params.id}'`;
  let trans= await db1.query(q1);
  //console.log(trans)
  let q2=`select * from bacc where id='${trans[0].bcode}'`;
  let bacc= await db1.query(q2);
  //console.log('bank data')
 // console.log(bacc)
 let ubal=0
if(trans[0].credit){
  ubal=parseInt(bacc[0].balance)-parseInt(trans[0].credit)

}
else{
  ubal=parseInt(bacc[0].balance)+parseInt(trans[0].debit)

}
let q3=`update bacc set balance='${ubal}' where id='${trans[0].bcode}'`
let ubl=await db1.query(q3)
if(ubl.affectedRows){
  let q4=`delete from transact where id='${req.params.id}'`;
  let del=await db1.query(q4)
  res.json({
           "message": "Transaction Deleted"
       });
}
//console.log(ubl.affectedRows)
  //   let q3 = `delete  from transact where id='${req.params.id}'`;
  // let data = await db1.query(q3);
  //   //req.params.id
  //   res.json({
  //       "message": "Transaction Deleted"
  //   });

}
