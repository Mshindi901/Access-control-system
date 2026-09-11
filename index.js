import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './src/Database/connect.js'
import FaceRoutes from './src/face/routes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', FaceRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Running`);
})