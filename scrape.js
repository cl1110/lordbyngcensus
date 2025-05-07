import { scrapeRedditComments } from "./apis.js";
import fs from "graceful-fs";

(async () => {
  const start = new Date();
  const amount = 20;
  const postUrl =
    "https://www.reddit.com/r/mapporncirclejerk/comments/1k9eyqb/name_this_hypothetical_gulf/";

  const comments = await scrapeRedditComments(postUrl, amount);
  console.log("comments", comments);
  console.log("comments.length", comments.length);

  fs.writeFileSync("test.json", JSON.stringify(comments, null, 2));
  const end = new Date();
  console.log(`Seconds taken: ${(end - start) / 1000} seconds`);
})();