# ChinaFood api

Use ```yarn start``` or ```npm start``` for start api.
Open the **Playground** in http://localhost:4000/

### Examples

~~~Mutation

ˋˋˋ
mutation createFood {
  createFood(food: { name: "lasanha",description:"Deliciosa e saudavel", nutritions: { sugar: "2.3", calories: "52", salt:"23"}}) {
    name
    description
    nutritions {
      sugar
      calories
      salt
    }
  }
}
ˋˋˋ

~~~

~~~Query

ˋˋˋ
query getFood {
  food {
    id
    name
    description
    nutritions {
      sugar
      calories
      salt
    }
  }
}
ˋˋˋ

~~~


>Api com fins de estudo em GRAPHQL
