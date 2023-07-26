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

    const { text, textColor, shape, shapeColor } = userInput;

    let shapeSvg;
    if (shape === 'circle') {
      shapeSvg = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
      shapeSvg = `<polygon points="150,20 75,180 225,180" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
      shapeSvg = `<rect x="75" y="50" width="150" height="100" fill="${shapeColor}" />`;
    } else {
      console.error('Invalid shape selected.');
      return;
    }

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSvg}
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;


    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

generateLogo();
