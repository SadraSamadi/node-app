# Node App Scripts

![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/SadraSamadi/node-app-scripts)
![npm](https://img.shields.io/npm/dw/node-app-scripts)
![npm](https://img.shields.io/npm/v/node-app-scripts)
![npm (tag)](https://img.shields.io/npm/v/node-app-scripts/beta)
![GitHub last commit](https://img.shields.io/github/last-commit/SadraSamadi/node-app-scripts)
![GitHub](https://img.shields.io/github/license/SadraSamadi/node-app-scripts)

Configurations, scripts and runtime modules for Node.js App.

## Install

- **NPM**
    - `npm i @node-app/runtime`
    - `npm i -D @node-app/scripts`
- **Yarn**
    - `yarn add @node-app/runtime`
    - `yarn add -D @node-app/scripts`

## Usage

`package.json`
```json5
{
  // ...
  "scripts": {
    // ...
    "clean": "node-app clean",
    "build": "node-app build"
    // ...
  },
  // ...
}
```

`tsconfig.json`
```json5
{
  "scripts": "@node-app/scripts/config/tsconfig.json",
  "include": [
    "src"
  ]
}
```

## Options

```text
Usage: node-app command [options]

Commands:
  node-app clean  Clean up.                                         [aliases: c]
  node-app build  Build sources.                                    [aliases: b]

Options:
  -i, --input    Input directory.                      [string] [default: "src"]
  -o, --output   Output directory.                    [string] [default: "dist"]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
```
