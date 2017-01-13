var chalk = require("chalk");


var arr = ["red", "green", "blue"];

var message = chalk.red(arr[0]);
// var message = chalk.green("give me colour ") + chalk.yellow("please");
console.log(message);
