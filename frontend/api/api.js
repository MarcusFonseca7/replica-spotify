import axios from "axios";

const URL = "http://localhost:8080";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
