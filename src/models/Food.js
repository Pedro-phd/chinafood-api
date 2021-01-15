const mongoose = require("mongoose");
const FoodSchema = mongoose.Schema({
   name: String,
   description:String,
   nutritions: {
      sugar: String,
      calories: String,
      salt:String,
   },
});
module.exports = mongoose.model("Food", FoodSchema);