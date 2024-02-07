const mongoose = require("mongoose");



let shopinglist_schema= mongoose.Schema(
    {
        name:{type: String, required:true},
        price:{type: Number, required:true},
        quantity:{type: Number, required:true}
    }
)

let shopinglistmodel = mongoose.model.shopinglisttable || mongoose.model("shopinglisttable", shopinglist_schema)

module.exports = shopinglistmodel  