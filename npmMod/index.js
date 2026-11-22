const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.blue.italic("Hello world!"));
// console.log(chalk.blue.underline("Hello world!"));
// console.log(chalk.blue.underline.inverse("Hello world!"));
// console.log(chalk.green.underline.inverse("Success!"));
// console.log(chalk.red.underline.inverse("Fail!"));

const validator = require("validator");

const res = validator.isEmail("mehnaz@021.com");
//console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));  // true

const res1 = validator.isEmail("mehnaz@021.com");
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1));  // false @ missing