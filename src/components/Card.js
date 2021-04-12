import "./Card.scss";
import imgNotAvailable from "../assets/imagen-no-disponible.png";

const Card = ({ newsArticles }) => {
  return (
    <>
      {newsArticles.map((newsArticle, i) => {
        const pubDate = new Date(newsArticle.publishedAt);
        return (
          <article key={`idCard-${i}`}>
            <img src={newsArticle.urlToImage || imgNotAvailable} alt=""></img>
            <div>
              <div>
                <h5>{newsArticle.source.name || newsArticle.author}</h5>
                <p>{pubDate.toLocaleString() || "Fecha no disponible"}</p>
              </div>
              <h4>{newsArticle.title}</h4>
              <p>{newsArticle.description}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Card;
