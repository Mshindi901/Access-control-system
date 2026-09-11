import sequelize from "./config.js";


export const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database Connected');
        await sequelize.sync({alter: true});
        console.log('Models Synchronized');
    } catch (error) {
        console.error(`Failed to connect to Database ${error}`);
        return null;
    }
}