# package.json

npm init / npm init -y

# node_modules

npm i / npm install

# VS code extensions

- Live Server,
- vscode-icons,
- JavaScript (ES6) code snippets,
- Thunder Client,
- Code Runner,
- Prettier,
- ESLint,

# Prettier

- VS Code settings => default formatter: Prettier => format on-save / format on-paste (optional),
- create file .prettierrc.json (in main project directory),
- within .prettierrc.json set configuration:
  {
  "semi": false,
  "singleQuote": true,
  "useTabs": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5"
  }

# TypeScript

- npm install typescript -g (to install tsc globally),
- npm install typescript –save-dev (to install tsc locally),
- npm tsc –init (to create tsconfig.json file),
- within tsconfig.json => noEmitOnError: false / false,
- create file filename.ts => tsc filename.ts (to compile into filename.js) // tsc filename.ts -w (to watch changes),
