import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from './routes/productRoute.js'
import path from 'path';
dotenv.config();

const port = process.env.PORT || 5001;
const app = express();
const __dirname = path.resolve();
app.use(express.json());

app.use("/api/products",productRoute)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
