const News = () => {
  return (
    <div className="container main mt-3">
      <h2>Novità</h2>
      <hr />
      <div className="d-flex justify-content-between">
        <div className=" singleNews">
          <h6 className="radiosParag">NUOVA STAZIONE RADIO</h6>
          <p className="radiosParag2">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill.
          </p>
          <img
            src="../src/assets/images/1a.png"
            alt=""
            className=" rounded-4 "
          />
        </div>
        <div className=" singleNews">
          <h6 className="radiosParag">NUOVA STAZIONE RADIO</h6>
          <p className="radiosParag2">
            Ecco la nuova casa della musica latina.
          </p>
          <img
            src="../src/assets/images/1b.png"
            alt=""
            className=" rounded-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default News;
