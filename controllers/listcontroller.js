const shopinglistmodel= require("../models/listmodel")


const viewlist =async (req,res)=>{
    const shopinglist = await shopinglistmodel.find({});
  
    if (shopinglist.length === 0) {
      console.log("No documents found.");
    } else {
      console.log("Documents found:", shopinglist);
      console.log();
    }
    res.render("listpage",{shopinglist})
}

const postlist=(req,res)=>{
    // res.render("listpage")
    console.log(req.body);
    let data=req.body
    let filllist=new shopinglistmodel(data)
    filllist.save().then((result) =>{
        console.log(result);
        res.redirect("/listroutes/listpage")
    } )
}

const editlist=async (req,res)=>{
    // res.render("listpage")
    console.log(req.body);
    let data=req.body
     let _id=data._id
    const oneshopinglist = await shopinglistmodel.find({_id:_id});
  
    if (oneshopinglist) {
        console.log("Documents found:", oneshopinglist);
        res.render("editonelist",{oneshopinglist})
    } else {
      console.log("No documents found.");
    }
}
const posteditlist=async (req, res) => {
    console.log(req.body);
  
    const _id = req.body._id; // Assuming the ID is sent in the request body
  
    console.log(_id);
  
    const data = req.body;
  
    try {
      const oneshopinglist = await shopinglistmodel.findByIdAndUpdate(
        _id,
        data, // Use the 'data' variable directly, without wrapping it in curly braces
        { new: true } // Add the 'new' option to return the updated document
      );
  
      console.log(oneshopinglist);
      res.redirect("/listroutes/listpage");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  }

  const deleteonelist=async (req,res)=>{
    // res.render("listpage")
    console.log(req.body);
    let data=req.body
    let _id=data._id
    const oneshopinglist = await shopinglistmodel.findByIdAndDelete({_id:_id});
    res.redirect("/listroutes/listpage")
}
module.exports ={viewlist,posteditlist,postlist,editlist,deleteonelist}