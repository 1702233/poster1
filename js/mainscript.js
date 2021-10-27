var slideIndex = 0;
var slideIndex2 = 0;
carouselpic();
carousellove();

function carouselpic() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carouselpic, 3000); // Change image every 2 seconds
}

function carousellove() {
  var i;
  var x = document.getElementsByClassName("myLove");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1} 
  x[slideIndex2-1].style.display = "block"; 
  setTimeout(carousellove, 4000); // Change image every 2 seconds
}