import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes } = Sequelize;
 
const TransModel = db.define('transact',{
    date:{
        type: DataTypes.date
    },
    description:{
        type: DataTypes.STRING
    },
    credit:{
        type: DataTypes.DOUBLE
    },
    debit:{
        type: DataTypes.DOUBLE
    },
    balance:{
        type: DataTypes.DOUBLE
    },
    account:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default TransModel;