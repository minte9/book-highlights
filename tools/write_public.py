"""Copy public_html/
TODO: add git ignore
"""
import pathlib, shutil
import configparser

DIR = pathlib.Path(__file__).resolve().parent

config = configparser.ConfigParser()
config.read(DIR / '../config/config.ini')

SRC = DIR / config['PUBLIC']['SRC']
DST = DIR / config['PUBLIC']['DST']

print('Copy public_html/')
try:
    shutil.copytree(DIR / SRC, DST, dirs_exist_ok=True)
    print('Done')
except:
    print('\nError: public_html/ not found on you local system')
    print('Change config.ini settings')