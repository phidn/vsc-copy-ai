import * as vscode from "vscode";

export function getConfig() {
  const config = vscode.workspace.getConfiguration("copyAI");
  return {
    include: config.get<string[]>("include", ["**/*.{js,ts,jsx,tsx}"]),
    exclude: config.get<string[]>("exclude", ["node_modules"]),
    maxContentSize: config.get<number>("maxContentSize", 1048576),
    removeComments: config.get<boolean>("removeComments", false),
    gitignore: config.get<boolean>("gitignore", true),
    includeMetadata: config.get<boolean>("includeMetadata", false),
    includePath: config.get<boolean>("includePath", false),
    includeInstruction: config.get<string>("includeInstruction", ""),
    minimize: config.get<boolean>("minimize", false),
  };
}
