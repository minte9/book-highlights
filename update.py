#!/usr/bin/env python3
import sys
sys.dont_write_bytecode = True

from tools import config as config
from tools import img2txt
from tools import write_json

if (config.cfp['PUBLIC']['COPY_FOLDER'] == 'True'):
    from tools import write_public