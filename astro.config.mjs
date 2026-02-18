import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "ricadmin";

export default defineConfig({
  // En GitHub Pages: /<repo>
  base: isGitHubActions ? `/${repo}` : "/",
  site: isGitHubActions
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "https://ricadmin.io",
});
