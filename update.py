#!/usr/bin/env python3
import sys
sys.dont_write_bytecode = True

from tools import config
from tools import img2txt
from tools import write_json

if (config.ini['PUBLIC']['COPY_FOLDER'] == 'True'):
    from tools import write_public