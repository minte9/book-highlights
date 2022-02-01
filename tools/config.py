import os
import configparser

DIR = os.path.dirname(os.path.realpath(__file__))

ini = configparser.ConfigParser()
ini.read(DIR + '/../config/config.ini')

cfp = configparser.ConfigParser()
cfp.read(DIR + '/../' + ini['CURRENT']['FILE'])