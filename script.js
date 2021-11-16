// Promises

// using a custom fakeRequestCallback function to emulate the delay in getting a response from a server
// let count = 0;

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 2000) + 500;

//   setTimeout(() => {
//     count = count + 1;
//     console.log(delay);
//     if (delay < 1500) {
//       success(`Your req${count} data recieved from ${url}`);
//     } else {
//       failure(`req${count} Connection failure`);
//     }
//   }, delay);
// };

// const handleSuccess = (msg) => {
//   console.log(msg);
// };

// const handleFailure = (msg) => {
//   console.log(msg);
// };

// // using previously defined callback functions
// // fakeRequestCallback("google.com/", handleSuccess, handleFailure);

// // using callback functions that are defined here
// fakeRequestCallback(
//   "google.com/page1",
//   function (response) {
//     console.log(response);

//     // second callback
//     fakeRequestCallback(
//       `google.com/page2`,
//       function (response) {
//         console.log(response);

//         // third callback
//         fakeRequestCallback(
//           `google.com/page3`,
//           function (response) {
//             console.log(response);
//           },
//           function (failure) {
//             console.log(failure);
//           }
//         );
//       },
//       function (failure) {
//         console.log(failure);
//       }
//     );
//   },
//   function (failure) {
//     console.log(failure);
//   }
// );

// using a promise to emulate the request callback

const fakeRequestPromise = (url) => {
  console.log(`==========`);
  console.log(`Requested URL is: ${url}`);

  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 500;

    setTimeout(() => {
      // console.log(delay);
      if (delay < 2000) {
        resolve(`Your data recieved from ${url}`);
        console.log(`Data recieved in ${delay} ms`);
      } else {
        console.log(`ERR: Data not recieved`);
        reject(`Connection failure`);
      }
    }, delay);
  });
};

// nesting newer requests inside the older requests
// each nested request has its own customized error messages
// fakeRequestPromise(`google.com`)
//   .then(() => {
//     console.log(`1: Success`);

//     // sending second request
//     fakeRequestPromise(`facebook.com`)
//       .then(() => {
//         console.log(`2: Success`);

//         // sending third request
//         fakeRequestPromise(`instagram.com`)
//           .then(() => {
//             console.log(`3: Success`);
//           })
//           .catch(() => {
//             console.log(`3: Failure`);
//           });
//       })
//       .catch(() => {
//         console.log(`2: Failure`);
//       });
//   })
//   .catch(() => {
//     console.log(`1: Failure`);
//   });

// using the fakeRequest with linear then() statements
// fakeRequestPromise(`google.com`)
//   .then(() => {
//     console.log(`Resolved: google.com`);

//     // return a new promise so that is used in the next .then() callback
//     return fakeRequestPromise(`facebook.com`);
//   })
//   .then(() => {
//     console.log(`Resolved: facebook.com`);

//     // return a new promise so that is used in the next .then() callback
//     return fakeRequestPromise(`instagram.com`);
//   })
//   .then(() => {
//     console.log(`Resolved: instagram.com`);

//     console.log(`ALL REQUESTS RESOLVED`);
//   })
//   .catch(() => {
//     console.log(`ERROR occured in a request`);
//   });

// creating a Promise to change the background of the body
const bgChangePromise = (color, delay) => {
  const returnedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Changing to ${color}`);
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
  // console.log(returnedPromise);
  return returnedPromise;
};

bgChangePromise("violet", 1000)
  .then(() => bgChangePromise("indigo", 1000))
  .then(() => bgChangePromise("blue", 1000))
  .then(() => bgChangePromise("green", 1000))
  .then(() => bgChangePromise("yellow", 1000))
  .then(() => bgChangePromise("orange", 1000))
  .then(() => bgChangePromise(`red`, 1000));
