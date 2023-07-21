class Song {
    constructor(title, artists, url) {
        this.id = generateId();
        this.title = title;
        this.artists = artists;
        this.url = url;
        this.played = 0;
    }

    getSongTitle() {
        return this.title;
    }

    getSongUrl() {
        return this.url;
    }

    getCountSongPlayed() {
        return this.played;
    }

    songPlay() {
        this.played += 1;
    }

}

function generateId() {
    return Math.random().toString(36).substr(2,9);
}

module.exports = Song;