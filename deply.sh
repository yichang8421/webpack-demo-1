yarn build &&
git checkout gh-pages &&
#rm -rf src *.js *.json yarn.lock;
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;

git add . &&
git commit -m 'autoUpdate' &&
#git push &&
git checkout -;