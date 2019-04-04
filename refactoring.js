var library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists: function () {
        var playlists = this.playlists;
        for (var key in playlists) {
            let output = `${key}: ${playlists[key]['name']} - ${playlists[key]['tracks'].length} tracks`
            console.log(output)
        }
    },
    printTracks: function () {
        var tracks = this.tracks;
        for (var key in tracks) {
            let output = `${key}: ${tracks[key]['name']} by ${tracks[key]['artist']} (${tracks[key]['album']})`
            console.log(output)
        }
    },
    printPlaylist: function (playlistId) {
        var playlist = this.playlists[playlistId];
        console.log(playlist["id"] + ":" + playlist["name"] + " - " + playlist["tracks"].length + " tracks")
        var tracks = library["tracks"];

        for (trackId of playlist["tracks"]) {
            let output = `${trackId}: ${tracks[trackId]['name']} by ${tracks[trackId]['artist']} (${tracks[trackId]['album']})`
            console.log(output)
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
    },
    uid : function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function (name, artist, album) {
        
        var newId = this.uid();
        var newTrack = {
            id: newId,
            name: name,
            artist: artist,
            album: album,
        }
        this.tracks[newId] = newTrack;
        return newId;
    },
    addPlaylist : function (name) {
        var newId = this.uid()
        var newPlaylist = {
            id: newId,
            name: name,
            tracks: [],
        }

        this.playlists[newId] = newPlaylist
        return newId;
    },

}
    // library.printPlaylists();
    // library.printTracks();
    // library.printPlaylist("p01");
// library.addTrackToPlaylist("t03", "p01")
let tId = library.addTrack("lose yourself", "Eminem", "Greatest Hits")
library.addTrack("Shallow", "Lady Gaga", "Greatest Hits")
library.printTracks();
let pId = library.addPlaylist("Gym")
library.addTrackToPlaylist(tId, pId)
// library.addPlaylist("Gym")
library.printPlaylists();
library.printPlaylist(pId);
// // FUNCTIONS TO IMPLEMENT:

// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks

// // var printPlaylists = function () {
// //     var tracks = library["tracks"];
// //     var playlists = library["playlists"];
// //     for (var key in playlists) {
// //         let output = `${key}: ${playlists[key]['name']} - ${playlists[key]['tracks'].length} tracks`
// //         console.log(output)
// //         // console.log(playlists[key]['tracks'].length)
// //     }
// // }
// // printPlaylists();
// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

// // var printTracks = function () {
// //     var tracks = library["tracks"];
// //     var playlists = library["playlists"];
// //     for (var key in tracks) {
// //         let output = `${key}: ${tracks[key]['name']} by ${tracks[key]['artist']} (${tracks[key]['album']})`
// //         console.log(output)
// //     }

// // }
// // printTracks();

// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)

// // var printPlaylist = function (playlistId) {
// //     var playlist = library["playlists"][playlistId];
// //     console.log(playlist["id"] + ":" + playlist["name"] + " - " + playlist["tracks"].length + "tracks")
// //     var tracks = library["tracks"];

// //     for (trackId of playlist["tracks"]) {
// //         let output = `${trackId}: ${tracks[trackId]['name']} by ${tracks[trackId]['artist']} (${tracks[trackId]['album']})`
// //         console.log(output)
// //     }
// // }
// // printPlaylist("p01");

// // 
// // adds an existing track to an existing playlist

// // var addTrackToPlaylist = function (trackId, playlistId) {
// //     var playlist = library["playlists"][playlistId].tracks.push(trackId);
// //     console.log(library["playlists"][playlistId].tracks)


// // addTrackToPlaylist("t03", "p01")


// // generates a unique id
// // (use this for addTrack and addPlaylist)

// var uid = function () {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// // adds a track to the library

// var addTrack = function (name, artist, album) {
//     var newId = "t04"
//     var newTrack = {
//         id: this.uid(),
//         name: name,
//         artist: artist,
//         album: album,
//     }

//     library["tracks"][newId] = newTrack

//  console.log(library["tracks"])
// }

// addTrack("lose yourself", "Eminem", "Greatest Hits")

// // adds a playlist to the library

// var addPlaylist = function (name) {
//     var newId = "p03"
//     var newPlaylist = {
//         id: this.uid(),
//         name: name,
//         tracks: ["t04"],
//     }

//     library["playlists"][newId] = newPlaylist

//     console.log(library["playlists"])
// }

// addPlaylist("p03")



// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function (query) {

// }