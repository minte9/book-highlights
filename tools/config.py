import pathlib
import configparser

DIR = pathlib.Path(__file__).resolve().parent

cfp = configparser.ConfigParser()
cfp.read(DIR / '../config/config_m9.ini') 
# cfp.read(DIR / '../config/config_my.ini') # LOOK HERE