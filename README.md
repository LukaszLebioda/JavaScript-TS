# how to work with README.md (markdown documentation)

## the more hashes we type

### the smaller the header

#### becomes

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

# package.json

npm init / npm init -y

# node_modules

npm i / npm install

# VS code shortcuts

duplicate => shift + option + arrow
comment => cmd + /
hide explorer panel => cmd + b
terminal => ctrl + `
search options => cmd + shift + p
highlight the same parts => highlight, then cmd + d

# VS code extensions

- Live Server,
- vscode-icons (or Material Icon Theme) (nice looking folders and files),
- JavaScript (ES6) code snippets (e.g. clg => console.log()),
- Thunder Client,
- Code Runner (to run code => a triangle sign in menu),
- Prettier,
- ESLint,
- Llama Coder and/or Continue,
- IntelliCode,

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

# DeepSeek Coder with Continue

- install Ollama from ollama.co (is provides platform to run LLMs locally),
- terminal => ollama run deepseek-coder:1.3b (or any other version),
- this will install AI model locally,
- install VS Code extension: Continue (to integrate local AI model with VS Code),
- terminal => ollama run deepseek-coder (ollama rm deepseek-coder to uninstall);
- terminal => /? or /help for help,
- file with code => tab or cmd + arrow to autocomplete,
- exit => ctrl + d or /bye

# TypeScript

- -> npm install typescript -g (to install tsc globally),
- -> npm tsc –init (to create tsconfig.json file),
- within tsconfig.json => noEmitOnError: false / true,
- create file filename.ts
- -> tsc filename.ts (to compile into js file of the same name, like: filename.js)
- -> tsc filename.ts newfile.js (to compile to js file of different name)
- -> tsc filename.ts -w (to watch changes, to keep compiling to js file),
- -> tsc -w (to watch all \*.ts files),
