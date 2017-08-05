git init
git add *
git commit -m "commit $(date +%Y%m%d-%H%M%S)"
git remote add origin https://github.com/mbenedicto99/website.express.git
git push -u origin master
