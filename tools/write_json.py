"""
Write data/highlights.js 
- Read archive/ text files
- write .json + .js files
- Run image2text.py first when new screenshots where added
"""
import pathlib
import os, json
import sys
sys.dont_write_bytecode = True

"""Config ini called in update.py
The script can run directly
"""
try:
    from tools import config
except:
    import config

DIR                 = pathlib.Path(__file__).resolve().parent
TEXTS_DIR           = DIR / config.ini['DATA']['FILES']
HIGHLIGHTS_JSON     = DIR / config.ini['DATA']['HIGHLIGHTS']

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
    i = 0 
    for book in data:
        for author in book['children']:
            for item in author['children']:
                i = i + 1
                item['name'] = ' '.join(item['name'].split('_')[1:]).replace('.txt', '')
                item['name'] = item['name'][0].upper() + item['name'][1:]
                item['id'] = i
    json.dump(data, f, indent=4, ensure_ascii=True)

print('Done', '\n')