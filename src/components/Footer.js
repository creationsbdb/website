export default function Header(props) {
  return (
    <footer className="footer">
      <div className="divider"></div>
      <div className="row">
        <div className="column">
          <a href="/catalog">
            <p>Catalogue</p>
          </a>
          <a href="/content/commander">
            <p>Commander</p>
          </a>
          <a href="/content/qui-suis-je">
            <p>Qui suis-je</p>
          </a>
          <a href="/blog">
            <p>Blog</p>
          </a>
        </div>
        <div className="column">
          <a rel="nofollow" href={props.facebook}>
            <p>Facebook</p>
          </a>

          <a rel="nofollow" href={props.instagram}>
            <p>Instagram</p>
          </a>
          <a
            rel="nofollow"
            href={
              'mailto:' + props.email + '?subject=[creationsbdb]%20question'
            }
          >
            <p>Contact</p>
          </a>
        </div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="row bottom">
        {'Site sous licence MPL-v2, créé en 2020 par '}
        <a rel="nofollow" href="https://github.com/oteku">
          {' Thomas Haesslé'}
        </a>
        {'. Les contenus sont la propriété de Clémentine Haesslé.'}
      </div>
      <style jsx>{`
        .divider {
          margin-top: 5vh;
          height: 1px;
          width: 100vw;
          background-color: rgb(232, 230, 230);
        }
        .row {
          display: flex;
          flex-direction: row;
          width: 100vw;
          align-content: space-around;
          align-items: stretch;
          justify-content: space-around;
        }
        .column {
          display: flex;
          flex-direction: column;
        }
        a {
          all: unset;
        }
        a {
          margin-bottom: 0;
          font-size: 13px;
          color: rgb(97, 96, 96);
        }
        a:hover {
          cursor: pointer;
        }
        .bottom {
          margin-top: 25px;
          font-size: 13px;
          color: rgb(97, 96, 96);
          display: flex;
          justify-content: center;
          flex-direction: row;
        }
      `}</style>
    </footer>
  );
}
