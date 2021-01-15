const { gql } = require("apollo-server");
const types = gql`
   type Food {
      id: ID!
      name: String
      description: String
      nutritions: Nutritions
   }
   type Nutritions {
      calories: String
      sugar: String
      salt: String
   }
`;
module.exports = types;