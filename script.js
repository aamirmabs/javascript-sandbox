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

fakeRequestPromise(`google.com`)
  .then(() => {
    console.log(`1: Success`);

    // sending second request
    fakeRequestPromise(`facebook.com`)
      .then(() => {
        console.log(`2: Success`);

        // sending third request
        fakeRequestPromise(`instagram.com`)
          .then(() => {
            console.log(`3: Success`);
          })
          .catch(() => {
            console.log(`3: Failure`);
          });
      })
      .catch(() => {
        console.log(`2: Failure`);
      });
  })
  .catch(() => {
    console.log(`1: Failure`);
  });
