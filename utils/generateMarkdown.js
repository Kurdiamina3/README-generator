// function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `
  
  # <h1 align="center"> 🌻 ${data.title} 🌻 <h1>
  
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
🔧${data.installation}

----
### Usage
✏️${data.usage}

----
### License
✅<a href="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"><img src="https://img.shields.io/badge/License-${data.license[0]}-blueviolet"></a>
This application is covered by the ${data.license} license.
----

### Contributing
🤝${data.contribution}

----
### Test-Instructions
${data.test}

----
### Questions
💻Find me on GitHub: [Github Profile](https://github.com/${data.username})
<br />
📧Email me with any questions: ${data.email} 
<br />

🌟_This README was generated with 💓 by [README-generator] (https://github.com/kurdiamina3/README-generator)🌟

`;
}


module.exports = generateMarkdown;