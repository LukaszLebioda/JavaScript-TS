# node_modules

npm i / npm install (as dependency)
npm install -D / npm install --save-dev (as devDependency)
npm install -g (globally)
npm install --save-exact (installs the exact version, not ~ or ^),

# versioning

example of version: 1.28.2:
- 1: major (risk of uncompatible changes),
- 28: minor (new, but compatible functionalities),
- 2: patches (bugfixes, security updates etc.)

~ patch / minor version update allowed 
(~1.2.3 will match all 1.2.x but not 1.3.x versions),
^ major version update allowed 
(^1.2.3 will use releases from 1.2.3 to < 2.0.0),

# VS code shortcuts

duplicate => shift + option + arrow
comment => cmd + /
hide explorer panel => cmd + b
terminal => ctrl + `
search options => cmd + shift + p
highlight the same parts => highlight, then cmd + d

# VS code extensions & fonts & themes

- Live Server,
- vscode-icons (or Material Icon Theme) (nice looking folders and files),
- JavaScript (ES6) code snippets (e.g. clg => console.log()),
- Thunder Client,
- Code Runner (to run code => a triangle sign in menu),
- Prettier,
- ESLint,
- Llama Coder and/or Continue,
- IntelliCode,

- font: Cascadia Mono,
- theme: One Monokai (Dark),

# Prettier

- CLI (optional, used mostly when we want to prettify already existing project):
- npm i --save-dev prettier (or: npm i --save-dev --save-exact prettier (to hardcode current version, which is recommended by prettier to avoid different formatting with different versions)),
- npx prettier --write fileName.js (to format a file),
- npx prettier . --write (to format all files),
- npx prettier --check fileName.js (to check file formatting),
- npx prettier . --check (to check all files),

- Plugin (CLI not needed):
- VS Code - install extension: Prettier - Code formatter,
- VS Code settings => set default formatter to: Prettier => format on-save / format on-paste (optional),
- create file .prettierignore (to list files/folders to bo ignored),
- create file .prettierrc (in main project directory),
- within .prettierrc.json set configuration:
{
	"semi": true,
	"singleQuote": false,
	"useTabs": true,
	"tabWidth": 2,
	"bracketSpacing": true,
	"arrowParens": "always",
	"trailingComma": "es5",
	"printWidth": 80,
	"bracketSameLine": true
}
- within .prettierignore we can list all paths/files,
- we don't want Prettier to include,

  - recommended package to integrate Prettier with ESlint:
  - https://github.com/prettier/eslint-config-prettier

# ESLint

- CLI:
- npm init @eslint/config@latest (check syntax & find problems, 'import' syntax, not React & Vue, with TypeScript, in Node (not Browser), install additional libraries, select npm),
- file is created in the project directory: eslint.config.js:
- in package.json -> "lint": "eslint",
- in terminal -> npm run lint (or: npm run lint .) (to check all files),
- or: npm run lint fileName.js (to check a specific file),
- set of default rules: https://eslint.org/docs/latest/rules,
- in eslint.config.sj we can add rule object and refer to a specific rule to change it (e.g. by default the rule of 'unused variables detected' is an "error", we can change it to "warn" or "off"):
{
  rules: {
    "no-unused-vars": "warn",
  },
},

- Plugin (CLI needed):
- VS Code - install extension: ESLint (from Microsoft),
- plugin will inform us about any issues directly within code we write (red or yellow squiggly lines), but also on the file tree level (red or yellow filenames),

  - recommended package to integrate Prettier with ESlint:
  - https://github.com/prettier/eslint-config-prettier

# DeepSeek Coder with Continue

- install Ollama from ollama.co (is provides platform to run LLMs locally),
- terminal => ollama run deepseek-coder:1.3b (or any other version),
- this will install AI model locally,
- install VS Code extension: Continue (to integrate local AI model with VS Code),
- terminal => ollama run deepseek-coder (ollama rm deepseek-coder to uninstall);
- terminal => /? or /help for help,
- file with code => tab or cmd + arrow to autocomplete,
- exit => ctrl + d or /bye

# README.md ## the more hashes ### the smaller the header becomes

`in backticks we provide pieces of code`

```javascript
and in triple backticks
we provide larger, multiline
pieces of code
additionally we can provide the language name
according to which the syntax will be formatted
```

- hyphens
- to create
- lists
  [double space] at the end of the line replaces [enter]
  and we use it to break a line if needed

# TypeScript

- -> npm install typescript -g (to install tsc globally),
- -> npm tsc –init (to create tsconfig.json file),
- within tsconfig.json => noEmitOnError: false / true,
- create file filename.ts
- -> tsc filename.ts / npx tsc filename.ts (to compile into js file of the same name, like: filename.js)
- -> tsc filename.ts newfile.js (to compile to js file of different name)
- -> tsc filename.ts -w (--watch) / npx tsc filename.ts -w (to watch changes, to keep compiling to js file),
- -> tsc -w (to watch all \*.ts files),

# describing methods

/**
  * This method fills out the inline form with user details
  * @param name - should be first and last name
  * @param email - valid email
  * @param rememberMe - true or false (user session)
  */
