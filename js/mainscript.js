document.getElementById("pic1").style.display = "none";
document.getElementById("pic2").style.display = "none";
document.getElementById("pic3").style.display = "none";
document.getElementById("pic4").style.display = "none";

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function myFunction1() {
  var x = document.getElementById("pic1");
  if (x.style.display === "none") {
    x.style.display = "block";
    sleep(15000).then(() => {
      x.style.display = "none";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("pic2");
  if (x.style.display === "none") {
    x.style.display = "block";
    sleep(15000).then(() => {
      x.style.display = "none";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("pic3");
  if (x.style.display === "none") {
    x.style.display = "block";
    sleep(15000).then(() => {
      x.style.display = "none";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction4() {
  var x = document.getElementById("pic4");
  if (x.style.display === "none") {
    x.style.display = "block";
    sleep(15000).then(() => {
      x.style.display = "none";
  });
  } else {
    x.style.display = "none";
  }
}