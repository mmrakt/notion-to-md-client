require("dotenv").config();
const { Client } = require("@notionhq/client");

console.log(process.env.INTEGRATION_TOKEN);
// Initializing a client
const notion = new Client({
  auth: process.env.INTEGRATION_TOKEN,
});

(async () => {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse);
})();
