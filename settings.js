var qs = require("qs");

const query = qs.stringify({
  filters: {
    id: {
      $eq: 1,
    },
  },
  populate: {
    SocialLink: {
      populate: "*",
    },
    ResumeItem: {
      populate: "*",
    }
  },
})

module.exports = {
  query,
  url: "https://squid-app-7h5w9.ondigitalocean.app/api/",
  token:
    "9084fcdddddd69aeb665693a70f7df7c6455c7fd1ec2bc80b7624e767957d3ca0147ad57d1ec37743bb74b973e4f8ee8143727221bf1925d20c30795df4c376783c0ad87ad46613d21d4211f61c23434e6e5597db5a32c2ad889a41355401e42a3527e2231bd448e760a32879c95b0a82a3778e2000ac2a7fe0b5899541c188f",
  name: "authors",
};
