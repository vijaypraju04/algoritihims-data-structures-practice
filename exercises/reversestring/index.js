// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {
//   let reversed = ''
//   for (let character of str) {
//     reversed = character + reversed
//     debugger
//   }
//   return reversed
// }

function reverse(str) {
  let reversed = ''
  for (let i = 0; i < str.length; i++) {
    reversed = character + reversed
  }
  return reversed
}

// reverse('asdf')
//
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }

// function reverse(str) {
//   return str
//   .split('')
//   .reverse()
//   .join('')
// }

module.exports = reverse;
