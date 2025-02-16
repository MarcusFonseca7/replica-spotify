import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:8080/api";
const URL = "https://replica-spotify-dw72.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
