#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git config user.name 'pushaosen'
git config user.email '2035311275@qq.com'
git add -A
git commit -m 'deploy'

# git push -f git@github.com:wentiansky/document.git master:gh-pages
git push -f https://github.com/pushaosen/document.git master:gh-pages

cd -