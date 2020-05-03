import * as React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
const glob = require('glob');

import Layout from '../../components/Layout';

const ContentTemplate = ({
  frontmatter,
  markdownBody,
  siteTitle,
  url,
  facebook,
  instagram,
  email,
}) => {
  return (
    <Layout
      siteTitle={siteTitle + ' - ' + frontmatter?.title}
      siteDescription={frontmatter?.description}
      siteUrl={'/content/' + url}
      facebook={facebook}
      instagram={instagram}
      email={email}
    >
      <article>
        <div>
          <h1>{frontmatter?.title}</h1>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
};
export default ContentTemplate;
export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../contents/${slug}.md`);
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
  const blogs = glob.sync('src/contents/**/*.md');

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/content/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
