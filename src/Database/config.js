import { Sequelize } from "sequelize";


const sequelize = new Sequelize('postgresql://access_db_5p78_user:7l8zTZZBkF4YZ6xNAkH972Va63nuGIg1@dpg-dahun23m8hqs73df79sg-a/access_db_5p78', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize