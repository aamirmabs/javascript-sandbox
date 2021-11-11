// // -----
// // FUNCTION SCOPE
// let channelName = `OK Developer`;

// function printChannelDetails() {
//   let channelSubs = 100000;

//   // variable is shadowed and a new value can be assigned in the scope of the function - it overwrites the value in the parent scope
//   let channelName = `Not OK Developer`;

//   console.log(`Name: `, channelName);
//   console.log(`Subs: `, channelSubs);
// }

// printChannelDetails();
// // Name:  OK Developer
// // Subs:  100000

// console.log(`Name: `, channelName);
// // Name:  OK Developer
// console.log(`Subs: `, channelSubs);
// // Uncaught ReferenceError: channelSubs is not defined
// // -----

// Promises
let count = 0;

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 5000) + 500;

  setTimeout(() => {
    count = count + 1;
    console.log(delay);
    if (delay < 1500) {
      success(`Your req${count} data recieved from ${url}`);
    } else {
      failure(`req${count} Connection failure`);
    }
  }, delay);
};

const handleSuccess = (msg) => {
  console.log(msg);
};

const handleFailure = (msg) => {
  console.log(msg);
};

fakeRequestCallback("google.com/", handleSuccess, handleFailure);
fakeRequestCallback("google.com/", handleSuccess, handleFailure);
fakeRequestCallback("google.com/", handleSuccess, handleFailure);
fakeRequestCallback("google.com/", handleSuccess, handleFailure);
fakeRequestCallback("google.com/", handleSuccess, handleFailure);
fakeRequestCallback("google.com/", handleSuccess, handleFailure);
