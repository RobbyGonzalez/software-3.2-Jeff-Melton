function Movie({ title, year }) {
  // const { title, year } = props;
  let movieTitle = title + " (" + year + ")";
  return (
    <div>
      <h1> {movieTitle} </h1>
    </div>
  );
}

export default Movie;