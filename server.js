import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from './Routes/contact.js';

import {config} from "dotenv";

const app = express();

app.use(bodyParser.json());

// .env setup

config({path:".env"});

mongoose.connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course"
}).then(() => console.log("mgdb connected")).catch((err) => console.log(err));

// home route
app.get("/", (req, res) => {
    res.json({ message: "This is home route working" });
  });

  // user Router
app.use("/api/user",userRouter);

app.use("/api/user",userRouter);

app.use("/api/contact",contactRouter);


const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));