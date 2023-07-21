class PlaylistService {
    constructor(playlistModel, songModel) {
        this.playlistModel = playlistModel;
    }

    getAllSongs(sort) {
        return this.playlistModel.getAllSongs(sort);
    }

    getSongByID(songID) {
        return this.playlistModel.getSong(songID);
    }

    addSong(title, artists, url) {
        this.playlistModel.addSong(title, artists, url);
    }

    playSong(songID) {
        let song = this.playlistModel.getSong(songID);
        song.songPlay();

        const title = song.getSongTitle();
        const url = song.getSongUrl();
        return `Listening to ${title} on ${url}.`
    }
}

module.exports = PlaylistService;
