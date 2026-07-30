import { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"; 
import Movierow from "../components/Movierow";
// "./pages/Password"

function Dashboard() {

  const [movies, setMovies] = useState([]);
  const [darkmode, setDarkmode] = useState(true);
  const [language, setLanguage] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getMovies() {

      const response = await fetch(
        "https://jsonfakery.com/movies/paginated"
      );

      const data = await response.json();

      setMovies(data.data);
    }

    getMovies();

  }, []);
  console.log(movies);
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkmode(true);
    }

    if (savedTheme === "light") {
      setDarkmode(false);
    }

  }, []);
  const filteredMovies = movies.filter((movie) => {
    const languageMatch = language === "all" || movie.original_language === language;
    const searchMatch = movie.original_title.toLowerCase().includes(search.toLowerCase());
    return languageMatch && searchMatch;
  });

  // const filteredMovies = language === "all" ? movies : movies.filter((movie) => {
  //        return movie.original_language === language;
  // });

  return (
    <div className={darkmode ? "dark-theme" : "light-theme"}>
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode}
        language={language} setLanguage={setLanguage}
        search={search} setSearch={setSearch} />

      <Banner movies={filteredMovies} />

      {
        filteredMovies.length > 0 && (
          <>
            <Movierow
              title="Trending Now"
              movies={filteredMovies}
            />

            <Movierow
              title="Top 10 Movies"
              movies={filteredMovies}
            />
            <Movierow
              title="English Movies"
              movies={filteredMovies}
              cardWidth="300px"
              cardHeight="200px"
            />
          </>
        )
      }
    </div>
  );
}

export default Dashboard;




