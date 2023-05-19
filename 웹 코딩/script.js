function sayHello(str) {
    str = "hi";
    alert(str);
}
function ybutton(str) {
    str = "원래 MBTI가 무엇인가요?";
    alert(str);
}
function nbutton(str) {
    str = "검사를 시작하겠습니다.";
    alert(str);
}
let i = 0;
let e = 0;

function ibutton() {
  i += 1;
}

function ebutton() {
  e += 1;
}

function result() {
  if (i > e) {
    alert("The larger value is i: " + i);
  } else if (e > i) {
    alert("The larger value is e: " + e);
  } else {
    alert("Both i and e have the same value: " + i);
  }
}
