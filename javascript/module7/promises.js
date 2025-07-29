//promises
//1.pending
//2.fulfiled/resolved
//3.rejected
//4.settled

//how to produce a promise

let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 5;

  setTimeout(() => {
    if (a == b) {
      resolve;
    } else {
      reject;
    }
  }, 2000);
});
