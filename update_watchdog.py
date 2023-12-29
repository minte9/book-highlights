from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from subprocess import Popen
import subprocess
import time

import pathlib
DIR = pathlib.Path(__file__).resolve().parent
PATH = DIR / 'files_archive/minte9/'

class MyHandler(FileSystemEventHandler):

    def update(self):
        subprocess.run(['python3', DIR / 'update.py'])
        Popen([DIR / 'update_repo.sh']) # chmod +x update_repo.sh

    def on_created(self, event):
        print("File CREATED:", event.src_path)
        self.update()

    def on_modified(self, event):
        print("File MODIFIED:", event.src_path)
        self.update()

event_handler = MyHandler()
observer = Observer()
observer.schedule(event_handler, path=PATH, recursive=True)
observer.start()

try:
    while True:
        print('Watching...')
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()

observer.join()