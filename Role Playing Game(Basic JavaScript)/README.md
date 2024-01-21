# RPG - Dragon Repeller

## Overview

This project, "Dragon Repeller," is a text-based Role Playing Game (RPG) implemented using HTML, CSS, and JavaScript. 
It serves as a capstone project to showcase foundational JavaScript concepts learned during basic JavaScript studies. The game allows players to navigate through different locations, engage in battles, buy items, and includes an easter egg feature.

## Key Concepts

### 1. **DOM Manipulation**

   - **querySelector:**
     - *Example:*
       ```javascript
       const button1 = document.querySelector('#button1');
       ```
     - *Description:* Utilizing `querySelector` to select HTML elements based on CSS selectors, facilitating interaction with DOM elements.

### 2. **Event Handling**

   - **onclick Event:**
     - *Example:*
       ```javascript
       button1.onclick = goStore;
       ```
     - *Description:* Demonstrating event handling using the `onclick` event to trigger specific actions in response to button clicks.

### 3. **Variables and Data Types**

   - **Variables:**
     - *Example:*
       ```javascript
       let xp = 0;
       ```
     - *Description:* Employing variables to store and manage data, encompassing numbers, strings, and arrays.

### 4. **Arrays**

   - **Arrays (`weapons`, `monsters`, `locations`):**
     - *Example:*
       ```javascript
       const weapons = [
         { name: 'stick', power: 5 },
         // ...
       ];
       ```
     - *Description:* Utilizing arrays to organize and store information about weapons, monsters, and game locations.

### 5. **Conditional Statements**

   - **if Statements:**
     - *Example:*
       ```javascript
       if (gold >= 10) {
         // ...
       } else {
         text.innerText = "You do not have enough gold to buy health.";
       }
       ```
     - *Description:* Applying conditional statements for decision-making, checking affordability and handling game outcomes.

### 6. **Loops**

   - **while Loop:**
     - *Example:*
       ```javascript
       while (numbers.length < 10) {
         numbers.push(Math.floor(Math.random() * 11));
       }
       ```
     - *Description:* Utilizing a `while` loop to generate an array of random numbers with a specific length.

### 7. **Functions**

   - **Functions (`update`, `goTown`, `buyHealth`, etc.):**
     - *Example:*
       ```javascript
       function goTown() {
         update(locations[0]);
       }
       ```
     - *Description:* Implementing functions to encapsulate code, enhancing modularity and readability.

### 8. **Object-Oriented Concepts**

   - **Objects (`weapons`, `monsters`, `locations`):**
     - *Example:*
       ```javascript
       const weapons = [
         { name: 'stick', power: 5 },
         { name: 'dagger', power: 30 },
         // ...
       ];
       ```
     - *Description:* Utilizing objects to represent weapons, monsters, and locations, enhancing code organization.

### 9. **String Concatenation**

   - **String Concatenation (`+` operator):**
     - *Example:*
       ```javascript
       text.innerText = "You now have a " + newWeapon + ".";
       ```
     - *Description:* Concatenating strings using the `+` operator to create dynamic text in the game.

### 10. **CSS Styling**

   - **CSS Styling:**
     - *Example:*
       ```css
       body {
         background-color: #0a0a23;
       }
       ```
     - *Description:* Incorporating a separate CSS file for styling (`styles.css`) to demonstrate separation of concerns.

### 11. **Random Number Generation**

   - **Math.random():**
     - *Example:*
       ```javascript
       numbers.push(Math.floor(Math.random() * 11));
       ```
     - *Description:* Using `Math.random()` to generate random numbers, adding unpredictability to the game.

### 12. **Game Flow**

   - **Game Flow Control (`update` function):**
     - *Example:*
       ```javascript
       function update(location) {
         // ...
       }
       ```
     - *Description:* Controlling the game flow by updating UI elements and buttons based on player actions.

### 13. **Easter Egg Feature**

   - **Easter Egg (`easterEgg`, `pickTwo`, `pickEight` functions):**
     - *Example:*
       ```javascript
       function easterEgg() {
         update(locations[7]);
       }
       ```
     - *Description:* Implementing an easter egg feature allowing players to pick a number and experience a mini-game with win or loss outcomes.
    
### How to Play

    Open the HTML file in a web browser.
    Start in the town square and navigate through the game using buttons.
    Explore the store, cave, and fight monsters to gain XP and gold.
    Buy health, weapons, and strategically manage inventory.
    Encounter the dragon, defeat it, and win the game.

## Disclaimer

This project is designed for educational purposes, showcasing foundational JavaScript concepts. 
It serves as a learning exercise and may lack advanced game development features.
Future improvements could include more advanced features, better UI/UX, and additional game elements.