import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Acc = db.define('bacc',{
    bank:{
        type: DataTypes.STRING
    },
    balance:{
        type: DataTypes.DOUBLE
    }
    
},{
    freezeTableName: true
});
 
export default Acc;