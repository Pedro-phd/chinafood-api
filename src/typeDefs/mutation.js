const { gql } = require("apollo-server");
const mutation = gql`
   type Mutation {
      createFood(food: FoodInput): Food
      updateFood(id: String, fruit: FoodInput): Food
      deleteFood(id: String): Food
   }
   input FoodInput {
        name: String
        description: String
        nutritions: NutritionsInput
   }
   input NutritionsInput {
        calories: String
        sugar: String
        salt: String
   }
`;
module.exports = mutation;