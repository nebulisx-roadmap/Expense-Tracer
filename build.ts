import { parseArgs } from "util";

const args = process.argv.slice(2);
const options = {
  minify: { type: "boolean" },
};

const { values, positionals } = parseArgs({
  args,
  options: {
    minify: { type: "boolean", short: "m", default: false },
    target: { type: "string", short: "t", default: "node", choices: ["node", "bun", "browser"] },
  },
});

await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "dist",
  sourcemap: "linked",
  minify: values.minify,
  target: values.target as "node" | "bun" | "browser",
  format: "cjs",
});
