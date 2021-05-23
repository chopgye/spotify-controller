# Spotify Music Controller

## About 
This is a music controller app that utilzies django REST framework on the backend and React NodeJS on the frontend. It allows users to a join a shared room based on a randomly generated room code. The host can connect to the their spotify account via spotify API and play music in a room. The room members can pause/play and skip songs by voting based on the room setting specification set by the host. However the actual audio playback is played from everyone's individual spotify account. 

## Installation
Method 1:
```bash
$ python manage.py migrate
$ python manage.py runserver

$ npm run dev 
```
\* make sure database exists before migrating

Method 2: Docker 
```bash
$ docker-compose up -d --build
$ docker-compose exec web python manage.py migrate
```

## Demo
![Project demo](https://github.com/chopgye/spotify-controller/blob/master/music_player_demo.gif?raw=true)

## Technology 
* Django / Python
* React
* Node JS
* PostgresSQL
* HTML
* CSS
* DjangoREST framework
* Materail-UI
* Webpack
* Babel
* React-Router-Dom
* DjangoORM
* SpotifyAPI
* Docker