var arrNum = [ 11, 16, 20, 29, 40, 31, 50, -6, -9, -11, -1, -19];
var arrNum2 = [-1,-2,-3,-4,-5,1,2,3,4,5,6.5,7.5];
/*Bai1*/
document.getElementById("btn-tinh-tong").onclick = function () {
  var outPut = 0;

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      outPut += arrNum[i];
    }
  }
  document.getElementById("ketquabai1").innerHTML = outPut;
};
/*Bai2*/
document.getElementById("btn-dem-so").onclick = function () {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] > 0) {
        count++;
      }
    }
    document.getElementById("ketquabai2").innerHTML = count;
  };
/*Bai3*/
document.getElementById("btn-tim-so").onclick = function () {
    var min = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] < min) {
        min = arrNum[i];
      }
    }
    document.getElementById("ketquabai3").innerHTML = min;
  };
  /*Bai4*/
  document.getElementById("btn-so-duong").onclick = function () {
    var soDuongBeNhat = Math.min.apply(
      null,
      arrNum.filter(function (n) {
        return n > 0;
      })
    );
    document.getElementById("ketquabai4").innerHTML = soDuongBeNhat;
  };
  /*Bai5*/
  document.getElementById("btn-so-chan").onclick = function () {
    var lastNum = -1;
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] % 2 === 0) {
        lastNum = arrNum[i];
        // break;
      }
    }
    document.getElementById("ketquabai5").innerHTML = lastNum;
  };