"""Write highligts texts:
Read from images directory, convert image to text, write text files.
"""
import sys, os, pathlib
import cv2, pytesseract, numpy as np
import logging
import re
sys.dont_write_bytecode = True

"""Config ini called in update.py (or directly)
"""
try:
    from tools import config as config
except:
    import config as config

DIR             = pathlib.Path(__file__).resolve().parent
REWRITE         = config.cfp['FLAG']['REWRITE'] # Overwrites .txt files
DEBUG           = config.cfp['FLAG']['DEBUG'] # Display logging messages
FILES           = config.cfp['DATA']['FILES']

logging.basicConfig(level=logging.DEBUG, 
    format='\x1b[6;30;42m' + '%(levelname)s - %(message)s' + '\x1b[0m' + '\n')
logging.disable(logging.DEBUG) if DEBUG == 'False' else None

print('\nRewrite: %s' % REWRITE)


"""Get highlighted text image:
Yellow mask and gaussian blur
"""
def imread_highlighted(img):
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower = np.array([22, 93, 0])
    upper = np.array([45, 255, 255])
    mask = cv2.inRange(hsv, lower, upper)
    res2 = cv2.bitwise_not(mask)
    res2 = cv2.GaussianBlur(res2, (3,3), 0) # reduce noise
    return res2


"""Replace highlighted text:
Add <i></i> at start/end
"""
def highlighted_replaced(img, img2):
    text = pytesseract.image_to_string(img).strip()
    highlighted = pytesseract.image_to_string(img2).strip()
    text, highlighted = adjust(text, highlighted)

    start = highlighted[0:10].strip() # start of highlighted text
    end = highlighted[-10:].strip()

    replaced = text.replace(start, '<i>%s' % start)
    replaced = replaced.replace(end, '%s</i>' % end)

    try:
        assert (start in text), '<%s> not in text' % start
        assert (end in text), '<%s> not in text' % end
    except AssertionError as e:
        logging.error(f"""
            AssertionError: \n {e} \n 
            Text: \n {text}
            Hightlight: \n{highlighted}
        """)
        return None

    return replaced


"""Adjust highlighted text:
Correct cv2 image reading errors and exceptions
"""
def adjust(text, highlighted):
    text = '\n'.join(text.split('\n\n')) # remove double new lines
    highlighted = '\n'.join(highlighted.split('\n\n'))

    highlighted = highlighted.replace('T ', 'I ') # wrong I detection
    highlighted = highlighted.replace('[ ', 'I ') # wrong I detection

    pattern = re.compile(r', ([A-Z])') # wrong , end of propostion (remove)
    text = pattern.sub(r'. \1', text)
    highlighted = pattern.sub(r'. \1', highlighted)
    
    pattern = re.compile(r',$') # wrong , end of propostion
    highlighted = pattern.sub('', highlighted) # remove

    pattern = re.compile(r"'") # apostrophe
    highlighted = pattern.sub('’', highlighted)

    return text, highlighted


"""Loop through archive .png images:
Add texts folder if not exists.
Write .txt files
Add time delay (to protect CPU resources)
If Rewrite flag is false, only new files will be processed.
"""
print('Write .txt files ...')
n = 0; errors = 0
for root, dirs, files in os.walk(DIR / FILES):
        
    for file in files:

        if not file.endswith('.png'):
            continue

        img = cv2.imread(root + "/" + file)
        img2 = imread_highlighted(img)

        fileTxt = file.replace(".png", ".txt")
        pathTxt = root + '/' + fileTxt
        
        if REWRITE == 'False':
            if os.path.exists(pathTxt):
                continue
        
        with open(pathTxt, 'w') as f:
            print(fileTxt)

            replaced = highlighted_replaced(img, img2)
            if replaced != None:
                f.write(replaced)
                n += 1
            else:
                errors += 1

        # time.sleep(1/5)


"""Display final result:
For errors the text is displayed on console (loggin Error level)
"""
print('Images processed: %s' % n)
print('Errors: %s' % errors)
print('Done', '\n')