document.getElementById("pic1").style.display = "none";
document.getElementById("pic2").style.display = "none";
document.getElementById("pic3").style.display = "none";
document.getElementById("pic4").style.display = "none";

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function myFunction1() {
  var x = document.getElementById("pic1");
  var btns = document.getElementById("btns");
  if (x.style.display === "none") {
    x.style.display = "block";
    btns.style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    sleep(15000).then(() => {
      x.style.display = "none";
      btns.style.display = "block";
      document.getElementById("btn1").style.display = "block";
      document.getElementById("btn2").style.display = "block";
      document.getElementById("btn3").style.display = "block";
      document.getElementById("btn4").style.display = "block";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("pic2");
  if (x.style.display === "none") {
    x.style.display = "block";
    btns.style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    sleep(15000).then(() => {
      x.style.display = "none";
      btns.style.display = "block";
      document.getElementById("btn1").style.display = "block";
      document.getElementById("btn2").style.display = "block";
      document.getElementById("btn3").style.display = "block";
      document.getElementById("btn4").style.display = "block";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("pic3");
  if (x.style.display === "none") {
    x.style.display = "block";
    btns.style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    sleep(15000).then(() => {
      x.style.display = "none";
      btns.style.display = "block";
      document.getElementById("btn1").style.display = "block";
      document.getElementById("btn2").style.display = "block";
      document.getElementById("btn3").style.display = "block";
      document.getElementById("btn4").style.display = "block";
  });
  } else {
    x.style.display = "none";
  }
}

function myFunction4() {
  var x = document.getElementById("pic4");
  if (x.style.display === "none") {
    x.style.display = "block";
    btns.style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    sleep(15000).then(() => {
      x.style.display = "none";
      btns.style.display = "block";
      document.getElementById("btn1").style.display = "block";
      document.getElementById("btn2").style.display = "block";
      document.getElementById("btn3").style.display = "block";
      document.getElementById("btn4").style.display = "block";
  });
  } else {
    x.style.display = "none";
  }
}