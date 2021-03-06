// function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `
  
  # <h1 align="center"> π» ${data.title} π» <h1>
  
----

<a href="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"><img src="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"></a>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

----

### Description
${data.description}

![Gif Demo](./gif.gif)
----
### Installation
π§${data.installation}

----
### Usage
βοΈ${data.usage}

----
### License
β<a href="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"><img src="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"></a>
This application is covered by the ${data.license} license.
----

### Contributing
π€${data.contribution}

----
### Test-Instructions
${data.test}

----
### Questions
π»Find me on GitHub: [Github Profile](https://github.com/${data.username})
<br />
π§Email me with any questions: ${data.email} 
<br />

π_This README was generated with π by [README-generator] (https://github.com/kurdiamina3/README-generator)π

`;
}


module.exports = generateMarkdown;