const helloWorldRegex = (str) => {
  return /Hello world/i.test(str);
};

const hasAVowel = (str) => { };

const hasCatsOrDogs = (str) => {
  return /cats|dogs/ig.test(str);
};

const hasVowelStart = (str) => { };

const hasPunctuationEnd = (str) => {
  return /[!|.|?]$/g.test(str);
};

const hasNothingOrDigits = (str) => { };

const hasNoFlippers = (str) => {
  return /[^\s*$BCcDEHIKOoXxl]/g.test(str);
};

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]+[0-9]{3}[-\s.]+[0-9]{4}$/.test(str);
};

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => {
  const arr = str.match(/\d+/g);
  if (arr === null) return [];
  return arr.map(Number);
};

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => {
  return str.replaceAll(/[^0]\d\w/g, "???");
};

const fixFileName = (str) => { };

const nameRedacter = (str) => {
  return str.replaceAll(/[A-Z]{2,}/g, "REDACTED");
};

const camelToSnakeCase = (str) => { };

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
