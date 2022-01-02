"""
Write data/highlights.js 
- Read archive/ text files
- write .json + .js files
- Run image2text.py first when new screenshots where added
"""
import pathlib, sys
import configparser
import os, json

DIR = pathlib.Path(__file__).resolve().parent

config = configparser.ConfigParser()
config.read(DIR / '../config/config.ini')

TEXTS_DIR         = DIR / config['DATA']['FILES']
HIGHLIGHTS_JSON   = DIR / config['DATA']['HIGHLIGHTS']

def get_dict(path):
    d = {'name': os.path.basename(path)}
    if os.path.isfile(path):
        if not path.endswith('.txt'):
            d.pop('name') # {} value
        else:
            with open(path) as t:
                d['text'] = t.read() 
    if os.path.isdir(path):
        d['children'] = [
            get_dict(os.path.join(path, x)) for x in os.listdir(path)
        ]
        d['children'] = list(filter(None, d['children'])) # remove {} values
    return d

def sorted_dict(data, sort_by):
    data = sorted(data, key=lambda x: x[sort_by])
    for item in data:
        if 'children' in item:
            item['children'] = sorted_dict(item['children'], sort_by)
    return data

print('Write highlights.json ...')
with open(HIGHLIGHTS_JSON, 'w') as f:
    data = get_dict(TEXTS_DIR)['children']
    data = sorted_dict(data, 'name')
    json.dump(data, f, indent=4, ensure_ascii=True)

print('Done', '\n')