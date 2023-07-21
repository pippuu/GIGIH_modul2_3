// import express
const express = require('express');

function setupRoutes(playlistController) {
    const router = express.Router();

    router.post('/song', (req, res) => {
        const song = req.body;
        playlistController.addSong(song.title, song.artists, song.url);
        res.json({ message: 'Song succesfully added to playlist' });
    })

    router.get('/song', (req, res) => {
        const sort = req.query.sort || "";
        const songs = playlistController.getAllSongs(sort);
        res.json(songs);
    })

    router.get('/song/:id', (req, res) => {
        const songID = req.params.id;
        const song = playlistController.getSong(songID);
        res.json(song);
    })

    router.get('/song/play/:id', (req, res) => {
        const songID = req.params.id;
        const msg = playlistController.playSong(songID);
        res.json({ message: msg});
    })
    return router;
}

module.exports = setupRoutes;