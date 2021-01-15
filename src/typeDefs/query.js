const { gql } = require("apollo-server");
const query = gql`
   type Query {
      foods: [Food]
      food(id: ID!): Food
   }
`;
module.exports = query;