const express = require("express");
const app = express();
const ejs = require("ejs");
const bodypaser = require("body-parser");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extends: true }));
require("dotenv").config()
const listroutes=require("./routes/listroutes")

const uri = process.env.MONGOODB_URI

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri).then((result) => {
      console.log("new mongoose shoping list");
    });
  } catch (error) {
    console.log(error);
  }
};
connect();

app.use("/listroutes",listroutes)



let port = process.env.port || 0012 

app.listen(port, () => {
  console.log("shoping list server is no fire");
});
