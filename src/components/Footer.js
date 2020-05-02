import Link from 'next/link';

export default function Header(props) {
  return (
    <footer className="footer">
      <div className="divider"></div>
      <div className="row">
        <div className="column">
          <Link href="/catalog">
            <p>Catalogue</p>
          </Link>
          <Link href="/order">
            <p>Commander</p>
          </Link>
          <Link href="/introduction">
            <p>Qui suis-je</p>
          </Link>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </div>
        <div className="column">
          <p>
            <a rel="nofollow" href={props.facebook}>
              Facebook
            </a>
          </p>
          <p>
            <a rel="nofollow" href={props.instagram}>
              Instagram
            </a>
          </p>
          <p>
            <a
              rel="nofollow"
              href={
                'mailto:' + props.email + '?subject=[creationsbdb]%20question'
              }
            >
              Contact
            </a>
          </p>
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
        a {
          all: unset;
        }
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
        a,
        p {
          margin-bottom: 0;
          font-size: 13px;
          color: rgb(97, 96, 96);
        }
        a:hover,
        p:hover {
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
