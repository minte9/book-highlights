#!/usr/bin/env python3
"""
Your highlights:

1) Copy config.sample.ini content to config.ini file
2) Save screenshots in .png format to my_books/ folder
3) Install python libraries: tesseract & opencv
4) Run update script

cd book-highlights/

pip install --user opencv-python
pip show opencv-python

sudo apt-get update
sudo apt-get install tesseract-ocr
sudo apt-get install libtesseract-dev

pip install pytesseract
pip show pytesseract

python update.py
node index.js
"""

import sys
sys.dont_write_bytecode = True

from tools import config
from tools import img2txt
from tools import write_json

if (config.ini['PUBLIC']['COPY_FOLDER'] == 'True'):
    from tools import write_public