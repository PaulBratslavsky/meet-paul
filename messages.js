const chalk = require("chalk");
const getData = require("./utils/getData");
const settings = require("./settings");

module.exports = async () => {
    const { url, name, query, token } = settings;
    const data = await getData(url, name, query, token);
    const { firstName, bio, SocialLink } = data.data[0].attributes;
    const welcome = `Hi, I am ${chalk.yellow(firstName)}! Welcome to my CV! \n`;

    function links(links) {
        links.forEach(link => {
            const capitalizedName = link.name.charAt(0).toUpperCase() + link.name.slice(1);
            console.log(`${chalk.blue.bold(capitalizedName)}: ${chalk.gray(link.link)}`);
        });
        
    }
    
    return {
        welcome,
        bio,
        links: () => links(SocialLink),
    }
  }
