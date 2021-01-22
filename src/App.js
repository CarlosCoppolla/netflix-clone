import React from "react";
import "./App.css";
import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="Originais do Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Bombando no momento" fetchUrl={requests.fetchTrending} />
      <Row title="Em alta" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
