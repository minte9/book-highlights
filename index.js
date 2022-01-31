#!/usr/bin/env node

/**
 * Get one random book highlight 
 */
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

let AUTHORS;
let BOOKS;
let HIGHLIGHTS;

try {
    AUTHORS     = require(__dirname + '/public_html/data//authors.json');
    BOOKS       = require(__dirname + '/public_html/data//books.json');
    HIGHLIGHTS  = require(__dirname + '/public_html/data/highlights.json');
} catch (error) {
    console.log('Empty data/ folder. \nPlease rename data_sample -> data');
    process.exit(1);
}

const rand = Math.random();
const i = Math.floor(rand * BOOKS.length);
const book = BOOKS[i];

HIGHLIGHTS = HIGHLIGHTS.filter(x => x.name == book.title);
HIGHLIGHTS = HIGHLIGHTS[0].children;

const author = AUTHORS.filter(x => x.name == HIGHLIGHTS[0].name)[0];

HIGHLIGHTS = HIGHLIGHTS[0].children;
const j = Math.floor(rand * HIGHLIGHTS.length);
const highlight = HIGHLIGHTS[j];

highlight.text = ' '.repeat(2) + highlight.text; 
highlight.text = highlight.text.replace(/\n/g, (' '.repeat(2) + '\n') + ' '.repeat(2));

const splits = highlight.text.split(/<\/?i>/);
const start = splits[0];
const highlighted = ' ' + splits[1] + ' ';
const end = splits[2];
const sep = chalk.grey('-'.repeat(60));

console.log('\n'.repeat(25) + sep + '\n' + ' '.repeat(2)
    + chalk.greenBright(author.name + ', ')
    + chalk.redBright(book.title)
    + '\n' + sep
);
console.log(''
    + chalk.bgGrey.black(start)
    + chalk.bgYellowBright.black(highlighted)
    + chalk.bgGrey.black(end)
    + '\n' + sep + '\n'.repeat(2)
);