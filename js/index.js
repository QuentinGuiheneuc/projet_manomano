var pictureAnimated = true;

const log = document.getElementById("log");
let seh = document.getElementById("Search");
seh.addEventListener("keypress", logKey);
let tyu = document.getElementById("A1");
 tyu.style.top = "449.750px"
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
  const numpx = parseInt(div[0].style.top);
  let numpx1 = numpx;
 // let tyu = div[0];
  //console.log(());
  if (pictureAnimated) {
    (function (nbFrames) {
      var numFrame = numpx;
      var anim = setInterval(move, 0);
      objetmenu.style.cursor = "wait";
      function move() {
        console.log(numFrame);
        console.log(tyu.style.top);
        if (numpx1-- <= -numpx) {
          clearInterval(anim);
          objetmenu.style.cursor = "";
        } else {
          if (numpx1-- <= 91) {
            clearInterval(anim);
            pictureAnimated = false;
            objetmenu.style.cursor = "";
          } else {
            numpx1 = numpx1 - 1;
            div[0].style.top = numpx1 + "px";
          }
        }
      }
    })(80);
  } else {
    //pictureAnimated = true;
  }
  log.innerText = seh.value;
  console.log(seh.value);
}
export const btn_sh1 = () => {
  btn_sh();
};
