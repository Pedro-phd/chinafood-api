const Food = require("../models/Food");
const foodResolver = {
   Query: {
      food() {
         return Food.find();
      },
      food(_, { id }) {
         return Food.findById(id);
      },
   },
   Mutation: {
      createFood(_, { food }) {
         const newFood = new Food(food);
         return newFood.save();
      },
      updateFood(_, { id, food }) {
         return Food.findByIdAndUpdate(id, food, {
            new: true,
            useFindAndModify: false,
         });
      },
      deleteFood(_, { id }) {
         return Food.findByIdAndRemove(id, {
            useFindAndModify: false,
         });
      },
   },
};
module.exports = foodResolver;