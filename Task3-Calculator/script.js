function cal(m) {
  let x = window.txt;
  x.value += m;
}
function eq() {
  let x = eval(window.txt.value);
  console.log(x);
  window.txt1.value = x;
}
