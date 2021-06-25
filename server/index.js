const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname, '../public/tictacjs.html'));
// });
// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname, '../public/styles.css'));
// });

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})