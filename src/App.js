import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [newsArticles, setnewsArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [home, setHome] = useState(true);
  const [source, setSource] = useState("");

  useEffect(() => {
    const apiKey = `apiKey=836b0561b78e4d0b9b6da8e3c93a7c55`;
    const baseURL = `https://newsapi.org/v2/`;
    const topHeadlines = home ? `top-headlines?country=ar&` : "";
    const searchQuery = search ? `everything?q=${search}&` : "";
    const sourceName = source ? `top-headlines?sources=${source}&` : "";
    const finalURL = `${baseURL}${topHeadlines}${searchQuery}${sourceName}${apiKey}`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnewsArticles(data.articles);
      });
  }, [search, home, source]);

  const handleChangeInput = (e) => {
    setHome(false);
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleClickHome = () => {
    setHome(true);
    setSearch("");
  };

  const handleClickSource = (e) => {
    setHome(false);
    setSource(e.target.id);
  };

  return (
    <main>
      <Header
        handleChangeInput={handleChangeInput}
        inputValue={search}
        handleClickHome={handleClickHome}
        handleClickSource={handleClickSource}
      />
      <section className="news--section">
        <Card newsArticles={newsArticles} />
      </section>
    </main>
  );
};

export default App;
