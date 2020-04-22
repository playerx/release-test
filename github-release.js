var conventionalGithubReleaser = require("conventional-github-releaser");

console.log(process.env.GITHUB_TOKEN);

var AUTH = {
  type: "oauth",
  token: process.env.GITHUB_TOKEN,
  url: "https://api.github.com",
};

conventionalGithubReleaser(
  AUTH,
  {
    preset: "angular",
  },
  (x) => {
    console.log(x);
  }
);
