// import libraries
const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const PlaylistModel = require('./repository/playlist');
const SongModel = require('./repository/song');
const PlaylistService = require('./services/service');
const PlaylistController = require('./controllers/controller');
const setupRoutes = require('./routes/routes');

// create express app
const app = express();

// use bodyParser as middleware
app.use(bodyParser.json());

// create repo
const playlistModel = new PlaylistModel();
const songModel = new SongModel();

// create services 
const playlistService = new PlaylistService(playlistModel, songModel);

// create controller
const playlistController = new PlaylistController(playlistService);

// create routes
const router = setupRoutes(playlistController);

// set up routes
app.use('/api/playlist', router);

app.listen(config.server.port, () => {
    console.log(`Connected to port ${config.server.port}`);
})
