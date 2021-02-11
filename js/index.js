var pictureAnimated = true;

const log = document.getElementById("log");
let seh = document.getElementById("Search");
seh.addEventListener("keypress", logKey);

function logKey(e) {
  if (e.code == "Enter") {
    btn_sh();
  } else {
  }
}

function btn_sh() {
  let objetmenu = document.getElementById("tre");
  var div = [];
  div.push(document.getElementById("A1"));
  div.push(document.getElementById("A2"));

  if (pictureAnimated) {
    (function (nbFrames) {
      var numFrame = 0;
      var anim = setInterval(move, 1);

      // div[1].innerHTML =
      //   "une jolie string qui va bien qui est le conenu de la prochaine div fourni en AJAX par exemple";

      objetmenu.style.cursor = "wait";

      function move() {
        console.log(numFrame);
        if (numFrame++ >= nbFrames) {
          clearInterval(anim);
          //div[0].style.marginTop = "800px";
          //div[0].innerHTML = div[1].innerHTML;

          pictureAnimated = false;
          objetmenu.style.cursor = "";
        } else {
          div[0].style.marginTop =
            -numFrame * (div[0].clientHeight / nbFrames) * 2.5 + "px";
        }
      }
    })(100);
  } else {
    //pictureAnimated = true;
  }
  log.innerText = seh.value;
  console.log(seh.value);
}
export const btn_sh1 = () => {
  btn_sh();
};
