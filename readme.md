# CSSA WEBSITE SAMPLE #

This repository holds LSU CSSA Sample Website project based on [django](https://www.djangoproject.com/), [react](https://reactjs.org/) and [mysql](https://www.mysql.com/).

## Test ##

To debug the website, [python](https://www.python.org/) and [nodejs](https://nodejs.org/en/) are required, and [yarn](https://yarnpkg.com/en/) is optional. Install dependencies by following commands 

    sudo pip install -r requirements.txt
    cd js
    yarn install

To debug, build javascript bundle by

    yarn build:dev

Then, run django

    cd ..
    python manage.py runserver

## Deployment ##

To deploy the website, [nginx](https://www.nginx.com/) or [apache](http://httpd.apache.org/) is required and set django into production mode, build javascript bundle by production mode in js folder

    yarn build
