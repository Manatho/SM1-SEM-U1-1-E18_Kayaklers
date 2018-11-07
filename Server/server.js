var express = require("express");
var express_graphql = require("express-graphql");
const schema = require("./data/schema");

const onWaterProcessor = require("./processing/onWater");

const port = 4000;

var app = express();

app.get("/test", async function(req, res) {
  const test = onWaterProcessor.process([]);
  console.log(test)
  res.send('testing')
});

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, () =>
  console.log(
    "Express GraphQL Server Now Running On https://kayaklers.localtunnel.me/graphql"
  )
);
