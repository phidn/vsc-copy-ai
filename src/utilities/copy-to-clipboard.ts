import { spawn } from "child_process";

export type CopyToClipboardProps = {
  content?: string;
};

export async function copyToClipboard({ content }: CopyToClipboardProps) {
  if (!content) {
    throw new Error("No content provided for copying to clipboard");
  }

  console.log("hello from copy-to-clipboard.ts");

  try {
    const platform = process.platform;
    const copyCommand =
      platform === "win32"
        ? "clip"
        : platform === "darwin"
          ? "pbcopy"
          : "xclip -selection clipboard";

    const env = { ...process.env, LANG: "en_US.UTF-8" };
    const proc = spawn(copyCommand, { shell: true, env });

    proc.stdin.write(content, "utf8");
    proc.stdin.end();
  } catch (error: any) {
    throw new Error(`Error copying to clipboard: ${error.message}`);
  }
}
