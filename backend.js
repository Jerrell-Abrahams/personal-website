const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("index")
})


app.listen(3000 || "192.168.100.4", () => {
  console.log(`Example app listening on port ${port}`)
})