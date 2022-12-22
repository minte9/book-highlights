#!/usr/bin/python3

"""
Start server & Open URL

python startweb.py
    # Ctrl+C to kill the process

Alternatives
    php -S localhost:8000
    python3 -m http.server 8000 
    http://localhost:8000/public_html
"""

import os, sys, time, pathlib
import threading, webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

DIR = pathlib.Path(__file__).resolve().parent
os.chdir(DIR)

def start_server():
    httpd = HTTPServer(('127.0.0.1', 8080), SimpleHTTPRequestHandler)
    httpd.serve_forever()

threading.Thread(target=start_server).start()
webbrowser.open_new('http://127.0.0.1:8080/public_html/')

while True:
    try:
        time.sleep(1)
    except KeyboardInterrupt:
        sys.exit(0)