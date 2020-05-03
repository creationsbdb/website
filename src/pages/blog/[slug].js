import * as React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
const glob = require('glob');

import Layout from '../../components/Layout';

const reformatDate = (fullDate) => {
  const date = new Date(fullDate);
  return date.toLocaleDateString('fr-FR');
};
const BlogTemplate = ({ frontmatter, markdownBody, siteTitle }) => {
  return (
    <Layout siteTitle={siteTitle + ' - ' + frontmatter?.title}>
      <article>
        <div>
          <h1>{frontmatter?.title}</h1>
          <h2 className="blog__footer">
            {' par '}
            {frontmatter?.author}
          </h2>
          <h3>{reformatDate(frontmatter?.date)}</h3>
        </div>
        <div className="container">
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
      <style jsx>{`
        .container {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>
    </Layout>
  );
};
export default BlogTemplate;
export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('src/posts/**/*.md');

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
