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
    console.log('Empty data/ folder. \nRename data_sample -> data');
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
            // console.log('keypress', ch, key);
        switch(key.name) {
            case 'space':
            case 'return':
                show_rand(myArgs[0]); break;
            case 'f1':
                help(); break;
            case 'f2':
                books_list(); break;
            case 'escape':
                process.exit(0);
            case 'c':
                if (key.ctrl) process.exit(0);
            default:
        }
    });
    process.stdin.setRawMode(true);
    process.stdin.resume();
}

function help() {
    console.log();
    console.log(chalk.redBright('Run:'));
    console.log('./index.js ');
    console.log();
    console.log(chalk.redBright('Options:'));
    console.log("-l \t |show books list");
    console.log("no \t |show book by ID (number)");
    console.log("-h \t |help");
    console.log();
    console.log(chalk.redBright('Shortcuts:'));
    console.log("Ctrl+C \t |stop the program (Esc)");
    console.log("Space \t |continue to next (Return)");
    console.log("F1 \t |help");
    console.log("F2 \t |books list");
    console.log();
    process.exit(0);
}

function books_list() {
    console.log("Books list:");
    BOOKS.forEach( book => {
        console.log(`(${book.id}) ` + book.title);
    });
    console.log();
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
        + chalk.redBright(book.title + ', ')
        + chalk.grey("Space / Ctrl+C / F1 / F2")
        + '\n' + sep
    );
    console.table(''
        + chalk.bgGrey.black(start)
        + chalk.bgYellowBright.black(highlighted)
        + chalk.bgGrey.black(end)
        + '\n' + sep 
        + '\n'.repeat(2)
    );
}

