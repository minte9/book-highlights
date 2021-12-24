#!/usr/bin/env node

/**
 * Get one random book highlight
 */
chalk = require('chalk');

let AUTHORS     = require(__dirname + '/config/authors.json');
let BOOKS       = require(__dirname + '/config/books.json');
let HIGHLIGHTS  = require(__dirname + '/highlights.json');

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
    + '\n'
    + chalk.bgGrey.black(start)
    + chalk.bgYellowBright.black(highlighted)
    + chalk.bgGrey.black(end)
    + '\n' + sep + '\n'.repeat(2)
);