let imgIndex = 1;
showImg(imgIndex);

function plusImg(n) {
  showImg(imgIndex += n);
}

function currentImg(n) {
  showImg(imgIndex = n);
}

function showImg(n) {
  let i;
  let imgs = document.getElementsByClassName("myImgs");
  let dots = document.getElementsByClassName("dot");
  if (n > imgs.length) {
    imgIndex = 1;
  }
  if (n < 1) {
    imgIndex = imgs.length;
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[imgIndex - 1].style.display = "block";
  dots[imgIndex - 1].className += " active";
}