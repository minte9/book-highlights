#!/bin/bash

echo "GITHUB book-highlights"
REPO_DIR="/var/www/refresh.local/refresh.ro/Application/github/book-highlights/"
GIT=`which git`
cd ${REPO_DIR}

${GIT} pull origin main
${GIT} status
${GIT} add .
${GIT} commit -a -m "upgrade"
${GIT} push origin main