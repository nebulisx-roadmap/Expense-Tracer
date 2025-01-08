import { spawn } from "bun";
import { parseArgs } from "util";

enum Platform {
  Darwin = "darwin",
  Linux = "linux",
  Windows = "windows",
}

enum Arch {
  X64 = "x64",
  Arm64 = "arm64",
}

const args = process.argv.slice(2);

const {
  values: { arch, platform, outdir, bytecode, minify, sourcemap },
  positionals,
} = parseArgs({
  args,
  options: {
    platform: { type: "string", default: Platform.Darwin, choices: [ "all", Platform ] },
    arch: { type: "string", default: Arch.X64, choices: Arch },
    bytecode: { type: "boolean", default: false },
    outdir: { type: "string", default: "dist/bin" },
    minify: { type: "boolean", default: true },
    sourcemap: { type: "boolean", default: false },
  },
});

const entrypoint = "./index.ts";
const outfile = `${outdir}/expense-tracer`;

const compile = () => {
  const compileForPlatform = (platform: Platform, arch: Arch) => {
    const compilerArgs = [
      "bun",
      "build",
      entrypoint,
      "--outfile",
      `${outfile}-${platform}-${arch}`,
      "--compile",
      "--target",
      `bun-${platform}-${arch}`,
    ];

    bytecode && compilerArgs.push("--bytecode");
    minify && compilerArgs.push("--minify");
    sourcemap && compilerArgs.push("--sourcemap");

    spawn(compilerArgs);
  };

  if (platform === "all") {
    for (const platform of Object.values(Platform)) {
      for (const arch of Object.values(Arch)) {
        if (platform === Platform.Windows && arch === Arch.Arm64) {
          continue;
        }
        compileForPlatform(platform, arch);
      }
    }
  } else {
    compileForPlatform(platform as Platform, arch as Arch);
  }
};

compile();
