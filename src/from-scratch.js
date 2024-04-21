const helloWorldRegex = (str) => {
  return /Hello world/i.test(str);
};
//Q2
const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};
//Q3
const hasCatsOrDogs = (str) => {
  return /cats|dogs/ig.test(str);
};
//Q4
const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str);
};
//Q5
const hasPunctuationEnd = (str) => {
  return /[!|.|?]$/g.test(str);
};
//Q6
const hasNothingOrDigits = (str) => {
  // return /^$|^\d+$/.test(str);
  return /^(|\d+)$/.test(str);
};
//Q7
const hasNoFlippers = (str) => {
  return !/[BCcDEHIKOoXxl]/g.test(str);
};
//Q8
const isValidEmail = (str) => {
  // only letter a-z, numbers (0-9), and periods(.) are allowed in email
  return /^[\w\.]+@[\w\.]+\.[a-z]{2,4}$/i.test(str);
};
//Q9
const isValidPhoneNumber = (str) => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]+[0-9]{3}[-\s.]+[0-9]{4}$/.test(str);
};
//Q10
const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];
};
//Q11
const matchAllNumbersAsNumbers = (str) => {
  const arr = str.match(/\d+/g);
  if (arr === null) return [];
  return arr.map(Number);
};
//Q12
const matchAllWords = (str) => {
  // return str.match(/\b\w+\b/g) || []; // wrong
  return str.match(/[a-zA-Z']+/g) || [];
};
//Q13
const replaceAllNumbers = (str) => {
  return str.replaceAll(/[0-9]+/g, "???");
};
// Q14
const fixFileName = (str) => {
  return str.replace(/\s+/g, "_")
};
//Q15
const nameRedacter = (str) => {
  return str.replaceAll(/[A-Z]{2,}/g, "REDACTED");
};
// Q16
const camelToSnakeCase = (str) => {
  // return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`); // best way
  // return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`).trim();
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
