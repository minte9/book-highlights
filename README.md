# Book Highlights

Highlights archive from books [screenshots](https://github.com/minte9/book-highlights/tree/main/files_archive/my_books/book1/author1) images

## Install

~~~sh
git clone https://github.com/minte9/book-highlights.git
cd book-highlights/

# dependencies
npm install chalk boxen
~~~

## Run

~~~sh

node .

# node index.js
# ./index.js
~~~

[![Terminal](https://www.minte9.com/lib/images/github/book-highlights/highlight_02.png)](https://www.minte9.com)


## Browser

[![Browser](https://www.minte9.com/lib/images/github/book-highlights/m9_08.png)](https://www.minte9.com)

~~~sh
<iframe src="/book-highlights/public_html/index.htm" 
  width=450 height=350 frameborder=0 scrolling=no>
</iframe>
~~~

See it in action on [minte9.com](https://www.minte9.com)

##

## Updates

~~~sh
cd book-highlights/
git pull origin main
~~~

## Command

Install as command line application and run from anywhere.

~~~sh
cd book-highlights/
npm install -g .

book-hightlights
~~~

## Custom

Copy [config.sample.ini](https://github.com/minte9/book-highlights/tree/main/config/config.sample.ini) content to config.ini file.  
Save your screenshots images to [my_books/](https://github.com/minte9/book-highlights/tree/main/files_archive/my_books).  
Install cv2 and [tesseract](https://towardsdatascience.com/read-text-from-image-with-one-line-of-python-code-c22ede074cac), then run update.py script.  

~~~sh
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
~~~

