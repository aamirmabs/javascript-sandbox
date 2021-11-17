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
// const bgChangePromise = (color, delay) => {
//   const returnedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
//   return returnedPromise;
// };

// bgChangePromise("violet", 1000)
//   .then(() => bgChangePromise("indigo", 1000))
//   .then(() => bgChangePromise("blue", 1000))
//   .then(() => bgChangePromise("green", 1000))
//   .then(() => bgChangePromise("yellow", 1000))
//   .then(() => bgChangePromise("orange", 1000))
//   .then(() => bgChangePromise(`red`, 1000));

// asynchronous functions

// async functions always return a promise implicitly
// whenever you 'return value' from the function
// it is the equivalent of 'resolve(value)'
// you reject the promise by throwing an error yourself
// or some other error occurs in the code

// synchronous functions: syntax and functionality
// synchronous functions: return values
// asynchronous functions: syntax and functionality
// asynchronous functions: return values
// 2 parts: async and await keywords
// typical usage scenario
// sample scenario: weather app
// sample scenario: fetching assets

// # synchronous functions: syntax and functionality
// ================
// function syncPrinter(msg) {
//   console.log("Message recieved: " + msg);
//   // return undefined;
// }

// const syncArrowPrinter = (msg) => {
//   console.log("Message recieved: " + msg);
//   // return undefined;
// };

// syncPrinter("Message 1");
// syncArrowPrinter("Message 2");
// ================

// # synchronous functions: return values
// ================
// console.log(syncPrinter("Message 1"));
// console.log(syncArrowPrinter("Message 2"));
// ================

// # asynchronous functions: syntax and functionality
// ================
// async function asyncPrinter(msg) {
//   console.log("Message recieved: " + msg);
//   // return undefined;
// }

// const asyncArrowPrinter = async (msg) => {
//   console.log("Message recieved: " + msg);
//   // clg("Error");
//   // return undefined;
// };

// asyncPrinter("Message 3");
// asyncArrowPrinter("Message 4");
// ================

// # asynchronous functions: return values
// ================
// console.log(asyncPrinter("Message 3"));
// console.log(asyncArrowPrinter("Message 4"));
// ================

// # understanding promises in detail before moving on
// ================
// const delayPromise = (msg, delay) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${delay}ms delay message: ${msg}`);
//       // reject("This value is returned on reject()");
//       resolve("This value is returned on resolve()");
//     }, delay);
//   });

//   return promise;
// };

// const myPromise = delayPromise(`Promise message!`, 1000);
// console.log(myPromise);

// // ----------------
// // understanding .then() using a timer
// // using a helper function to print a number every second
// const printTimer = () => {
//   let counter = 0;
//   let timer = setInterval(() => {
//     counter = counter + 1;
//     validateTimer();
//   }, 1000);

//   const validateTimer = () => {
//     console.log(counter);
//     if (counter === 10) clearInterval(timer);
//   };
// };
// printTimer();

// // each promise is executed at the same time
// delayPromise(`1000 message!`, 1000);
// delayPromise(`2000 message!`, 2000);
// delayPromise(`5000 message!`, 5000);

// // using .then() we can line up promises to run after each other
// delayPromise(`1000 message!`, 1000)
//   .then(() => delayPromise(`2000 message!`, 2000))
//   .then(() => delayPromise(`5000 message!`, 5000));
// ================

// # using the reject method on the promise
// ================
// const fetchDataFrom = (domain) => {
//   console.log("Initiating connection to", domain);

//   const promise = new Promise((resolve, reject) => {
//     // set a delay value randomly
//     const delay = Math.floor(Math.random() * 5000) + 1000;
//     // console.log(`${domain} ${delay}ms delay`);

//     // reject if delay greater than 3000 ms
//     if (delay < 3000) {
//       setTimeout(() => {
//         console.log("Connection successful. Data recieved from:", domain);
//         resolve("Connection successful to " + domain);
//       }, delay);
//     } else {
//       // console.log("REJECT: Connection Failed to " + domain);
//       const rejectMsg = "REJECT: Connection Failed to " + domain;
//       reject(rejectMsg);
//     }
//   });

//   return promise;
// };

