# Deployment - initial
Python, Git, Node, PM2, and Nginx should be installed. Pyenv recommended.

Install node packages
```
npm i
```
Build css files
```
npm run build-css
```
Create Python virtual environment and install packages
```
pipenv install
```
Start and monitor Flask server with PM2. If you want a path prefix in the url, add `--env SCRIPT_NAME=/portfolio` after gunicorn.
```
pm2 --name=portfolio start "cd ~/portfolio && pipenv run gunicorn --bind 0.0.0.0:5000 wsgi:application"
```

# Deployment - update server after changes
Navigate to `/portfolio`
```
git pull
npm run build-css
pm2 restart portfolio
```

# Attributions
Photo by <a href="https://unsplash.com/@szamanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Piotr Musioł</a> on <a href="https://unsplash.com/s/photos/silicon-valley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>