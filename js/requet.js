export const request = (type, url, value = "") => {
  var xhttp = new XMLHttpRequest();
  xhttp.open(type, url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send(value);
  xhttp.onload = () => {
    if (xhttp.responseText != "") {
      let resJson1 = JSON.parse(xhttp.responseText);
      return resJson1;
    }
  };
};
