function generateRanNumber() {
  const yourName = prompt("Enter your name");
  const frName = prompt("Enter your Friend name");

  if (!yourName || !frName) {
    alert("Please input your name and your friend name");
    return;
  }
  const rnum = Math.random() * 100;

  if (rnum > 50) {
    console.log(
      Math.ceil(rnum) +
        " % " +
        yourName +
        " and " +
        frName +
        " are best friend 👌👌"
    );
  } else {
    console.log(
      Math.ceil(rnum) + " % " + yourName + " and " + frName + " are just friend"
    );
  }
}

// recurssion ...........

// function printMsg(n) {
//   if (n < 0) {
//     return;
//   }

//   console.log("hello");

//   n--;

//   printMsg(n);
// }

// printMsg(5);

// perfect square ..........

// function perSqr(num) {
//   for (let i = 1; i < num; i++) {
//     if (i ** 2 == num) {
//       console.log(`${i} ka perfect sqr hai`);
//       return;
//     }
//   }

//   console.log("perfect sqr nahi hai");
// }

// perSqr(100);

// find perfect sqr .............. second method..

// function findSqr (num){

//   if()

// }
