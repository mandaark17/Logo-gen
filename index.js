const inquirer = require('inquirer');
const fs = require('fs');

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => {
          return input.length > 0 && input.length <= 3 ? true : 'Please enter up to three characters.';
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
        validate: (input) => {
          return input.length > 0 ? true : 'Please enter a text color.';
        },
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
        validate: (input) => {
          return input.length > 0 ? true : 'Please enter a shape color.';
        },
      },
    ]);
