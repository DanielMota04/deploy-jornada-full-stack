import { artistArray} from "../../front-end/src/assets/database/artists.js"
import { songsArray} from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js"

const newArtistArray = artistArray.map((currArtistObj) => {
    const newArtistObj = {...currArtistObj}
    delete newArtistObj.id

    return newArtistObj
})

const newSongsArray = songsArray.map((currSongstObj) => {
    const newSongsObj = {...currSongstObj}
    delete newSongsObj.id

    return newSongsObj
})

const songsResponse = await db.collection("songs").insertMany(newSongsArray)
const artistsResponse = await db.collection("artists").insertMany(newArtistArray)


console.log(songsResponse)
console.log(artistsResponse)