// fetchDataFrom("facebook.com")
//   .then(() => fetchDataFrom("twitter.com"))
//   .then(() => fetchDataFrom("instagram.com"))
//   .then(() => fetchDataFrom("reddit.com"))
//   .then(() => fetchDataFrom("github.com"))
//   .catch((e) => {
//     console.log(`Error (${e})`);
//   });
// ================

// # 2 parts: async and await keywords
// ================
// // using a simple function to change the background color
// // of the body after a delay
// const delayedColorChange = async (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// const changeColors = async () => {
//   await delayedColorChange("bisque", 2000);
//   await delayedColorChange("cornflowerblue", 2000);
//   await delayedColorChange("darkseagreen", 2000);
//   await delayedColorChange("darksalmon", 2000);
//   await delayedColorChange("gold", 2000);
// };

// changeColors();

// ----------
// // modifying the delayedColorChange function to reject
// // if delay is undefined
// const delayedColorChange = async (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay === undefined) {
//         reject("ERROR: delay undefined");
//       } else {
//         document.body.style.backgroundColor = color;
//         resolve("SUCCESS: background color has been changed");
//       }
//     }, delay);
//   });
// };

// const changeColors = async () => {
//   await delayedColorChange("bisque", 2000);
//   await delayedColorChange("cornflowerblue", 2000);
//   await delayedColorChange("darkseagreen");
//   // await delayedColorChange("darkseagreen", 2000);
//   await delayedColorChange("darksalmon", 2000);
//   await delayedColorChange("gold", 2000);
// };

// changeColors();

// ----------
// modifying the delayedColorChange function to reject with status codes
const delayedColorChange = async (color, delay) => {
  return new Promise((resolve, reject) => {
    const permittedColors = [
      "violet",
      "indigo",
      "blue",
      "green",
      "yellow",
      "orange",
      "red",
    ];

    setTimeout(() => {
      if (delay === undefined) {
        reject({
          status: false,
          statusCode: 478,
          message: `REJECT: Delay undefined`,
        });
      } else if (typeof color !== "string") {
        reject({
          status: false,
          statusCode: 456,
          message: `REJECT: Color is not a string`,
        });
      } else if (color === undefined) {
        reject({
          status: false,
          statusCode: 478,
          message: `REJECT: Color undefined`,
        });
      } else if (!permittedColors.includes(color)) {
        reject({
          status: false,
          statusCode: 432,
          message: `REJECT: Color not allowed in rainbow`,
        });
      } else {
        document.body.style.backgroundColor = color;
        resolve({
          status: true,
          statusCode: 200,
          message: `RESOLVED: Color changed to ${color}`,
        });
      }
    }, delay);
  });
};

// // using await to pause and wait for completion
// const rainbow = async () => {
//   console.log(await delayedColorChange(`violet`, 1000));
//   console.log(await delayedColorChange(`indigo`, 1000));
//   // console.log(await delayedColorChange(50, 1000));
//   // console.log(await delayedColorChange(undefined, 1000));
//   // console.log(await delayedColorChange(`white`, 1000));
//   console.log(await delayedColorChange(`blue`, 1000));
//   console.log(await delayedColorChange(`green`, 1000));
//   console.log(await delayedColorChange(`yellow`, 1000));
//   console.log(await delayedColorChange(`orange`, 1000));
//   console.log(await delayedColorChange(`red`, 1000));
// };
// rainbow();

// ----------
// using try catch blocks to manage errors
const rainbow = async () => {
  try {
    console.log(`=== In try block ===`);
    await delayedColorChange(`violet`, 1000);
    await delayedColorChange(`indigo`, 1000);
    // await delayedColorChange(50, 1000);
    // await delayedColorChange(undefined, 1000);
    // await delayedColorChange(`white`, 1000);
    await delayedColorChange(`blue`, 1000);
    await delayedColorChange(`green`, 1000);
    await delayedColorChange(`yellow`, 1000);
    await delayedColorChange(`orange`, 1000);
    await delayedColorChange(`red`, 1000);
    console.log(`=== RAINBOW COMPLETED SUCCESSFULLY ===`);
  } catch (error) {
    console.log(`=== In catch block ===`);
    console.log(error);
  }
};
rainbow();

// ================

// # typical usage scenario
// ================
// ================

// # sample scenario: weather app
// ================
// ================

// # sample scenario: fetching assets
// ================
// ================
