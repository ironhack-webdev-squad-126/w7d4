app.get('/', (req, res) => {
  const countries = require("./countries.json")
  res.json(countries)
})
