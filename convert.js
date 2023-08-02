const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
require("dotenv").config();

const integrationToken = process.env.INTEGRATION_TOKEN;
const pageId = process.env.PAGE_ID;

const notion = new Client({
  auth: integrationToken,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
})();
