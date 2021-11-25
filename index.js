const express = require(`express`);
const path = require(`path`);

// using express
// ----------
const app = express();
const port = 3000;

// making express use ejs as the view engine
app.set(`view engine`, `ejs`);

// making express use /views directory
// default value of path is  process.cwd() + "/views"
// app.set(`views`, process.cwd() + "/views");
app.set(`views`, path.join(__dirname, "/views"));

// response to home page request
app.get(`/`, (req, res) => {
  // res.send("GET:/ response");

  // render the ejs template as response
  // .ejs is not needed if view engine is set to ejs
  // res.render(`home.ejs`);
  res.render(`home`);
});

// passing values as parameters to ejs template and rendering them
app.get(`/random`, (req, res) => {
  // let random = Math.floor(Math.random() * 10) + 1;
  // res.render(`random`, { randomNumber: random });

  let person = {
    name: `Alex`,
    age: 35,
    gender: 1,
  };
  res.render(`random`, { person });
});

// rendering a subreddit template and using the route parameter id there
app.get(`/r/:subreddit`, (req, res) => {
  const { subreddit } = req.params;
  const test = { valueA: 10, valueB: 20 };
  res.render(`subreddit`, { subreddit, test });
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
