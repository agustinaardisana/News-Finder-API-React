import "./Header.scss";

const Header = ({
  handleChangeInput,
  handleClickHome,
  inputValue,
  handleClickSource,
}) => {
  return (
    <header>
      <h1 onClick={handleClickHome}>JOURNAL NEWS</h1>
      <nav>
        <ul>
          <li onClick={handleClickSource} id="google-news-ar">
            Google News
          </li>
          <li onClick={handleClickSource} id="la-gaceta">
            La Gaceta
          </li>
          <li onClick={handleClickSource} id="infobae">
            Infobae
          </li>
          <li onClick={handleClickSource} id="la-nacion">
            La Nación
          </li>
        </ul>
        <label>
          <input
            type="text"
            placeholder="Ingresa tu búsqueda"
            onChange={handleChangeInput}
            value={inputValue}
          ></input>
        </label>
      </nav>
    </header>
  );
};

export default Header;
