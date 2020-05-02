import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <img alt={props.siteTitle} src="/images/logo.png" width="125px" />
      </div>
      <div className="container">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <h2>Accueil</h2>
          </Link>
          <Link href="/catalog">
            <h2>Catalogue</h2>
          </Link>
          <Link href="/order">
            <h2>Commander</h2>
          </Link>
          <Link href="/introduction">
            <h2>Qui suis-je</h2>
          </Link>
          <Link href="/blog">
            <h2>Blog</h2>
          </Link>
        </nav>
      </div>
      <style jsx>
        {`
          h2 {
            margin-bottom: 0;
            color: #a6a6a6;
          }
          h2:hover {
            cursor: pointer;
            color: #000000;
          }
          nav {
            display: flex;
            justify-content: space-around;
            margin: auto;
          }
          @media (min-width: 800px) {
            .header {
              display: flex;
              flex-direction: column;
            }
            .container {
              display: flex;
              justify-content: center;
              flex-direction: row;
              width: 100vw;
            }
            .nav {
              width: 100vw;
            }
          }
          @media (max-width: 800px) {
            img {
              transform: scale(0.5);
            }
            .header {
              display: flex;
              flex-direction: row;
            }
            .container {
              display: flex;
              justify-content: flex-start;
              flex-direction: row;
            }
            h2 {
              transform: scale(0.8);
              padding: 0.5rem;
            }
          }
          @media (max-width: 480px) {
            img {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
}
