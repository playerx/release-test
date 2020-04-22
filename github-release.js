var conventionalGithubReleaser = require("conventional-github-releaser");

var AUTH = {
  type: "oauth",
  token: "77be4a084ccf9a1f86f23b25f954d29c71fdc662",
};

conventionalGithubReleaser(
  AUTH,
  {
    preset: "angular",
  },
  console.log
);
