const express = require(`express`);

// using express
// ----------
const app = express();
const port = 3000;

// ----------
// // app.use() runs a callback when a request is recieved
// // no matter where the request is (main page, sub page etc.)
// app.use((req, res) => {
//   // all statements here will run whenever a request to any URL is recieved
//   console.log(`New request recieved.`);

//   // res.send("Response being sent.");
//   res.send("<h1>Response as a heading being sent.</h1>");
// });

// ----------
// routing in express - creating these routes and responses
// /cats => 'meow'
// /dogs => 'woof'
// / => home page
// we will use app.get(`${/path}`, (req, res) => { callback })
app.get(`/`, (req, res) => {
  res.send(`GET:/ page requested`);
});

app.get(`/cats`, (req, res) => {
  res.send(`GET:/cats page requested`);
});
app.post(`/cats`, (req, res) => {
  res.send(`POST:/cats page requested`);
});

app.get(`/dogs`, (req, res) => {
  res.send(`GET:/dogs page requested`);
});
app.post(`/dogs`, (req, res) => {
  res.send(`POST:/dogs page requested`);
});

// ----------
// express path parameters
app.get(`/r/:subreddit`, (req, res) => {
  const { subreddit } = req.params;
  // console.log(req.params);
  res.send(`Browsing the ${subreddit.toUpperCase()} subreddit`);
});

app.get(`/r/:subreddit/:postID`, (req, res) => {
  const { subreddit, postID } = req.params;
  // console.log(req.params);
  res.send(
    `Browsing the ${postID.toUpperCase()} post in ${subreddit.toUpperCase()} subreddit`
  );
});

// starting a server that is listening for requests on ${port}
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// ==========

// section
// ==========
// ----------
// ==========
