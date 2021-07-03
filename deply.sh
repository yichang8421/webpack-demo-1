yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;

# 以下命令执行报错
# error: open("deply.sh"): Permission denied 
# error: unable to index file 'deply.sh'
# fatal: adding files failed
# 原因不明
git add . &&
git commit -m 'update' &&
git push && 
git checkout -