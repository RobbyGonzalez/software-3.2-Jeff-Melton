import Genre from './Genre.jsx';
import style from './Container.module.css';
import assets from '../assets.js';

let objGenre1 = {
  genreName: "Comedy",
  genreDescription: "These are movies that make liberal use of humor, slapstick, farce, and satire to allow the audience to laugh out loud. Good, classic comedies are watched again and again by those who love them.",
  genreIcon: assets.comedyIcon
}
let objGenre2 = {
  genreName: "Romance",
  genreDescription: "These are movies that have classic romantic love as an overarching theme. They may or may not feature the 'Classic Hollywood Happy Ending.' Many epic romance movies end tragically.",
  genreIcon: assets.romanceIcon
}

let objMovie1 = {
  movieTitle: "Caddyshack",
  movieYear: "1980",
  moviePoster: assets.posterCaddyshack
}
let objMovie2 = {
  movieTitle: "Office Space",
  movieYear: "1999",
  moviePoster: assets.posterOfficeSpace
}
let objMovie3 = {
  movieTitle: "An Officer And A Gentleman",
  movieYear: "1982",
  moviePoster: assets.posterAoaag
}
let objMovie4 = {
  movieTitle: "Titanic",
  movieYear: "1997",
  moviePoster: assets.posterTitanic
}




function Container() {
  return (
    <div className={style.container}>
      <Genre genre={objGenre1} movie1={objMovie1} movie2={objMovie2} />
      <Genre genre={objGenre2} movie1={objMovie3} movie2={objMovie4} />
    </div>
  );
};

export default Container;
