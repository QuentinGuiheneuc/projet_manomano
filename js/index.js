import { createResultSearch } from "./structure/structure.js";
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
window.addEventListener("load", load);
function load() {
  tyu.style.top = screen.height / 2.5 + "px";
  console.log(screen.height);
  if (screen.height >= 900) {
    stop = 91;
    all.style = "top:290px";
  } else {
    stop = 120;
    all.style = "top:190px";
  }
  if (seh.value) {
    btn_sh();
  }
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
            all.className = "row col-xl-12 col-lg-12 col-sm-12";
          } else {
            numpx1 = numpx1 - 5;
            div[0].style.top = numpx1 + "px";
          }
        }
      }
    })(80);
  } else {
    all.className = "row col-xl-12 col-lg-12 col-sm-12";
  }
  if (seh.value != "") {
    execu(`/manomano/re_sql.php?searchth=${seh.value}`);
  } else {
    execu(`/manomano/re_sql.php?searchth=all`);
  }
  valuesearch.innerHTML = `X résultat(s) ont été trouvés pour la recherche : ${seh.value}`;
  console.log(seh.value);
  AOS.init();
}
function execu(vet) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", vet, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
  xhttp.onload = () => {
    if (xhttp.responseText != "") {
      let resJson1 = JSON.parse(xhttp.responseText);
      console.log(resJson1);
      createResultSearch("A2", resJson1);
      all.className = "row col-xl-12 col-lg-12 col-sm-12";
    }
  };
}
function azrty1() {
  doScrollLeft(document.getElementById("A2"), 200);
}
function azrty2() {
  doScrollLeft(document.getElementById("A2"), -200);
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
