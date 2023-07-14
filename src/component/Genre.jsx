import Movie from "./Movie.jsx";

function Genre({ genre, movie1, movie2 }) {
  // const { genre, movie1, movie2 } = props;

  let localGenre = genre;




  return (
    <div className="genre">
      <h1> Genre: {localGenre.genreName} </h1>
      {/* <h1> Genre: {genreName} </h1> */}
      <p> {localGenre.genreDescription} </p>
      <Movie title={movie1.movieTitle} year={movie1.movieYear} />
      <Movie title={movie2.movieTitle} year={movie2.movieYear} />
    </div>
  );
}

export default Genre;