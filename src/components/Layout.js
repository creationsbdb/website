import Header from './Header';
import Footer from './Footer';

import Meta from './Meta';

export default function Layout(props) {
  return (
    <div className="layout">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
        pageUrl={props.siteUrl + props.pathname}
      />
      <Header siteTitle={props.siteTitle} />
      <div className="content">{props.children}</div>
      <Footer
        facebook={props.facebook}
        instagram={props.instagram}
        email={props.email}
      />
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 15vw;
              margin-right: 15vw;
            }
          }
        `}
      </style>
    </div>
  );
}
