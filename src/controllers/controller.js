class PlaylistController {
    constructor(playlistService) {
        this.playlistService = playlistService;
    }

    getAllSongs(sort) {
        return this.playlistService.getAllSongs(sort);
    }

    getSong(songID) {
        return this.playlistService.getSongByID(songID);
    }

    addSong(title, artists, url) {
        this.playlistService.addSong(title, artists, url);
    }

    playSong(songID) {
        return this.playlistService.playSong(songID);
    }
}

module.exports = PlaylistController;