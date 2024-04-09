const commitHash = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString().trim();
const repoName = "x-no-twitter.com";
const repoUrl = `https://github.com/prplecake/${repoName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    COMMIT_HASH: commitHash,
    REPO_NAME: repoName,
    REPO_URL: repoUrl,
  },
};

module.exports = nextConfig;
