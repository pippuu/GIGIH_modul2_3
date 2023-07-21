const songModel = require('./song');

class Playlist {
    constructor() {
        this.playlist = [];
    }

    getAllSongs(sort) {
        let sortedPlaylist = [...this.playlist]; 
        switch(sort) {
            case "asc": 
                bubbleSortAsc(sortedPlaylist)
                return sortedPlaylist;
                break;
            case "desc":
                
                bubbleSortDesc(sortedPlaylist)
                return sortedPlaylist;
                break;
            default:
                return this.playlist;
          }
    }

    getSong(songID) {
        return this.playlist.find((song) => song.id === songID);
    }

    addSong(title, artists, url) {
        const song = new songModel(title, artists, url);
        this.playlist.push(song);
    }

    getCountPlayedAllSongs() {
        let songs = [];
        for (const song in playlist) {
            songs.push({
                title: song.title,
                counts: song.played
            })
        }
        return songs;
    }
}

function bubbleSortDesc(arr)
{
    let i, j, temp;
    let swap;
    const n = arr.length;
    for (i = 0; i < n - 1; i++) 
    {   
        swap = false;
        for (j = 0; j < n - i - 1; j++) 
        {   
            if (arr[j].getCountSongPlayed() > arr[j + 1].getCountSongPlayed()) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (swap == false)
        break;
    }
}

function bubbleSortAsc(arr)
{
    let i, j, temp;
    let swap;
    const n = arr.length;
    for (i = 0; i < n - 1; i++) 
    {   
        swap = false;
        for (j = 0; j < n - i - 1; j++) 
        {   
            if (arr[j].getCountSongPlayed() < arr[j + 1].getCountSongPlayed()) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (swap == false)
        break;
    }
}



module.exports = Playlist;