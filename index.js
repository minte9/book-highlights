#!/usr/bin/env node

/**
 * Get one random book highlight 
 */
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from "module";
import { symlinkSync } from 'fs';

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

const myArgs = process.argv.slice(2);
switch(myArgs[0]) {
    case '-h':
        help();
        break;
    case '-l':
        list_books();
        break;
    default:
        keypress_listener();
        show_rand(myArgs[0]);  
}

function keypress_listener() {
    let readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
        //console.log('keypress', ch, key);
        switch(key.name) {
            case 'space':
                show_rand(myArgs[0]); break;
            case 'f1':
                help(); break;
            case 'f1':
                books_list(); break;
            case 'c':
                if (key.ctrl) process.exit(0);
            default:
        }
    });
    process.stdin.setRawMode(true);
    process.stdin.resume();
}

function help() {
    console.log('\nOptions:');
    console.log("./index.js -l \t |show books list");
    console.log("./index.js id \t |show book by ID (number)");
    console.log("./index.js -h \t |help\n");
    console.log('Shortcuts:');
    console.log("Ctrl+C \t\t |stop the program");
    console.log("Space \t\t |continue to next");
    console.log("F1 \t\t |help");
    console.log("F2 \t\t |books list");
    console.log();
    process.exit(0);
}

function books_list() {
    BOOKS.forEach( book => {
        console.log(`(${book.id}) ` + book.title);
    });
    process.exit(0);
}

function show_rand(ID) {

    const rand = Math.random();

    let i = ID ? ID-1 : Math.floor(rand * BOOKS.length);
    let book = BOOKS[i];

    let H = HIGHLIGHTS.filter(x => x.name == book.title);
    H = H[0].children;

    const author = AUTHORS.filter(x => x.name == H[0].name)[0];

    H = H[0].children;
    const j = Math.floor(rand * H.length);
    const highlight = H[j];

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
        + '\n' + sep 
        + '\n' + chalk.grey("Space / Ctrl+C / F1 / F2\n")
        + '\n'.repeat(2)
    );
}