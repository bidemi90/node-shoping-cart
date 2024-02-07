const express = require("express");
const {viewlist,posteditlist,postlist,editlist,deleteonelist} = require("../controllers/listcontroller")

const listroutes=express.Router()

listroutes.get("/listpage",viewlist)
listroutes.post("/listpage",postlist)
listroutes.post("/shopinglistedit",editlist)
listroutes.post("/listpageedit",posteditlist)
listroutes.post("/deleteonelist",deleteonelist)

module.exports=listroutes