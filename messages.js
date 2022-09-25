const chalk = require("chalk");
const getData = require("./utils/getData");
const settings = require("./settings");

module.exports = async () => {
  const { url, name, query, token } = settings;
  const data = await getData(url, name, query, token);

  const { firstName, bio, SocialLink, ResumeItem } = data.data[0].attributes;

  const welcome = `Hi, I am ${chalk.yellow(firstName)}! Welcome to my CV! \n`;

  function links(links) {
    links.forEach((link) => {
      const capitalizedName =
        link.name.charAt(0).toUpperCase() + link.name.slice(1);
      console.log(
        `${chalk.blue.bold(capitalizedName)}: ${chalk.magenta(link.link)}`
      );
    });
    console.log("\n");
  }

  function resume(resume) {
    resume.forEach((item) => {
      console.log(
        `${chalk.yellow.bold(item.title)} | ${chalk.yellow.bold(item.company)}`
      );
      console.log(
        `Date: ${chalk.magenta(item.startDate)} - ${chalk.magenta(
          item.endDate || "Present"
        )} \n`
      );
      item.Task.forEach((task) => {
        const string = task.description;
        const split = 56;
        console.log(
          chalk.yellow("- ") +
            chalk.white(string.slice(0, split)) +
            "\n" +
            "  " +
            chalk.white(string.slice(split) + "\n")
        );
      });
    });
  }

  return {
    welcome,
    bio,
    links: () => links(SocialLink),
    resume: () => resume(ResumeItem),
  };
};
