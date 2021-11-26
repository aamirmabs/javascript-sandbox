const express = require(`express`);
const path = require(`path`);
const { v4: uuid } = require("uuid");

// using express
// ----------
const app = express();
const port = 3000;

// serving static file assets from /public
app.use(express.static(path.join(__dirname, `public`)));

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

// comments with restful api

// Our fake database:
let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

// GET /comments - list all comments
// POST /comments/ - create a new comment
// GET /comments/:id - get a single comment (using ID)
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - destroy one comment

// GET /comments/ - list all comments
app.get(`/comments`, (req, res) => {
  // res.send(`GET: /comments`);
  res.render(`comments/index`, { allComments: comments });
});

// POST /comments/ - create a new comment
app.post(`/comments`, (req, res) => {
  res.send(`POST: /comments`);
});

// GET /comments/:id - get a single comment (using ID)
app.get(`/comments/:id`, (req, res) => {
  const { id } = req.body;
  res.send(`: /comments/:id ${id}`);
});

// PATCH /comments/:id - update one comment
app.patch(`/comments/:id`, (req, res) => {
  const { id } = req.body;
  res.send(`PATCH: /comments/:id ${id}`);
});

// DELETE /comments/:id - destroy one comment
app.delete(`/comments/:id`, (req, res) => {
  const { id } = req.body;
  res.send(`DELETE: /comments/:id ${id}`);
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
