const express = require(`express`);

// using express
// ----------
const app = express();
const port = 3000;

// app.use() runs a callback when a request is recieved
// no matter where the request is (main page, sub page etc.)
app.use(() => {
  let today = new Date();
  let time =
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? `0` : ``) +
    today.getMinutes() +
    ":" +
    (today.getSeconds() < 10 ? `0` : ``) +
    today.getSeconds();

  console.log(`New request recieved. ${time}`);
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
