const chalk = require("chalk");
const validator=require('validator')

// inverse meas include backgroud to
console.log(chalk.red.underline.inverse("shiva"));
const result=validator.isEmail("diptas@thapa.com")
console.log(result? chalk.green.inverse(result):chalk.red.inverse(result))