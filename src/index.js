module.exports = function reverse (n) {
  const newN = n.toString().split('').reverse().join('');
  return parseFloat(newN);
}


// function reverse (n) {
//   const newN = n.toString().split('').reverse().join('')
// console.log(parseFloat(newN))
// }
// reverse(10)