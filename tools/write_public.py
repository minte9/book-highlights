"""Copy public_html/ to localhost www/
"""
import pathlib
import shutil
import sys
sys.dont_write_bytecode = True

"""Config ini called in update.py
The script can run directly
"""
try:
    from tools import config
except:
    import config

DIR = pathlib.Path(__file__).resolve().parent
SRC = DIR / config.ini['PUBLIC']['SRC']
DST = DIR / config.ini['PUBLIC']['DST']

print('Copy public_html/')
try:
    shutil.copytree(DIR / SRC, DST, dirs_exist_ok=True)
    print('Done')
except:
    print('\nError: DST folder not found on your local system')
    print('\t %s \n' % DST) 
    print('Change config/config_my.ini DST')