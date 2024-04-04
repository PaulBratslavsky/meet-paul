const qs = require("qs");

const query = qs.stringify({
  filters: {
    id: {
      $eq: 1,
    },
  },
  populate: {
    posts: {
      populate: "*",
    },
  },
})

module.exports = {
  query,
  url: "https://seal-app-ylnsp.ondigitalocean.app/api/",
};
