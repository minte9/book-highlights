"""Copy public_html/ to localhost www/
"""
import pathlib, shutil
from tools import config

DIR = pathlib.Path(__file__).resolve().parent
SRC = DIR / config.cfp['PUBLIC']['SRC']
DST = DIR / config.cfp['PUBLIC']['DST']

print('Copy public_html/')
try:
    shutil.copytree(DIR / SRC, DST, dirs_exist_ok=True)
    print('Done')
except:
    print('\nError: DST folder not found on your local system')
    print('\t %s \n' % DST) 
    print('Change config/config_my.ini DST')