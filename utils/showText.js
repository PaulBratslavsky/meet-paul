const chalk = require('chalk');

module.exports = function showText(bio, color = 'green') {
    console.log(chalk[color](`${bio}`));
}