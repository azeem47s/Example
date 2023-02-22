import { Sequelize } from "sequelize";
 
const db = new Sequelize('expens', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;