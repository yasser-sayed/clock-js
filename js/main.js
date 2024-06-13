var myH1 = document.querySelector(".zero");
var pAm = document.querySelector(".pam");

setInterval(() => {
  var time = new Date();
  var hrsTime = time.getHours();
  var minTime = time.getMinutes();
  var secTime = time.getSeconds();

  if ((hrsTime >= 0, hrsTime < 12)) {
    pAm.innerHTML = "AM";
  }

  if (hrsTime > 12) {
    var hrsTime = hrsTime - 12;
  }

  if (hrsTime < 10) {
    hrsTime = "0" + hrsTime;
  }

  if (minTime < 10) {
    minTime = "0" + minTime;
  }

  if (secTime < 10) {
    secTime = "0" + secTime;
  }

  myH1.innerHTML = hrsTime + ":" + minTime + ":" + secTime;
}, 1000);
