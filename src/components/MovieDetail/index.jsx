import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Button";
import Spinner from "../Spinner";
import { omdbGetItem } from "../../services/omdb";

const MovieDetail = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { omdbId } = useParams();
  const [isFetching, setIsFetching] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await omdbGetItem({ apiUrl, apiKey, omdbId });
        setMovie(response);
        setIsFetching(false);
        console.log(response);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchData();
  }, []);

  return isFetching ? (
    <Spinner />
  ) : (
    <div className="flex flex-col my-6 mx-6 border-solid border-2 place-content-around content-center md:flex-row p-6 rounded-xl shadow-md gap-6">
      {/* Imagen de la carátula */}
      <div className="flex-shrink-0">
        <img
          src={movie.Poster}
          alt={`Poster de ${movie.Title}`}
          className="max-w-64 h-auto rounded-md shadow"
        />
      </div>

      {/* Detalles del lado derecho */}
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-2xl font-bold">
          {movie.Title} ({movie.Year})
        </h1>
        <p>
          <strong>Género:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Duración:</strong> {movie.Runtime}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Guionistas:</strong> {movie.Writer}
        </p>
        <p>
          <strong>Actores:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Idioma:</strong> {movie.Language}
        </p>
        <p>
          <strong>País:</strong> {movie.Country}
        </p>
        <p>
          <strong>Rating IMDB:</strong> {movie.imdbRating} ({movie.imdbVotes}{" "}
          votos)
        </p>
        <p>
          <strong>Metascore:</strong> {movie.Metascore}
        </p>
        <p>
          <strong>Premios:</strong> {movie.Awards}
        </p>
        <p>
          <strong>Box Office:</strong> {movie.BoxOffice}
        </p>
        <p>
          <strong>Sinopsis:</strong> {movie.Plot}
        </p>

        {/* Ratings por fuente */}
        <div>
          <strong>Ratings:</strong>
          <ul className="list-disc list-inside">
            {movie.Ratings?.map((rating, index) => (
              <li key={index}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
