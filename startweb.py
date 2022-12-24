#!/usr/bin/python3

"""
Start server & Open URL

python startweb.py
    # Ctrl+C to kill the process

Alternatives
    php -S localhost:8080
    python -m http.server --bind localhost 8080
    http://localhost:8000/public_html
"""

import os, sys, time, pathlib
import threading, webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

DIR = pathlib.Path(__file__).resolve().parent
os.chdir(DIR)

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'cache-control')
        SimpleHTTPRequestHandler.end_headers(self)

def start_server():
    httpd = HTTPServer(("", 8080), CORSRequestHandler)
    httpd.serve_forever()

threading.Thread(target=start_server).start()
webbrowser.open_new('http://127.0.0.1:8080/public_html/')

while True:
    try:
        time.sleep(1)
    except KeyboardInterrupt:
        sys.exit(0)