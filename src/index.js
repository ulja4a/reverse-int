module.exports = function reverse (n) {
  let x = Array.from(String(Math.abs(n)), Number);
  console.log(x);
  let Reverse = (x.reverse()).join('');
  let resltReverse = Number(Reverse);
  return resltReverse;
}
