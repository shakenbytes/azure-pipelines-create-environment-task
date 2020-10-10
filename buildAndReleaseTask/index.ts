import tl = require("azure-pipelines-task-lib/task");

async function run() {
  try {
    const environmentName: string | undefined = tl.getInput(
      "environmentName",
      true
    );

    if (environmentName == "") {
      tl.setResult(tl.TaskResult.Failed, "environmentName is required.");
      return;
    }
    console.log("Hello", environmentName);
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
