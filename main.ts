import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Build a pack automating a freelancer chore — inbox triage, lead follow-up, invoice chasing — while rivals chase trading bots. Sell it on Gumroad for $29. Spend the $100 on a domain, fees, credits. DM 30 freelancers and small businesses on X with $99 installs. Day 30: ~$350.";

const chars = [...plan].length;
if (chars < 1 || chars > 280) {
  throw new Error(`Plan must be 1-280 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
