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
