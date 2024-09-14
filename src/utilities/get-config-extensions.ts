import * as vscode from "vscode";

export type GetConfigExtensionsProps = {};

export function getConfigExtensions({}: GetConfigExtensionsProps) {
  const config = vscode.workspace.getConfiguration("copyAI");
  return config.get<string[]>("include", ["**/*.{js,ts,jsx,tsx}"]);
}
