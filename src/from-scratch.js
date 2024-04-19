const helloWorldRegex = (str) => {};

// Q2
const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};

const hasCatsOrDogs = (str) => {};

// Q4
const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str);
};


const hasPunctuationEnd = (str) => {};

// Q6
const hasNothingOrDigits = (str) => {
  // return /^$|^\d+$/.test(str);
  return /^(|\d+)$/.test(str);
};

const hasNoFlippers = (str) => {};

// Q8
const isValidEmail = (str) => {
  // only letter a-z, numbers (0-9), and periods(.) are allowed in email
  return /^[\w\.]+@[\w\.]+\.[a-z]{2,4}$/i.test(str);
};

const isValidPhoneNumber = (str) => {};

// Q10
const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];
};

const matchAllNumbersAsNumbers = (str) => {};

// Q12
const matchAllWords = (str) => {
  // return str.match(/\b\w+\b/g) || []; // wrong
  return str.match(/[a-zA-Z']+/g) || [];
};

const replaceAllNumbers = (str) => {};

// Q14
const fixFileName = (str) => {
  return str.replace(/\s+/g, "_")
};

const nameRedacter = (str) => {};

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
