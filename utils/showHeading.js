const chalk = require('chalk');

module.exports = function showHeading(bio, color = 'green') {
    console.log(chalk[color].bold(`${bio}`) + '\n');
}