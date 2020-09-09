# Node App Scripts

![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/SadraSamadi/node-app-scripts)
![npm](https://img.shields.io/npm/dw/node-app-scripts)
![npm](https://img.shields.io/npm/v/node-app-scripts)
![npm (tag)](https://img.shields.io/npm/v/node-app-scripts/beta)
![GitHub last commit](https://img.shields.io/github/last-commit/SadraSamadi/node-app-scripts)
![GitHub](https://img.shields.io/github/license/SadraSamadi/node-app-scripts)

Configuration and scripts for Node.js App.

## Install

- **NPM** `npm i -D node-app-scripts` and `npm i node-app-runtime`
- **Yarn** `yarn add -D node-app-scripts` and `yarn add node-app-runtime`

## Usage

`package.json`
```json5
{
  // ...
  "scripts": {
    // ...
    "clean": "node-app-scripts clean",
    "build": "node-app-scripts build"
    // ...
  },
  // ...
}
```

## Options

```text
Usage: node-app-scripts command [options]

Commands:
  node-app-scripts clean  Clean up.
  node-app-scripts build  Build sources.

Options:
      --input    Input directory.                      [string] [default: "src"]
      --output   Output directory.                    [string] [default: "dist"]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
```

## Related

[node-app-runtime](https://github.com/SadraSamadi/node-app-runtime)
