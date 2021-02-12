import { createResultData, createResultSearch } from "./structure/structure.js";
var pictureAnimated = true;
const log = document.getElementById("log");
let seh = document.getElementById("Search");
let sehbtn = document.getElementById("btnSearch");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let valuesearch = document.getElementById("valueSearch");
let all = document.getElementById("pa2");
seh.addEventListener("keypress", logKey);
sehbtn.addEventListener("click", btn_sh);
btn.addEventListener("click", azrty1);
btn1.addEventListener("click", azrty2);
let tyu = document.getElementById("A1");
let stop;
tyu.style.top = screen.height / 2.5 + "px";
console.log(screen.height / 2.5);
if (screen.height / 2.5 >= 400) {
  stop = 91;
  all.style = "top:290px";
} else {
  stop = 120;
  all.style = "top:190px";
}
function logKey(e) {
  if (e.code == "Enter") {
    btn_sh();
  } else {
  }
}

function btn_sh() {
  let objetmenu = document.getElementById("tre");

  all.className = "row col-xl-12 col-lg-12 col-sm-12 hide";
  var div = [];
  div.push(document.getElementById("A1"));
  div.push(document.getElementById("A2"));
  const numpx = parseInt(div[0].style.top);
  document.getElementById("A2").innerHTML = "";
  let numpx1 = numpx;
  if (pictureAnimated) {
    (function (nbFrames) {
      var numFrame = numpx;
      var anim = setInterval(move, 0);
      objetmenu.style.cursor = "wait";

      function move() {
        console.log(numFrame);
        //console.log(tyu.style.top);
        if (numpx1-- <= -numpx) {
          clearInterval(anim);
          objetmenu.style.cursor = "";
        } else {
          if (numpx1-- <= stop) {
            clearInterval(anim);
            pictureAnimated = false;
            objetmenu.style.cursor = "";
            createResultSearch("A2", "dffgd");
            all.className = "row col-xl-12 col-lg-12 col-sm-12";
          } else {
            numpx1 = numpx1 - 5;
            div[0].style.top = numpx1 + "px";
          }
        }
      }
    })(80);
  } else {
    createResultSearch("A2", "dffgd");
    all.className = "row col-xl-12 col-lg-12 col-sm-12";
  }
  valuesearch.innerHTML = `X résultat(s) ont été trouvés pour la recherche : ${seh.value}`;
  console.log(seh.value);
}

function azrty1() {
  doScrollLeft(document.getElementById("A2"), 200);
}
function azrty2() {
  doScrollLeft(document.getElementById("A2"), -200);
}

function doScrollLeft(el, p) {
  el.scrollLeft = el.scrollLeft += p;
}
(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.getElementById("A2").scrollLeft -= delta * 80; // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById("A2").addEventListener) {
    // IE9, Chrome, Safari, Opera
    document
      .getElementById("A2")
      .addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document
      .getElementById("A2")
      .addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document
      .getElementById("A2")
      .attachEvent("onmousewheel", scrollHorizontally);
  }
})();
