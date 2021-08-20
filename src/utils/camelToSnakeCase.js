module.exports = (str) =>
  /*from: https://stackoverflow.com/questions/54246477/how-to-convert-camelcase-to-snake-case-in-javascript*/
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).toUpperCase();
