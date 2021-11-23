const express = require(`express`);

// using express
// ----------
const app = express();
const port = 3000;

// making express use ejs as the view engine
app.set(`view engine`, `ejs`);
// making express use /views directory (by default)
app.set(`views`, process.cwd() + "/views");

// response to home page request
app.get(`/`, (req, res) => {
  // res.send("GET:/ response");

  // render the ejs template as response
  res.render(`home.ejs`);
});

// app listening to requests on port
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// ==========

// section
// ==========
// ----------
// ==========

// section
// ==========
// ----------
// ==========
