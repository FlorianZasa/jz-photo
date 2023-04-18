#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'new deployment'
git push -f git@github.com:FlorianZasa/jz-photo.git master:gh-pages

cd -