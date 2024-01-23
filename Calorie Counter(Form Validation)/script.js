/**
 * Here we will use document.getElementById rather than
 * document.querySelector to interact with the DOM
 * document.getElementById allows us to select elements based on their ID attributes
 * document.querySelector(#button) allows us to select elements based on CSS style selectors
 */

const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  // const strArray = str.split('');
  // const cleanStrArray = [];

  // for (let i = 0; i < strArray.length; i++) {
  //   if (!["+", "-", " "].includes(strArray[i])) {
  //     cleanStrArray.push(strArray[i]);
  //   }
  // }
  /**
   * The code above is not memory efficient to go through
   * string. Its more efficient to use regex to look for a match.
   * We use the \ to escape the +, because a + has a special meaning in regular expressions.
   * check step 26 , 27 , 28
   */
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);

}
