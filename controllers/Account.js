import db1 from '../config/Database.js'; 
export const getAllAccount = async (req, res) => {
    let q3 = "select *  from bacc";
  let data = await db1.query(q3);
  //  console.log("select distinct standard from students");

  res.send(data);
    
}
 
export const getAccountById = async (req, res) => {
    let q3 = `select *  from bacc where id='${req.params.id}'`;
    let data = await db1.query(q3);
    //  console.log("select distinct standard from students");
  //console.log(data);
    res.send(data);
}
 
export const createAccount = async (req, res) => {
    let q3 = `insert into bacc (bank,balance) value('${req.body.bank}','${req.body.balance}')`;
    let re = await db1.query(q3);
    //console.log(re.insert_id);
    //res.send(`${re.insert_id}`)
  
    res.send(`${re.insert_id}`);   
}
 
export const updateAccount = async (req, res) => {
  let q3 = `update bacc set bank='${req.body.bank}',balance='${req.body.balance}' where id=${req.params.id}`;
  let re = await db1.query(q3);
  //console.log(re.insert_id);
  //   //res.send(`${re.insert_id}`)

  res.send(`${re.insert_id}`);
}
 
export const deleteAccount = async (req, res) => {
    let q3 = `delete  from bacc where id='${req.params.id}'`;
  let data = await db1.query(q3);
    //req.params.id
    res.json({
        "message": "Account Deleted"
    });

}