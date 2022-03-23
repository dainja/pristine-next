const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);

const port = 3031;
const page = `http://localhost:${port}/`;

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    port: chrome.port,
  };
  const runnerResult = await lighthouse(page, options);

  const reportHtml = runnerResult.report;
  fs.writeFileSync("lhreport.html", reportHtml);

  console.log("✅ Report is done for", runnerResult.lhr.finalUrl);
  Object.keys(runnerResult.lhr.categories).forEach((key) => {
    console.log(`${key} score:`, runnerResult.lhr.categories[key].score * 100);
  });
  console.log("🧑‍🔬 See lhreport.html for full report");

  await chrome.kill();
}

async function main() {
  console.log("🔨 building project...");
  await exec("yarn build");
  console.log("✅ build complete!");
  console.log("🔦 running lighthouse...");
  const server = child_process.exec(`yarn start --port ${port}`);
  await runLighthouse();
  server.kill("SIGKILL");
  process.exit();
}

main();
