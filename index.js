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

var curr_catg = 'programming';

/**
 *  Command line arguments
 */
const myArgs = process.argv.slice(2);
switch(myArgs[0]) {
    case '-h':
        help();
        break;
    case '-c':
        curr_catg = myArgs[1] ?? curr_catg;
        keypress_listener();
        show_rand();
        delete myArgs[0];
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
            case 'escape':
                help(); 
                books_list();
                break;
            case 'c':
                if (key.ctrl)
                    process.exit(0);
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
    const msg = ''
        + '\n' + chalk.redBright('Run')
        + '\n' + './index.js '
        + '\n'
        + '\n' + chalk.redBright('Options')
        + '\n' + "-h         |help"
        + '\n' + "id         |show book by ID (number)"
        + '\n' + "-c catg    |show highlights from category"
        + '\n'
        + '\n' + chalk.redBright('Shortcuts')
        + '\n' + "Space \t |continue to next (Enter)"
        + '\n' + "Escape \t |help"
        + '\n' + "Ctrl+C \t |stop the program"
        + '\n'
    ;
    console.log(msg);
    //process.exit(0);
}

/**
 * Action: Show book lists
 */
function books_list() {
    console.log(chalk.redBright("Books"));
    BOOKS.forEach( book => {
        console.log(`(${book.id}) ` + book.title);
    });
    console.log();
    
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

    let book;
    let author;

    if (book_id) {
        book = BOOKS.filter(x => x.id == book_id)[0];
        author = AUTHORS.filter(x => x.bookId == book_id)[0];
    } else {
        const catgAuthors = AUTHORS.filter(x => x.catg.includes(curr_catg + "|"));
        const bookIds = catgAuthors.map(x => { return x.bookId } );
        const catgBooks = BOOKS.filter(x => bookIds.includes(x.id));
        const index = book_id ? book_id-1 : Math.floor(rand * catgBooks.length);

        book = catgBooks[index];
        author = catgAuthors.filter(x => x.bookId == book.id)[0];
    }

    let H = HIGHLIGHTS.filter(x => x.name == book.title);
    H = H[0].children;

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
    console.log(boxen(msg, {
        margin: 1,
        padding: 1,
        borderStyle: 'round',
        borderColor: 'black',
    }));
    console.log(''
        + ' '.repeat(7)
        + chalk.gray("Enter") + ' '.repeat(2)
        + chalk.gray("Esc") + ' '.repeat(2)
        + chalk.gray("Ctrl+C") + ' '.repeat(2)
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