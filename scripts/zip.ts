import { emptyDirSync } from "https://deno.land/std/fs/mod.ts";
import { compress } from "https://deno.land/x/zip/mod.ts";

let content_script = await Deno.readTextFile("./dist/content_script.js");

// remove export
content_script = content_script.replace("export", "// export");

await Deno.writeTextFile("./dist/content_script.js", content_script);

emptyDirSync("./release");

// firefox

await change_manifest_version(2);

await compress(["./dist/*"], "./release/autojump_firefox.zip", {
  overwrite: true,
});

// chrome/edge

await change_manifest_version(3);

await compress(["./dist/*"], "./release/autojump.zip", { overwrite: true });

async function change_manifest_version(manifest_version: number) {
  const text = await Deno.readTextFile("./dist/manifest.json");

  const manifest: { manifest_version?: number } = JSON.parse(text);

  if (manifest.manifest_version) manifest.manifest_version = manifest_version;

  await Deno.writeTextFile(
    "./dist/manifest.json",
    JSON.stringify(manifest, null, 2),
  );
}
