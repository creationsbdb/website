import matter from 'gray-matter';
import Layout from '../../components/Layout';
import CardList from '../../components/CardList';

const pageTitle = 'TOUTES LES CRÉATIONS';

const Index = (props) => {
  return (
    <Layout
      pathname="/catalog"
      siteTitle={props.title + ' - ' + pageTitle}
      siteDescription={props.description + ' ' + pageTitle}
      siteUrl="/catalog"
      facebook={props.facebook}
      instagram={props.instagram}
      email={props.email}
    >
      <h4 className="subtitle">{pageTitle}</h4>
      <CardList allCards={props.allProducts}></CardList>
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
  const config = await import(`../../data/config.json`);
  //get posts & context from folder
  const products = getDatas(require.context('../../products', true, /\.md$/));
  const compareProducts = (a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    // a doit être égal à b
    return 0;
  };

  return {
    props: {
      allProducts: products.sort(compareProducts),
      title: config.title,
      description: config.description,
      email: config.email,
      facebook: config.facebook,
      instagram: config.instagram,
    },
  };
}
