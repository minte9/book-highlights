#!/usr/bin/env node

/**
 * Get one random book highlight 
 */
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from "module";
import * as fs from "fs";
import boxen from 'boxen';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename) + "/";

const CONFIG = parseINIString(fs.readFileSync(__dirname + '/config/config.ini', 'utf8'));

const AUTHORS       = require(CONFIG['DATA']['AUTHORS'].replace("../", __dirname));
const BOOKS         = require(CONFIG['DATA']['BOOKS'].replace("../", __dirname));
const HIGHLIGHTS    = require(CONFIG['DATA']['HIGHLIGHTS'].replace("../", __dirname));

/**
 *  Command line arguments
 */
const myArgs = process.argv.slice(2);
switch(myArgs[0]) {
    case '-h':
        help();
        break;
    case '-l':
        books_list();
        break;
    default:
        keypress_listener();
        show_rand(myArgs[0]);  
        
}

/**
 * Shorcuts listener
 */
function keypress_listener() {
    let readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
            // console.log('keypress', ch, key);
        switch(key.name) {
            case 'space':
            case 'return':
                show_rand(myArgs[0]); 
                break;
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

/**
 * Action: Help
 */
function help() {
    console.log();
    console.log(chalk.redBright('Run'));
    console.log('./index.js ');
    console.log();
    console.log(chalk.redBright('Options'));
    console.log("-l \t |show books list");
    console.log("no \t |show book by ID (number)");
    console.log("-h \t |help");
    console.log();
    console.log(chalk.redBright('Shortcuts'));
    console.log("Ctrl+C \t |stop the program (Esc)");
    console.log("Space \t |continue to next (Return)");
    console.log("F1 \t |help");
    console.log();
    //process.exit(0);
}

/**
 * Action: Show book lists
 */
function books_list() {
    console.log(chalk.redBright(' '.repeat(2) + "Books"));
    BOOKS.forEach( book => {
        console.log(' '.repeat(2) + `(${book.id}) ` + book.title);
    });
    console.log();
    //process.exit(0);
}

/**
 * Action: Show random highlight
 * 
 * param: book id
 */
function show_rand(book_id) {
    const rand = Math.random();

    let index = book_id ? book_id-1 : Math.floor(rand * BOOKS.length);
    let book = BOOKS[index];

    let H = HIGHLIGHTS.filter(x => x.name == book.title);
    H = H[0].children;

    const author = AUTHORS.filter(x => x.name == H[0].name)[0];

    H = H[0].children;
    const j = Math.floor(rand * H.length);
    const highlight = H[j];

    const splits = highlight.text.split(/<\/?i>/);
    let start = ' '.repeat(2) + splits[0];
    let highlighted = ' ' + splits[1] + ' ';
    let end = splits[2];

    start = start.replace(/\n/g, (' '.repeat(2) + '\n') + ' '.repeat(2));
    highlighted = highlighted.replace(/\n/g, (' '.repeat(2) + '\n') + ' '.repeat(2));
    end = end.replace(/\n/g, (' ' + '\n' + ' '));

    let msg = ''
        + chalk.greenBright(author.name + ', ')
        + chalk.redBright(book.title + '')
        + '\n\n'
        + chalk.bgGrey.black(start)
        + chalk.bgYellowBright.black(highlighted)
        + chalk.bgGrey.black(end)
    ;
    msg = msg.replace(/’/g, "'"); // some chars breaks boxen with
    msg = msg.replace(/”/g, "\"");
    msg = msg.replace(/“/g, "\"");
    msg = msg.replace(/—/g, "-");
    msg = msg.replace(/‘/g, "-");

    msg = msg.replace("(ninja code :)", chalk.bgBlack.gray(" ninja code :)"));

    console.log('\n'.repeat(15));  
    console.table(boxen(msg, {
        margin: 1,
        padding: 1,
        borderStyle: 'round',
        borderColor: 'black',
    }));
    console.log(''
        + ' '.repeat(7)
        + chalk.gray("Enter") + ' '.repeat(2)
        + chalk.gray("Esc") + ' '.repeat(2)
        + chalk.gray("F1") + ' '.repeat(2)
        + chalk.gray("F2") + ' '.repeat(2)
    );
    console.log('\n'.repeat(2));
}

/**
 * Config ini file parser
 */
function parseINIString(data){
    const regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    let value = {};
    const lines = data.split(/[\r\n]+/);
    var section = null;
    lines.forEach(function(line) {
        if(regex.comment.test(line)) {
            return;
        } else if(regex.param.test(line)) {
            let match = line.match(regex.param);
            if(section) {
                value[section][match[1]] = match[2];
            } else {
                value[match[1]] = match[2];
            }
        } else if(regex.section.test(line)) {
            let match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        } else if(line.length == 0 && section) {
            section = null;
        };
    });
    return value;
}