let section = document.querySelector("header .navbar");

let btn = document.querySelector(".icon");
let navs = document.querySelector(".navs");

let nums = document.querySelectorAll(".rate .box h1");

let imgs = document.querySelectorAll(".gallery .image img");
let cnt = document.querySelector(".gallery .box .count");
let box = document.querySelector(".gallery .box");
let testImg = document.querySelector(".gallery .box img");
let right = document.querySelector(".gallery .right");
let left = document.querySelector(".gallery .left");
let exit = document.querySelector(".gallery .exit");

window.onscroll = function () {
  section.classList.remove("pos");
  if (window.scrollY > 70) {
    section.classList.add("pos");
  }
};

/***********************************************************/

btn.onclick = function () {
  if (!btn.classList.contains("rotate")) {
    btn.classList.remove("reverse");
    btn.classList.add("rotate");
    btn.innerHTML = `<i class="fas fa-times"></i>`;
    navs.classList.add("active");
  } else {
    btn.classList.remove("rotate");
    btn.classList.add("reverse");
    btn.innerHTML = `<i class="fa fa-bars"></i>`;
    navs.classList.remove("active");
  }
};

/********************************************************* */

nums.forEach(function (num) {
  let goal = num.dataset.num;
  let count = setInterval(function () {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
});

/***************************************************************/

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    if (box.classList.contains("display")) {
      box.classList.remove("display");
    }
    testImg.src = this.src;
    cnt.textContent = this.dataset.count;

    right.onclick = function () {
      i++;
      if (i == imgs.length) {
        i = 0;
      }
      testImg.src = imgs[i].src;
      cnt.textContent = imgs[i].dataset.count;
    };

    left.onclick = function () {
      i = i - 1;
      console.log(i);
      if (i < 0) {
        i = 5;
      }
      testImg.src = imgs[i].src;
      cnt.textContent = imgs[i].dataset.count;
    };

    document.onkeydown = function (e) {
      if (e.key == "ArrowRight") {
        i++;
        if (i == imgs.length) {
          i = 0;
        }
        testImg.src = imgs[i].src;
        cnt.textContent = imgs[i].dataset.count;
      } else if (e.key == "ArrowLeft") {
        i = i - 1;
        if (i < 0) {
          i = 5;
        }
        testImg.src = imgs[i].src;
        cnt.textContent = imgs[i].dataset.count;
      }
    };
  };
}

/****************************************************/
exit.onclick = function () {
  if (!box.classList.contains("display")) {
    box.classList.add("display");
  }
};
