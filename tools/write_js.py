"""
Write data/highlights.js 
- Read archive/ text files
- write highlights.js files (authors, books, highlights)
"""
import pathlib, sys
import configparser
import os, json

DIR = pathlib.Path(__file__).resolve().parent

config = configparser.ConfigParser()
config.read(DIR / '../config/config.ini')

BOOKS_JSON        = DIR / config['CONFIG']['BOOKS']
AUTHORS_JSON      = DIR / config['CONFIG']['AUTHORS']
HIGHLIGHTS_JSON   = DIR / config['DATA']['HIGHLIGHTS_JSON']
HIGHLIGHTS_JS     = DIR / config['DATA']['HIGHLIGHTS_JS']

with open(BOOKS_JSON) as f:
    books_js = 'let books = \n' + f.read() + ";\n\n"

with open(AUTHORS_JSON) as f:
    authors_js = 'let authors = \n' + f.read() + ";\n\n"

with open(HIGHLIGHTS_JSON) as f:
    highlights_js = 'let highlights = \n' + f.read() + ";\n\n"

print('Write highlights.js ...')
with open(HIGHLIGHTS_JS, 'w') as f:
    f.write(books_js + authors_js + highlights_js)

print('Done', '\n')