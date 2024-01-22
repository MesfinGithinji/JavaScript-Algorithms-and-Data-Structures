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
  const strArray = str.split('');
  const cleanStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  }
}
