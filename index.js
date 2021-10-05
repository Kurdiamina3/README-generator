// TODO: Include packages needed for this application
//import inquirer from "inquirer"; 
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');

var generateMarkdown = require('./utils/generateMarkdown')


function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt ([
    {
      type: 'input',
      message: "Enter your GitHub Username",
      name: 'username',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log (" A value is required.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: "Enter your E-mail",
      name: 'email',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log (" A value is required.");
        }
        return true;
      }
    },
    {
    type: 'input',
    message: "What is your project title?",
    name: 'title',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "Enter a description for your project",
    name: 'description',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: " Enter installation instructions.",
    name: 'installation',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "Enter usage information..",
    name: 'usage',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "Contribution guidelines",
    name: 'contribution',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "Enter Test Guidelines",
    name: 'test',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  },
  {
    type: "checkbox",
    message: "Licensing Options",
    name: 'license',
    choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A'],
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log (" A value is required.");
      }
      return true;
    }
  }
  ]).then(function(data) {
    console.log("Generating Markdown...");
    writeToFile("README.md", generateMarkdown({...data}));
  });
}

init()


