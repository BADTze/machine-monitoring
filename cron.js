const { default: axios } = require("axios");
const cron = require("node-cron");

cron.schedule(" */60 * * * *", async () => {
  console.log("");
  console.log("######################################");
  console.log("# Running scheduler every 60 minutes #");
  console.log("######################################");
  console.log("");

  const response = await axios.get(
    "http://localhost:3000/api/get-data"
  );
  return response;
});
