import * as React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
const glob = require('glob');

import Layout from '../../components/Layout';
const ProductTemplate = ({
  frontmatter,
  markdownBody,
  siteTitle,
  url,
  facebook,
  instagram,
  email,
}) => {
  const [picture, setPicture] = React.useState(
    () => frontmatter?.images[0] ?? 'logo.png'
  );
  const handleClick = (pic) => (e) => setPicture(pic);
  return (
    <Layout
      siteTitle={siteTitle + ' - ' + frontmatter?.title}
      siteDescription={frontmatter?.description}
      siteUrl={'/catalog/' + url}
      facebook={facebook}
      instagram={instagram}
      email={email}
    >
      <article className="product">
        <div className="picture">
          <img src={'/images/' + picture}></img>
          <div className="pic_list">
            {frontmatter?.images?.map((pic) => (
              <img src={'/images/' + pic} onClick={handleClick(pic)}></img>
            ))}
          </div>
        </div>
        <div className="info">
          <h1>{frontmatter?.title}</h1>
          <h2>{(frontmatter?.price ?? ' - ') + ' €'}</h2>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
      <style jsx>{`
        .product {
          display: flex;
          width: 100vw;
          flex-direction: row;
          flex-wrap: wrap;
        }
        img {
          width: 30vw;
        }
        .pic_list {
          flex-direction: row;
        }
        .pic_list img {
          margin-right: 2px;
          width: 5vw;
        }
        .pic_list img:hover {
          cursor: pointer;
        }
        .picture {
          flex-direction: column;
        }
        .info {
          margin-left: 25px;
          flex-direction: column;
          width: 45vw;
        }
      `}</style>
    </Layout>
  );
};

export default ProductTemplate;

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../products/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      url: slug,
      email: config.email,
      facebook: config.facebook,
      instagram: config.instagram,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('src/products/**/*.md');

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/catalog/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
