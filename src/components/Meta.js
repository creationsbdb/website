import Head from 'next/head';

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.siteDescription}></meta>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta property="og:title" content={props.siteTitle} />
        <meta property="og:description" content={props.siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <meta property="og:img" content="/images/logo.png" />
        <meta property="og:url" content={props.pageUrl} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content="/images/logo.png" />
        <meta property="twitter:title" content={props.siteTitle} />
        <meta property="twitter:description" content={props.siteDescription} />
      </Head>
      <style jsx global>
        {`
          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
            overflow-y: scroll;
          }
          body {
            background-color: #fff;
            color: #616060;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 10px;
            min-height: 100%;
            text-rendering: optimizeLegibility;
          }
          h1,
          h2,
          h3 {
            font-family: 'Quicksand-Regular';
          }
          @font-face {
            font-family: 'Quicksand-Regular';

            src: url('/fonts/Quicksand-Regular.svg') format('svg'),
              /* Legacy iOS */ url('/fonts/Quicksand-Regular.ttf')
                format('truetype'),
              /* Safari, Android, iOS */ url('/fonts/Quicksand-Regular.woff2')
                format('woff2'); /* Modern Browsers */
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
    </>
  );
}
