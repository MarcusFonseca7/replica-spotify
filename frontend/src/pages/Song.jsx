import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id;

  return (
    <section className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`}>
            <img
              src={artistObj.image}
              alt={`Imagem do Artista ${artist}`}
              width={75}
              height={75}
            />
          </Link>
        </div>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtist2={randomIdFromArtist2}
          audio={audio}
        />

        <div className="song-info">
          <p className="song-name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </section>
  );
};

export default Song;
