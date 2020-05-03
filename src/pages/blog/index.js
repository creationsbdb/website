import matter from 'gray-matter';
import Layout from '../../components/Layout';
import BlogList from '../../components/BlogList';

const pageTitle = 'TOUS LES ARTICLES DE BLOG';

const Index = (props) => {
  return (
    <Layout
      pathname="/catalog"
      siteTitle={props.title + ' - ' + pageTitle}
      siteDescription={props.description}
      siteUrl={props.url}
      facebook={props.facebook}
      instagram={props.instagram}
      email={props.email}
    >
      <h4 className="subtitle">{pageTitle}</h4>
      <img
        src={'/images/banner-mother-and-daughter1.jpg'}
        alt="mother-and-daughter"
      ></img>
      <BlogList allBlogs={props.allBlogs} />
      <style jsx>{`
        h4 {
          letter-spacing: 0.2em;
          font-size: 15px;
          display: flex;
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
};

// <section>
// <BlogList allBlogs={props.allBlogs} />
// </section>
export default Index;

const getDatas = (context) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    // Create slug from filename
    const slug = key
      .replace(/^.*[\\\/]/, '')
      .split('.')
      .slice(0, -1)
      .join('.');
    const value = values[index];
    // Parse yaml metadata & markdownbody in document
    const document = matter(value.default);
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });
  return data;
};
export async function getStaticProps() {
  const siteConfig = await import(`../../data/config.json`);
  //get posts & context from folder
  const posts = getDatas(require.context('../../posts', true, /\.md$/));
  const comparePosts = (a, b) => {
    const aDate = new Date(a.frontmatter.date) ?? new Date();
    const bDate = new Date(b.frontmatter.date) ?? new Date();
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  };

  return {
    props: {
      allBlogs: posts
        .filter((post) => !post.frontmatter?.draft && true)
        .sort(comparePosts),
      title: siteConfig.default.title,
      description: siteConfig.default.description,
      email: siteConfig.default.email,
      facebook: siteConfig.default.facebook,
      instagram: siteConfig.default.instagram,
    },
  };
}
