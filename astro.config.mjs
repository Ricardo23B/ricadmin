import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "ricadmin";
const owner = process.env.GITHUB_REPOSITORY_OWNER || "ricardo23b";

export default defineConfig({
  base: isGitHubActions ? `/${repo}/` : "/",
  site: isGitHubActions ? `https://${owner}.github.io` : "https://ricadmin.io",
});
